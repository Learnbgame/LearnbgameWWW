var table = [
	"亮氨酸", "Hydrogen", "1.00794", 1, 1,
	"半胱氨酸", "Nickel", "58.6934", 10, 1,
	"缬氨酸", "Lithium", "6.941", 1, 2,
	"丙氨酸", "Scandium", "44.955912", 4, 2,
	"丝氨酸", "Nickel", "58.6934", 10, 2,
	"甘氨酸", "Nickel", "58.6934", 10, 3,
	"酪氨酸", "Krypton", "83.798", 18, 4,
	"谷氨酸", "Palladium", "106.42", 10, 6,
	"苯丙氨酸", "Xenon", "131.293", 18, 5,
	"苏氨酸", "Caesium", "132.9054", 1, 6,	
	"异亮氨酸", "Lanthanum", "138.90547", 1, 9,
	"组氨酸", "Radon", "(222)", 18, 6,
	"赖氨酸", "Francium", "(223)", 1, 7,
	"天冬酰胺", "Actinium", "(227)", 1, 10,
	"谷氨酰胺", "Uranium", "238.02891", 7, 10,
	"脯氨酸", "Plutonium", "(244)", 10, 10,
	"精氨酸", "Curium", "(247)", 13, 10,
	"色氨酸", "Ununoctium", "(294)", 18, 7,
	"甲硫氨酸", "Rubidium", "85.4678", 1, 8,
	"天冬氨酸", "Yttrium", "88.90585", 4, 8,
];

var atomData = [
{
Num           : "1",
Name             : "Hydrogen",
Short_name       : "H",
Color            : "0.99,0.99,0.99",
radius_used      : "0.320000",
radius_covalent : "0.320000",
radius_ic   : "0.790000",
Charge_state     : "-1",
radius_ionic    : "1.540000",
},
{
Num           : "2",
Name             : "Helium",
Short_name       : "He",
Color            : "0.84,0.99,0.99",
radius_used      : "0.930000",
radius_covalent : "0.930000",
radius_ic   : "0.490000",
},
{
Num           : "3",
Name             : "Lithium",
Short_name       : "Li",
Color            : "0.79,0.5,0.99",
radius_used      : "1.230000",
radius_covalent : "1.230000",
radius_ic   : "2.050000",
Charge_state     : "1",
radius_ionic    : "0.680000",
},
{
Num           : "4",
Name             : "Beryllium",
Short_name       : "Be",
Color            : "0.75,0.99,0.0",
radius_used      : "0.900000",
radius_covalent : "0.900000",
radius_ic   : "1.400000",
Charge_state     : "1",
radius_ionic    : "0.440000",
Charge_state     : "2",
radius_ionic    : "0.350000",
},
{
Num           : "5",
Name             : "Boron",
Short_name       : "B",
Color            : "0.99,0.70,0.70",
radius_used      : "0.820000",
radius_covalent : "0.820000",
radius_ic   : "1.170000",
Charge_state     : "1",
radius_ionic    : "0.350000",
Charge_state     : "3",
radius_ionic    : "0.230000",
},
{
Num           : "6",
Name             : "Carbon",
Short_name       : "C",
Color            : "0.3,0.3,0.3",
radius_used      : "0.910000",
radius_covalent : "0.770000",
radius_ic   : "0.910000",
Charge_state     : "-4",
radius_ionic    : "2.600000",
Charge_state     : "4",
radius_ionic    : "0.160000",
},
{
Num           : "7",
Name             : "Nitrogen",
Short_name       : "N",
Color            : "0.18,0.31,0.96",
radius_used      : "0.750000",
radius_covalent : "0.750000",
radius_ic   : "0.750000",
Charge_state     : "-3",
radius_ionic    : "1.710000",
Charge_state     : "1",
radius_ionic    : "0.250000",
Charge_state     : "3",
radius_ionic    : "0.160000",
Charge_state     : "5",
radius_ionic    : "0.130000",
},
{
Num           : "8",
Name             : "Oxygen",
Short_name       : "O",
Color            : "0.99,0.05,0.05",
radius_used      : "0.730000",
radius_covalent : "0.730000",
radius_ic   : "0.650000",
Charge_state     : "-2",
radius_ionic    : "1.320000",
Charge_state     : "-1",
radius_ionic    : "1.760000",
Charge_state     : "1",
radius_ionic    : "0.220000",
Charge_state     : "6",
radius_ionic    : "0.090000",
},
{
Num           : "9",
Name             : "Fluorine",
Short_name       : "F",
Color            : "0.0,1.0,0.0",
radius_used      : "1.330000",
radius_covalent : "0.720000",
radius_ic   : "0.570000",
Charge_state     : "-1",
radius_ionic    : "1.330000",
Charge_state     : "7",
radius_ionic    : "0.080000",
},
{
Num           : "10",
Name             : "Neon",
Short_name       : "Ne",
Color            : "0.69,0.88,0.95",
radius_used      : "0.710000",
radius_covalent : "0.710000",
radius_ic   : "0.510000",
Charge_state     : "1",
radius_ionic    : "1.120000",
},
{
Num           : "11",
Name             : "Sodium",
Short_name       : "Na",
Color            : "0.5,0.5,0.5",
radius_used      : "0.970000",
radius_covalent : "1.540000",
radius_ic   : "2.230000",
Charge_state     : "1",
radius_ionic    : "0.970000",
},
{
Num           : "12",
Name             : "Magnesium",
Short_name       : "Mg",
Color            : "0.38,0.066,1.0",
radius_used      : "0.660000",
radius_covalent : "1.360000",
radius_ic   : "1.720000",
Charge_state     : "1",
radius_ionic    : "0.820000",
Charge_state     : "2",
radius_ionic    : "0.660000",
},
{
Num           : "13",
Name             : "Aluminium",
Short_name       : "Al",
Color            : "0.74,0.64,0.64",
radius_used      : "1.180000",
radius_covalent : "1.180000",
radius_ic   : "1.820000",
Charge_state     : "3",
radius_ionic    : "0.510000",
},
{
Num           : "14",
Name             : "Silicon",
Short_name       : "Si",
Color            : "0.93,0.78,0.62",
radius_used      : "1.110000",
radius_covalent : "1.110000",
radius_ic   : "1.460000",
Charge_state     : "-4",
radius_ionic    : "2.710000",
Charge_state     : "-1",
radius_ionic    : "3.840000",
Charge_state     : "1",
radius_ionic    : "0.650000",
Charge_state     : "4",
radius_ionic    : "0.420000",
},
{
Num           : "15",
Name             : "Phosphorus",
Short_name       : "P",
Color            : "0.99,0.5,0.0",
radius_used      : "1.060000",
radius_covalent : "1.060000",
radius_ic   : "1.230000",
Charge_state     : "-3",
radius_ionic    : "2.120000",
Charge_state     : "3",
radius_ionic    : "0.440000",
Charge_state     : "5",
radius_ionic    : "0.350000",
},
{
Num           : "16",
Name             : "Sulfur",
Short_name       : "S",
Color            : "0.99,0.99,0.18",
radius_used      : "1.020000",
radius_covalent : "1.020000",
radius_ic   : "1.090000",
Charge_state     : "-2",
radius_ionic    : "1.840000",
Charge_state     : "2",
radius_ionic    : "2.190000",
Charge_state     : "4",
radius_ionic    : "0.370000",
Charge_state     : "6",
radius_ionic    : "0.300000",
},
{
Num           : "17",
Name             : "Chlorine",
Short_name       : "Cl",
Color            : "0.095,0.411,1.0",
radius_used      : "1.810000",
radius_covalent : "0.990000",
radius_ic   : "0.970000",
Charge_state     : "-1",
radius_ionic    : "1.810000",
Charge_state     : "5",
radius_ionic    : "0.340000",
Charge_state     : "7",
radius_ionic    : "0.270000",
},
{
Num           : "18",
Name             : "Argon",
Short_name       : "Ar",
Color            : "0.5,0.81,0.88",
radius_used      : "0.980000",
radius_covalent : "0.980000",
radius_ic   : "0.880000",
Charge_state     : "1",
radius_ionic    : "1.540000",
},
{
Num           : "19",
Name             : "Potassium",
Short_name       : "K",
Color            : "0.55,0.25,0.82",
radius_used      : "2.030000",
radius_covalent : "2.030000",
radius_ic   : "2.770000",
Charge_state     : "1",
radius_ionic    : "0.810000",
},
{
Num           : "20",
Name             : "Calcium",
Short_name       : "Ca",
Color            : "0.23,0.99,0.0",
radius_used      : "1.740000",
radius_covalent : "1.740000",
radius_ic   : "2.230000",
Charge_state     : "1",
radius_ionic    : "1.180000",
Charge_state     : "2",
radius_ionic    : "0.990000",
},

];


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
        var oBWrap = document.getElementById("bg-wrap");
        var oBack = document.getElementById("back");
        var oiFrame = document.getElementById("iFrame");
        //给每一个li加个点击事件，不太合理，这里用事件委托
        console.log(oUl)
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
                        var index1 = getNode(target)
                        console.log(index1)
                        index = index1.previousSibling.textContent-1;
                        console.log(index)
                        var date = atomData[index] ;
                        console.log(index1.nextSibling.textContent)
                        oAlert.index = index;
                        oATitle.innerHTML = date.Name;
                        oAImg.src = "/static/img/src/"+date.Name+"/" + date.Name.toLowerCase() + ".jgp";
                 
                        oAInfo.innerHTML = "Num:" + date.Num +"<br>"+"Short_name:" + date.Short_name +"<br>"+"Color:" + date.Color +"<br>"+"radius_used:" + date.radius_used +"<br>"+"radius_covalent:" + date.radius_covalent +"<br>"+"radius_ic:" + date.radius_ic ;
                        oAAuthor.innerHTML = date.Short_name
                        show();
                    }
                }
            }
        };
        oAlert.onclick = function (e) {
            var date = atomData[this.index] ;
            console.log
            oiFrame.src = "/static/img/src/"+date.Name+"/index.html";
            oBWrap.className = "left";(date)
            e.cancelBubble = true; // 阻止冒泡
        };
        document.onclick = function () {
            hide();//li以外点击 alert 弹窗隐藏
        };
        oBack.onclick = function () {
            oBWrap.className = "";
        };
         // Js 动画  显示
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
        if(node.nodeName === "BODY" || node.nodeName === "DIV" ){
            return node;
        }else {
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