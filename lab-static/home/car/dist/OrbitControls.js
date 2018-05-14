/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 * @author mrflix / http://felixniklas.de
 *
 * released under MIT License (MIT)
 */
/*global THREE, console */
//这组控件执行轨道运行，dollying（缩放）和平移。  它维持
// “向上”方向为+ Y，与TrackballControls不同。  在平板电脑和手机上触摸
//支持。
//
//轨道 - 鼠标左键/触摸：一个手指移动
//缩放 - 中鼠标，或鼠标滚轮/触摸：两个手指展开或挤压
//平移 - 鼠标右键，或箭头键/ touch：三次微调
//
//这是一个在实例中使用的（大多数）TrackballControls的替换。
//也就是说，包括这个js文件和你看到的地方：
// controls = new THREE.TrackballControls（camera）;
// controls.target.z = 150;
//简单的替换“OrbitControls”和控件应该按原样工作。


THREE.OrbitControls = function ( object, domElement, localElement ) {

    this.object = object;
    this.domElement = ( domElement !== undefined ) ? domElement : document;
    this.localElement = ( localElement !== undefined ) ? localElement : document;

    // API

    //设置为false以禁用此控件
    this.enabled = true;

    // “target”设置焦点的位置，其中控件围绕
    //和它在哪里平移。
    this.target = new THREE.Vector3();
    // center is old，deprecated;  使用“目标”
    this.center = this.target;

    //这个选项实际上允许dollying进出;  左为“缩放”
    //向后兼容性
    this.noZoom = false;
    this.zoomSpeed = 1.0;
    //限制到多远，你可以多少进出
    this.minDistance = 0;
    this.maxDistance = Infinity;

    //设置为true可禁用此控件
    this.noRotate = false;
    this.rotateSpeed = 1.0;

    //设置为true可禁用此控件
    this.noPan = false;
    this.keyPanSpeed = 7.0;	//每个箭头键移动的像素

    //设置为true以自动围绕目标旋转
    this.autoRotate = false;
    this.autoRotateSpeed = 2.0; // fps为60时每秒30秒

    //你可以在多远的轨道上，上限和下限。
    // Range为0到Math.PI radians。
    this.minPolarAngle = 0;  //弧度
    this.maxPolarAngle = Math.PI; //弧度

    //设置为true以禁用键的使用
    this.noKeys = false;
    //四个箭头键
    this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

    // //////////
    //内部

    var scope = this;

    var EPS = 0.000001;

    var rotateStart = new THREE.Vector2();
    var rotateEnd = new THREE.Vector2();
    var rotateDelta = new THREE.Vector2();

    var panStart = new THREE.Vector2();
    var panEnd = new THREE.Vector2();
    var panDelta = new THREE.Vector2();

    var dollyStart = new THREE.Vector2();
    var dollyEnd = new THREE.Vector2();
    var dollyDelta = new THREE.Vector2();

    var phiDelta = 0;
    var thetaDelta = 0;
    var scale = 1;
    var pan = new THREE.Vector3();

    var lastPosition = new THREE.Vector3();

    var STATE = { NONE : -1, ROTATE : 0, DOLLY : 1, PAN : 2, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, TOUCH_PAN : 5 };
    var state = STATE.NONE;

    //事件

    var changeEvent = { type: 'change' };


    this.rotateLeft = function ( angle ) {

        if ( angle === undefined ) {

            angle = getAutoRotationAngle();

        }

        thetaDelta -= angle;

    };

    this.rotateUp = function ( angle ) {

        if ( angle === undefined ) {

            angle = getAutoRotationAngle();

        }

        phiDelta -= angle;

    };

    //通过世界空间的距离向左移动
    this.panLeft = function ( distance ) {

        var panOffset = new THREE.Vector3();
        var te = this.object.matrix.elements;
        //获取矩阵的X列
        panOffset.set( te[0], te[1], te[2] );
        panOffset.multiplyScalar(-distance);

        pan.add( panOffset );

    };

    //通过在世界空间的距离向上移动
    this.panUp = function ( distance ) {

        var panOffset = new THREE.Vector3();
        var te = this.object.matrix.elements;
        //得到Y列的矩阵
        panOffset.set( te[4], te[5], te[6] );
        panOffset.multiplyScalar(distance);

        pan.add( panOffset );
    };

    // main entry point;  通过在像素空间中所需的变化Vector2，
    //右边和下边是正的
    this.pan = function ( delta ) {

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        if ( scope.object.fov !== undefined ) {

            // 透视
            var position = scope.object.position;
            var offset = position.clone().sub( scope.target );
            var targetDistance = offset.length();

            // fov的一半是屏幕顶部的中心
            targetDistance *= Math.tan( (scope.object.fov/2) * Math.PI / 180.0 );
            //我们实际上不使用screenWidth，因为透视相机固定为屏幕高度
            scope.panLeft( 2 * delta.x * targetDistance / element.clientHeight );
            scope.panUp( 2 * delta.y * targetDistance / element.clientHeight );

        } else if ( scope.object.top !== undefined ) {

            // orthographic
            scope.panLeft( delta.x * (scope.object.right - scope.object.left) / element.clientWidth );
            scope.panUp( delta.y * (scope.object.top - scope.object.bottom) / element.clientHeight );

        } else {

            //相机无正射或透视 - 警告用户
            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

        }

    };

    this.dollyIn = function ( dollyScale ) {

        if ( dollyScale === undefined ) {

            dollyScale = getZoomScale();

        }

        scale /= dollyScale;

    };

    this.dollyOut = function ( dollyScale ) {

        if ( dollyScale === undefined ) {

            dollyScale = getZoomScale();

        }

        scale *= dollyScale;

    };

    this.update = function () {

        var position = this.object.position;
        var offset = position.clone().sub( this.target );

        //从z轴绕y轴的角度

        var theta = Math.atan2( offset.x, offset.z );

        //与y轴成角度

        var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

        if ( this.autoRotate ) {

            this.rotateLeft( getAutoRotationAngle() );

        }

        theta += thetaDelta;
        phi += phiDelta;

        //限制phi在期望的限制之间
        phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

        //限制phi在EPS和PI-EPS之间
        phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

        var radius = offset.length() * scale;

        //将半径限制在所需限制之间
        radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );


        //将目标移动到平移位置
        this.target.add( pan );

        offset.x = radius * Math.sin( phi ) * Math.sin( theta );
        offset.y = radius * Math.cos( phi );
        offset.z = radius * Math.sin( phi ) * Math.cos( theta );

        position.copy( this.target ).add( offset );

        this.object.lookAt( this.target );

        thetaDelta = 0;
        phiDelta = 0;
        scale = 1;
        pan.set(0,0,0);

        if ( lastPosition.distanceTo( this.object.position ) > 0 ) {

            this.dispatchEvent( changeEvent );

            lastPosition.copy( this.object.position );

        }

    };


    function getAutoRotationAngle() {

        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

    }

    function getZoomScale() {

        return Math.pow( 0.95, scope.zoomSpeed );

    }

    function onMouseDown( event ) {

        if ( scope.enabled === false ) { return; }
        event.preventDefault();

        if ( event.button === 0 ) {
            if ( scope.noRotate === true ) { return; }

            state = STATE.ROTATE;

            rotateStart.set( event.clientX, event.clientY );

        } else if ( event.button === 1 ) {
            if ( scope.noZoom === true ) { return; }

            state = STATE.DOLLY;

            dollyStart.set( event.clientX, event.clientY );

        } else if ( event.button === 2 ) {
            if ( scope.noPan === true ) { return; }

            state = STATE.PAN;

            panStart.set( event.clientX, event.clientY );

        }

        // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
        scope.domElement.addEventListener( 'mousemove', onMouseMove, false );
        scope.domElement.addEventListener( 'mouseup', onMouseUp, false );

    }

    function onMouseMove( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        if ( state === STATE.ROTATE ) {

            if ( scope.noRotate === true ) return;

            rotateEnd.set( event.clientX, event.clientY );
            rotateDelta.subVectors( rotateEnd, rotateStart );

            //在整个屏幕上旋转360度
            scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
            //沿着整个屏幕上下旋转尝试去360°，但限制到180°
            scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

            rotateStart.copy( rotateEnd );

        } else if ( state === STATE.DOLLY ) {

            if ( scope.noZoom === true ) return;

            dollyEnd.set( event.clientX, event.clientY );
            dollyDelta.subVectors( dollyEnd, dollyStart );

            if ( dollyDelta.y > 0 ) {

                scope.dollyIn();

            } else {

                scope.dollyOut();

            }

            dollyStart.copy( dollyEnd );

        } else if ( state === STATE.PAN ) {

            if ( scope.noPan === true ) return;

            panEnd.set( event.clientX, event.clientY );
            panDelta.subVectors( panEnd, panStart );

            scope.pan( panDelta );

            panStart.copy( panEnd );

        }

        // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
        scope.update();

    }

    function onMouseUp( /* event */ ) {

        if ( scope.enabled === false ) return;

        // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
        scope.domElement.removeEventListener( 'mousemove', onMouseMove, false );
        scope.domElement.removeEventListener( 'mouseup', onMouseUp, false );

        state = STATE.NONE;

    }

    function onMouseWheel( event ) {

        if ( scope.enabled === false || scope.noZoom === true ) return;

        var delta = 0;

        if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9

            delta = event.wheelDelta;

        } else if ( event.detail ) { // Firefox

            delta = - event.detail;

        }

        if ( delta > 0 ) {

            scope.dollyOut();

        } else {

            scope.dollyIn();

        }

    }

    function onKeyDown( event ) {

        if ( scope.enabled === false ) { return; }
        if ( scope.noKeys === true ) { return; }
        if ( scope.noPan === true ) { return; }

        // pan a pixel - I guess for precise positioning?
        // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
        var needUpdate = false;

        switch ( event.keyCode ) {

            case scope.keys.UP:
                scope.pan( new THREE.Vector2( 0, scope.keyPanSpeed ) );
                needUpdate = true;
                break;
            case scope.keys.BOTTOM:
                scope.pan( new THREE.Vector2( 0, -scope.keyPanSpeed ) );
                needUpdate = true;
                break;
            case scope.keys.LEFT:
                scope.pan( new THREE.Vector2( scope.keyPanSpeed, 0 ) );
                needUpdate = true;
                break;
            case scope.keys.RIGHT:
                scope.pan( new THREE.Vector2( -scope.keyPanSpeed, 0 ) );
                needUpdate = true;
                break;
        }

        // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
        if ( needUpdate ) {

            scope.update();

        }

    }

    function touchstart( event ) {

        if ( scope.enabled === false ) { return; }

        switch ( event.touches.length ) {

            case 1:	// //单指触摸：旋转
                if ( scope.noRotate === true ) { return; }

                state = STATE.TOUCH_ROTATE;

                rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                break;

            case 2:	 //双指触摸：dolly
                if ( scope.noZoom === true ) { return; }

                state = STATE.TOUCH_DOLLY;

                var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
                var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
                var distance = Math.sqrt( dx * dx + dy * dy );
                dollyStart.set( 0, distance );
                break;

            case 3: //三指触摸：平移
                if ( scope.noPan === true ) { return; }

                state = STATE.TOUCH_PAN;

                panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                break;

            default:
                state = STATE.NONE;

        }
    }

    function touchmove( event ) {

        if ( scope.enabled === false ) { return; }

        event.preventDefault();
        event.stopPropagation();

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        switch ( event.touches.length ) {

            case 1: //单指触摸：旋转
                if ( scope.noRotate === true ) { return; }
                if ( state !== STATE.TOUCH_ROTATE ) { return; }

                rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                rotateDelta.subVectors( rotateEnd, rotateStart );

                //在整个屏幕上旋转360度
                scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
                //沿着整个屏幕上下旋转尝试去360°，但限制到180°
                scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

                rotateStart.copy( rotateEnd );
                break;

            case 2://双指触摸：dolly
                if ( scope.noZoom === true ) { return; }
                if ( state !== STATE.TOUCH_DOLLY ) { return; }

                var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
                var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
                var distance = Math.sqrt( dx * dx + dy * dy );

                dollyEnd.set( 0, distance );
                dollyDelta.subVectors( dollyEnd, dollyStart );

                if ( dollyDelta.y > 0 ) {

                    scope.dollyOut();

                } else {

                    scope.dollyIn();

                }

                dollyStart.copy( dollyEnd );
                break;

            case 3: //三指触摸：平移
                if ( scope.noPan === true ) { return; }
                if ( state !== STATE.TOUCH_PAN ) { return; }

                panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                panDelta.subVectors( panEnd, panStart );

                scope.pan( panDelta );

                panStart.copy( panEnd );
                break;

            default:
                state = STATE.NONE;

        }

    }

    function touchend( /* event */ ) {

        if ( scope.enabled === false ) { return; }

        state = STATE.NONE;
    }

    this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
    this.localElement.addEventListener( 'mousedown', onMouseDown, false );
    this.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
    this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

    this.domElement.addEventListener( 'keydown', onKeyDown, false );

    this.localElement.addEventListener( 'touchstart', touchstart, false );
    this.domElement.addEventListener( 'touchend', touchend, false );
    this.domElement.addEventListener( 'touchmove', touchmove, false );

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );