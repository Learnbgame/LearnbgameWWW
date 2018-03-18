window.onload = function(){

	var camera, scene, renderer;
	var controls;

	var objects = [];
	var targets = { table: [], sphere: [], helix: [], grid: [] };

	init();
	animate();

	function init() {

		camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.z = 3000;

		scene = new THREE.Scene();

		// table

		for ( var i = 0; i < table.length; i += 5 ) {

			var element = document.createElement( 'div' );
			element.className = 'element';
			element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

			var number = document.createElement( 'div' );
			number.className = 'number';
			number.textContent = (i/5) + 1;
			element.appendChild( number );

			var symbol = document.createElement( 'div' );
			symbol.className = 'symbol';
			symbol.textContent = table[ i ];
			element.appendChild( symbol );

			var details = document.createElement( 'div' );
			details.className = 'details';
			details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
			element.appendChild( details );

			var object = new THREE.CSS3DObject( element );
			object.position.x = Math.random() * 4000 - 2000;
			object.position.y = Math.random() * 4000 - 2000;
			object.position.z = Math.random() * 4000 - 2000;
			scene.add( object );

			objects.push( object );

			//

			var object = new THREE.Object3D();
			object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
			object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

			targets.table.push( object );

		}

		// sphere

		var vector = new THREE.Vector3();

		for ( var i = 0, l = objects.length; i < l; i ++ ) {

			var phi = Math.acos( -1 + ( 2 * i ) / l );
			var theta = Math.sqrt( l * Math.PI ) * phi;

			var object = new THREE.Object3D();

			object.position.x = 800 * Math.cos( theta ) * Math.sin( phi );
			object.position.y = 800 * Math.sin( theta ) * Math.sin( phi );
			object.position.z = 800 * Math.cos( phi );

			vector.copy( object.position ).multiplyScalar( 2 );

			object.lookAt( vector );

			targets.sphere.push( object );

		}

		// helix

		var vector = new THREE.Vector3();

		for ( var i = 0, l = objects.length; i < l; i ++ ) {

			var phi = i * 0.175 + Math.PI;

			var object = new THREE.Object3D();

			object.position.x = 900 * Math.sin( phi );
			object.position.y = - ( i * 8 ) + 450;
			object.position.z = 900 * Math.cos( phi );

			vector.x = object.position.x * 2;
			vector.y = object.position.y;
			vector.z = object.position.z * 2;

			object.lookAt( vector );

			targets.helix.push( object );

		}

		// grid

		for ( var i = 0; i < objects.length; i ++ ) {

			var object = new THREE.Object3D();

			object.position.x = ( ( i % 5 ) * 400 ) - 800;
			object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
			object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

			targets.grid.push( object );

		}

		//

		renderer = new THREE.CSS3DRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.domElement.style.position = 'absolute';
		oUl = document.getElementById( 'container' ).appendChild( renderer.domElement );

		//
        (function () {
            var oAlert = document.getElementById("alert"),
                oATitle = oAlert.getElementsByClassName("title")[0].getElementsByTagName("span")[0],
                oAImg = oAlert.getElementsByClassName("img")[0].getElementsByTagName("img")[0],
                oAInfo = oAlert.getElementsByClassName("info")[0].getElementsByTagName("span")[0],
                oAAuthor = oAlert.getElementsByClassName("author")[0].getElementsByTagName("span")[0];
         //   var oBWrap = document.getElementById("bg-wrap");
            var oBack = document.getElementById("back");
            var oiFrame = document.getElementById("iFrame");
            //给每一个li加个点击事件，不太合理，这里用事件委托
            
            oUl.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(/div/i.test(getNode(target))){
                    if(getNode(target).ICBC){
                        getNode(target).ICBC = false;
                    }else {
                        if(oAlert.style.display === "block"){
                            hide();
                        }else {
                            var index = getNode(target).index;
                     //       var date = WsbData[index] || WsbData[0];
                            oAlert.index = index;
                      //      oATitle.innerHTML = date.title;
                     //       oAImg.src = "src/"+date.src+"/index.png";
                            oAInfo.innerHTML = "描述："//+date.dec;
                            oAAuthor.innerHTML = "制作："//+date.author;
                            show();
                        }
                    }
                }
            };
 /**           oAlert.onclick = function (e) {
                var date = WsbData[this.index] || WsbData[0];
                oiFrame.src = "src/"+date.src+"/index.html";
                oBWrap.className = "left";
                e.cancelBubble = true; // 阻止冒泡
            };
**/         document.onclick = function () {
                hide();//li以外点击 alert 弹窗隐藏
            };
/**            oBack.onclick = function () {
                oBWrap.className = "";
            };
 **/            // Js 动画  显示
            function show() {
                if(!oAlert.timer){
                    oAlert.timer = true;
                    //初始样式
                    oAlert.style.display = "block";
                    oAlert.style.transform = "rotateY(0deg) scale(2)";
                    oAlert.style.opacity = "0";
                    var time = 800,//显示时间
                        sTime = new Date();//初始时间
                    function play() {
                        var prop = (new Date - sTime)/time; // prop 表比例
                        if(prop >= 1){
                            prop = 1;
                            oAlert.timer = false;
                        }else {
                            requestAnimationFrame(play);
                        }
                        oAlert.style.transform = "rotateY(0deg) scale("+((1-2)*prop+2)+")";
                        oAlert.style.opacity = prop;
                    }
                    requestAnimationFrame(play);
                }
                return false;
            }
            //Js 动画 隐藏
            function hide() {
                if(oAlert.style.display === "block" && !oAlert.timer){
                    oAlert.timer = true;
                    oAlert.style.display = "block";
                    oAlert.style.transform = "rotateY(0deg) scale(1)";
                    oAlert.style.opactiy = "1";
                    var time = 800,
                        sTime = new Date();
                    function play() {
                        var prop = (new Date - sTime)/time;
                        if(prop>=1){
                            prop = 1;
                            oAlert.timer = false;
                            oAlert.style.display = "none";
                        }else{
                            requestAnimationFrame(play);
                        }
                        oAlert.style.transform = "rotateY("+180*prop+"deg) scale("+(1 - prop)+")";
                        oAlert.style.opacity = 1 - prop;
                    }
                    requestAnimationFrame(play);
                }
            }
            
        })();

        function getNode(node) {
            if(node.nodeName === "BODY" || node.nodeName === "DIV" || node.nodeName === "UL"){
                return node;
            }
            if( node.nodeName === "LI"){
                return node;
            } else {
                return getNode(node.parentNode);
            }
            
        }       

		//


		controls = new THREE.TrackballControls( camera, renderer.domElement );
		controls.rotateSpeed = 0.5;
		controls.minDistance = 500;
		controls.maxDistance = 6000;
		controls.addEventListener( 'change', render );

		var button = document.getElementById( 'table' );
		button.addEventListener( 'click', function ( event ) {

			transform( targets.table, 2000 );

		}, false );

		var button = document.getElementById( 'sphere' );
		button.addEventListener( 'click', function ( event ) {

			transform( targets.sphere, 2000 );

		}, false );

		var button = document.getElementById( 'helix' );
		button.addEventListener( 'click', function ( event ) {

			transform( targets.helix, 2000 );

		}, false );

		var button = document.getElementById( 'grid' );
		button.addEventListener( 'click', function ( event ) {

			transform( targets.grid, 2000 );

		}, false );

		transform( targets.table, 5000 );

		//

		window.addEventListener( 'resize', onWindowResize, false );

	}

	function transform( targets, duration ) {

		TWEEN.removeAll();

		for ( var i = 0; i < objects.length; i ++ ) {

			var object = objects[ i ];
			var target = targets[ i ];

			new TWEEN.Tween( object.position )
				.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
				.easing( TWEEN.Easing.Exponential.InOut )
				.start();

			new TWEEN.Tween( object.rotation )
				.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
				.easing( TWEEN.Easing.Exponential.InOut )
				.start();

		}

		new TWEEN.Tween( this )
			.to( {}, duration * 2 )
			.onUpdate( render )
			.start();

	}

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

		render();

	}

	function animate() {

		requestAnimationFrame( animate );

		TWEEN.update();

		controls.update();

	}

	function render() {

		renderer.render( scene, camera );

	}
}

