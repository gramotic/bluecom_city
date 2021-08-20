(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"City_Animation_atlas_1", frames: [[506,0,426,564],[0,0,504,960],[560,1062,565,368],[658,1432,363,572],[0,962,558,499],[934,0,462,487],[560,566,466,494],[0,1463,656,395],[1028,489,356,393],[1023,1432,280,236]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bluecom_city = function() {
	this.initialize(img.bluecom_city);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2930,2246);


(lib.bluecom_city_agrar = function() {
	this.initialize(ss["City_Animation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bluecom_city_buero = function() {
	this.initialize(ss["City_Animation_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bluecom_city_cafe = function() {
	this.initialize(ss["City_Animation_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bluecom_city_hotel = function() {
	this.initialize(ss["City_Animation_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bluecom_city_industrie = function() {
	this.initialize(ss["City_Animation_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bluecom_city_kh = function() {
	this.initialize(ss["City_Animation_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bluecom_city_parken = function() {
	this.initialize(ss["City_Animation_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bluecom_city_privat = function() {
	this.initialize(ss["City_Animation_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bluecom_city_rathaus = function() {
	this.initialize(ss["City_Animation_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bluecom_city_sport = function() {
	this.initialize(ss["City_Animation_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.bluecom_city_sport();
	this.instance.setTransform(-140,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-118,280,236);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.bluecom_city_rathaus();
	this.instance.setTransform(-178,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178,-196.5,356,393);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.bluecom_city_privat();
	this.instance.setTransform(-328,-197.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328,-197.5,656,395);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.bluecom_city_parken();
	this.instance.setTransform(-233,-247);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233,-247,466,494);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.bluecom_city_kh();
	this.instance.setTransform(-231,-243.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231,-243.5,462,487);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.bluecom_city_industrie();
	this.instance.setTransform(-279,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279,-249.5,558,499);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.bluecom_city_hotel();
	this.instance.setTransform(-181.5,-286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.5,-286,363,572);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.bluecom_city_cafe();
	this.instance.setTransform(-282.5,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.5,-184,565,368);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.bluecom_city_buero();
	this.instance.setTransform(-252,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252,-480,504,960);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.bluecom_city_agrar();
	this.instance.setTransform(-213,-282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213,-282,426,564);


(lib.hoveroversport = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A4KIZIgHrQIP+wrMAglAUNI8rS4g");
	this.shape.setTransform(155.375,125.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoveroversport, new cjs.Rectangle(0,0,310.8,250.2), null);


(lib.hoveroverrathaus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A83RCIAN/UMAh2gSZIXGLwMAAmAkZI98ROg");
	this.shape.setTransform(184.775,209.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoveroverrathaus, new cjs.Rectangle(0,0,369.6,418.4), null);


(lib.hoveroverprivat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg2NgMUMAipgUKMAiRAToIE4iaIMuHcIAYFRIVjMVMgj1AWtg");
	this.shape.setTransform(346.975,207.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoveroverprivat, new cjs.Rectangle(0,0,694,415.9), null);


(lib.hoveroverparken = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Egl9AVcIAN+hMAt+gbzIbmQDMACKAhEMgwhAYqg");
	this.shape.setTransform(243.025,236.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoveroverparken, new cjs.Rectangle(0,0,486.1,472.3), null);


(lib.hoveroverkrankenhaus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EglEAPhIAy/sMAkKgUdIdYTeIhUShIJJGUIgmHpMgk9AVUg");
	this.shape.setTransform(237.275,234.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoveroverkrankenhaus, new cjs.Rectangle(0,0,474.6,468.9), null);


(lib.hoveroverindustrie = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgvOAN7IBD5PIMNn0IHhD7IBG1SITOl/IEkDAIApYlMAqiAWrIAKMhIFfEEI6fSIg");
	this.shape.setTransform(302.3,271.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoveroverindustrie, new cjs.Rectangle(0,0,604.6,543.9), null);


(lib.hoveroverhotel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Egb0AgSMgAgg/jIYfwFMAgKASTMgARA+kI79N2g");
	this.shape.setTransform(181.25,303.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoveroverhotel, new cjs.Rectangle(0,0,362.5,606.3), null);


(lib.hoverovercafe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AJRyiICIBPIHklgIZ3PRIm/FbIFoDPItsH2IuOkJIpLkbIsQI8I02NeIyFptIDqiJIgarSIRbp1IJiFVg");
	this.shape.setTransform(286.8,146.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("EgszANHIDqiJIgarSIRbp1IJiFVIX3tuICIBPIHklgIZ3PRInAFbIFoDPItrH2IuOkJIpKkbIsRI8I02Neg");
	this.shape_1.setTransform(286.8,146.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoverovercafe, new cjs.Rectangle(-1,-1,575.6,294.1), null);


(lib.hoveroveragrar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhK7gBOMA84gtXMBY/AzhMhFhApqg");
	this.shape.setTransform(479.6,298.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoveroveragrar, new cjs.Rectangle(0,0,959.2,596.4), null);


(lib.buero_hover = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EghVA0tMAAxhoOMAiTgUVIfnUVMAAABpwMghWARog");
	this.shape.setTransform(213.4,459.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buero_hover, new cjs.Rectangle(0,0,426.8,919.9), null);


(lib.sportaktiv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}
	this.frame_11 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13));

	// object
	this.instance = new lib.Tween10("synched",0);
	this.instance.setTransform(140,118);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).to({alpha:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,236);


(lib.rathausaktiv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}
	this.frame_11 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13));

	// object
	this.instance = new lib.Tween9("synched",0);
	this.instance.setTransform(178,196.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).to({alpha:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356,393);


(lib.privataktiv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}
	this.frame_11 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13));

	// object
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(328,197.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).to({startPosition:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,656,395);


(lib.parkenaktiv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}
	this.frame_11 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13));

	// object
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(233,247);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).to({alpha:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,466,494);


(lib.krankenhausaktiv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}
	this.frame_11 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13));

	// object
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(231,243.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).to({alpha:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,462,487);


(lib.industrieaktiv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}
	this.frame_11 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13));

	// object
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(279,249.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).to({alpha:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,558,499);


(lib.hoveroverbuero = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.hover_over_buero = new lib.buero_hover();
	this.hover_over_buero.name = "hover_over_buero";
	this.hover_over_buero.setTransform(213.4,459.9,1,1,0,0,0,213.4,459.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("EggkgzhMAiTgUVIfnUVMAAABpwMghWARoMghVgTKg");
	this.shape.setTransform(213.4,459.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.hover_over_buero}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoveroverbuero, new cjs.Rectangle(-1,-1,428.8,921.9), null);


(lib.hotelaktiv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}
	this.frame_11 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13));

	// object
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(181.5,286);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).to({alpha:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363,572);


(lib.cafeaktiv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}
	this.frame_11 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13));

	// object
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(290.5,182);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).to({alpha:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,-2,565,368);


(lib.bueroaktiv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}
	this.frame_11 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13));

	// object
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(252,480);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).to({alpha:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,504,960);


(lib.agraraktiv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}
	this.frame_11 = function() {
		var _this = this;
		/*
		Movieclip/Video beenden
		Beendet den angegebenen Movieclip oder das Video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13));

	// object
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(213,282);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).to({alpha:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,426,564);


// stage content:
(lib.City_Animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Durch Bewegen der Maus aus der angegebenen Symbolinstanz heraus wird eine Funktion ausgeführt.
		'3' gibt an, wie oft das Ereignis ausgelöst werden soll.
		*/
		stage.enableMouseOver(3);
		_this.hover_over_sport.on('mouseover', function(){
			var frameNumber = _this.sport.currentFrame
		
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber < 12) {
				_this.sport.gotoAndPlay(frameNumber);
			} else if (frameNumber > 12) {
				_this.sport.gotoAndPlay(24 - frameNumber);
			}
		});
		
		_this.hover_over_sport.on('mouseout', function(){
			var frameNumber = _this.sport.currentFrame
			
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber >= 12) {
				_this.sport.gotoAndPlay(frameNumber);
			} else if (frameNumber < 12) {
				_this.sport.gotoAndPlay(24 - frameNumber);
			}
		});
		
		var _this = this;
		/*
		Durch Klicken auf die angegebene Symbolinstanz wird eine Funktion ausgeführt.
		*/
		_this.hover_over_sport.on('click', function(){
		/*
		Lädt die URL in einem neuen Browserfenster.
		*/
		window.open('https://www.bluecom-gmbh.de/gewerbe', '_blank');
		});
		
		stage.enableMouseOver(10); this.hover_over_sport.on("mouseover",function(e){ 
			this.cursor = "pointer"; 
		});
		var _this = this;
		/*
		Durch Bewegen der Maus aus der angegebenen Symbolinstanz heraus wird eine Funktion ausgeführt.
		'3' gibt an, wie oft das Ereignis ausgelöst werden soll.
		*/
		stage.enableMouseOver(3);
		_this.hover_over_rathaus.on('mouseover', function(){
			var frameNumber = _this.rathaus.currentFrame
		
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber < 12) {
				_this.rathaus.gotoAndPlay(frameNumber);
			} else if (frameNumber > 12) {
				_this.rathaus.gotoAndPlay(24 - frameNumber);
			}
		});
		
		_this.hover_over_rathaus.on('mouseout', function(){
			var frameNumber = _this.rathaus.currentFrame
			
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber >= 12) {
				_this.rathaus.gotoAndPlay(frameNumber);
			} else if (frameNumber < 12) {
				_this.rathaus.gotoAndPlay(24 - frameNumber);
			}
		});
		
		var _this = this;
		/*
		Durch Klicken auf die angegebene Symbolinstanz wird eine Funktion ausgeführt.
		*/
		_this.hover_over_rathaus.on('click', function(){
		/*
		Lädt die URL in einem neuen Browserfenster.
		*/
		window.open('https://www.bluecom-gmbh.de/gewerbe', '_blank');
		});
		
		stage.enableMouseOver(10); this.hover_over_rathaus.on("mouseover",function(e){ 
			this.cursor = "pointer"; 
		});
		var _this = this;
		/*
		Durch Bewegen der Maus aus der angegebenen Symbolinstanz heraus wird eine Funktion ausgeführt.
		'3' gibt an, wie oft das Ereignis ausgelöst werden soll.
		*/
		stage.enableMouseOver(3);
		_this.hover_over_privat.on('mouseover', function(){
			var frameNumber = _this.privat.currentFrame
		
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber < 12) {
				_this.privat.gotoAndPlay(frameNumber);
			} else if (frameNumber > 12) {
				_this.privat.gotoAndPlay(24 - frameNumber);
			}
		});
		
		_this.hover_over_privat.on('mouseout', function(){
			var frameNumber = _this.privat.currentFrame
			
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber >= 12) {
				_this.privat.gotoAndPlay(frameNumber);
			} else if (frameNumber < 12) {
				_this.privat.gotoAndPlay(24 - frameNumber);
			}
		});
		
		var _this = this;
		/*
		Durch Klicken auf die angegebene Symbolinstanz wird eine Funktion ausgeführt.
		*/
		_this.hover_over_privat.on('click', function(){
		/*
		Lädt die URL in einem neuen Browserfenster.
		*/
		window.open('https://www.bluecom-gmbh.de/gewerbe', '_blank');
		});
		
		stage.enableMouseOver(10); this.hover_over_privat.on("mouseover",function(e){ 
			this.cursor = "pointer"; 
		});
		var _this = this;
		/*
		Durch Bewegen der Maus aus der angegebenen Symbolinstanz heraus wird eine Funktion ausgeführt.
		'3' gibt an, wie oft das Ereignis ausgelöst werden soll.
		*/
		stage.enableMouseOver(3);
		_this.hover_over_parken.on('mouseover', function(){
			var frameNumber = _this.parken.currentFrame
		
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber < 12) {
				_this.parken.gotoAndPlay(frameNumber);
			} else if (frameNumber > 12) {
				_this.parken.gotoAndPlay(24 - frameNumber);
			}
		});
		
		_this.hover_over_parken.on('mouseout', function(){
			var frameNumber = _this.parken.currentFrame
			
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber >= 12) {
				_this.parken.gotoAndPlay(frameNumber);
			} else if (frameNumber < 12) {
				_this.parken.gotoAndPlay(24 - frameNumber);
			}
		});
		
		var _this = this;
		/*
		Durch Klicken auf die angegebene Symbolinstanz wird eine Funktion ausgeführt.
		*/
		_this.hover_over_parken.on('click', function(){
		/*
		Lädt die URL in einem neuen Browserfenster.
		*/
		window.open('https://www.bluecom-gmbh.de/gewerbe', '_blank');
		});
		
		stage.enableMouseOver(10); this.hover_over_parken.on("mouseover",function(e){ 
			this.cursor = "pointer"; 
		});
		var _this = this;
		/*
		Durch Bewegen der Maus aus der angegebenen Symbolinstanz heraus wird eine Funktion ausgeführt.
		'3' gibt an, wie oft das Ereignis ausgelöst werden soll.
		*/
		stage.enableMouseOver(3);
		_this.hover_over_krankenhaus.on('mouseover', function(){
			var frameNumber = _this.krankenhaus.currentFrame
		
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber < 12) {
				_this.krankenhaus.gotoAndPlay(frameNumber);
			} else if (frameNumber > 12) {
				_this.krankenhaus.gotoAndPlay(24 - frameNumber);
			}
		});
		
		_this.hover_over_krankenhaus.on('mouseout', function(){
			var frameNumber = _this.krankenhaus.currentFrame
			
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber >= 12) {
				_this.krankenhaus.gotoAndPlay(frameNumber);
			} else if (frameNumber < 12) {
				_this.krankenhaus.gotoAndPlay(24 - frameNumber);
			}
		});
		
		var _this = this;
		/*
		Durch Klicken auf die angegebene Symbolinstanz wird eine Funktion ausgeführt.
		*/
		_this.hover_over_krankenhaus.on('click', function(){
		/*
		Lädt die URL in einem neuen Browserfenster.
		*/
		window.open('https://www.bluecom-gmbh.de/gewerbe', '_blank');
		});
		
		stage.enableMouseOver(10); this.hover_over_krankenhaus.on("mouseover",function(e){ 
			this.cursor = "pointer"; 
		});
		var _this = this;
		/*
		Durch Bewegen der Maus aus der angegebenen Symbolinstanz heraus wird eine Funktion ausgeführt.
		'3' gibt an, wie oft das Ereignis ausgelöst werden soll.
		*/
		stage.enableMouseOver(3);
		_this.hover_over_industrie.on('mouseover', function(){
			var frameNumber = _this.industrie.currentFrame
		
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber < 12) {
				_this.industrie.gotoAndPlay(frameNumber);
			} else if (frameNumber > 12) {
				_this.industrie.gotoAndPlay(24 - frameNumber);
			}
		});
		
		_this.hover_over_industrie.on('mouseout', function(){
			var frameNumber = _this.industrie.currentFrame
			
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber >= 12) {
				_this.industrie.gotoAndPlay(frameNumber);
			} else if (frameNumber < 12) {
				_this.industrie.gotoAndPlay(24 - frameNumber);
			}
		});
		
		var _this = this;
		/*
		Durch Klicken auf die angegebene Symbolinstanz wird eine Funktion ausgeführt.
		*/
		_this.hover_over_industrie.on('click', function(){
		/*
		Lädt die URL in einem neuen Browserfenster.
		*/
		window.open('https://www.bluecom-gmbh.de/gewerbe', '_blank');
		});
		
		stage.enableMouseOver(10); this.hover_over_industrie.on("mouseover",function(e){ 
			this.cursor = "pointer"; 
		});
		var _this = this;
		/*
		Durch Bewegen der Maus aus der angegebenen Symbolinstanz heraus wird eine Funktion ausgeführt.
		'3' gibt an, wie oft das Ereignis ausgelöst werden soll.
		*/
		stage.enableMouseOver(3);
		_this.hover_over_hotel.on('mouseover', function(){
			var frameNumber = _this.hotel.currentFrame
		
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber < 12) {
				_this.hotel.gotoAndPlay(frameNumber);
			} else if (frameNumber > 12) {
				_this.hotel.gotoAndPlay(24 - frameNumber);
			}
		});
		
		_this.hover_over_hotel.on('mouseout', function(){
			var frameNumber = _this.hotel.currentFrame
			
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber >= 12) {
				_this.hotel.gotoAndPlay(frameNumber);
			} else if (frameNumber < 12) {
				_this.hotel.gotoAndPlay(24 - frameNumber);
			}
		});
		
		var _this = this;
		/*
		Durch Klicken auf die angegebene Symbolinstanz wird eine Funktion ausgeführt.
		*/
		_this.hover_over_hotel.on('click', function(){
		/*
		Lädt die URL in einem neuen Browserfenster.
		*/
		window.open('https://www.bluecom-gmbh.de/gewerbe', '_blank');
		});
		
		stage.enableMouseOver(10); this.hover_over_hotel.on("mouseover",function(e){ 
			this.cursor = "pointer"; 
		});
		var _this = this;
		/*
		Durch Bewegen der Maus aus der angegebenen Symbolinstanz heraus wird eine Funktion ausgeführt.
		'3' gibt an, wie oft das Ereignis ausgelöst werden soll.
		*/
		stage.enableMouseOver(3);
		_this.hover_over_cafe.on('mouseover', function(){
			var frameNumber = _this.cafe.currentFrame
		
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber < 12) {
				_this.cafe.gotoAndPlay(frameNumber);
			} else if (frameNumber > 12) {
				_this.cafe.gotoAndPlay(24 - frameNumber);
			}
		});
		
		_this.hover_over_cafe.on('mouseout', function(){
			var frameNumber = _this.cafe.currentFrame
			
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber >= 12) {
				_this.cafe.gotoAndPlay(frameNumber);
			} else if (frameNumber < 12) {
				_this.cafe.gotoAndPlay(24 - frameNumber);
			}
		});
		
		var _this = this;
		/*
		Durch Klicken auf die angegebene Symbolinstanz wird eine Funktion ausgeführt.
		*/
		_this.hover_over_cafe.on('click', function(){
		/*
		Lädt die URL in einem neuen Browserfenster.
		*/
		window.open('https://www.bluecom-gmbh.de/gewerbe', '_blank');
		});
		
		stage.enableMouseOver(10); this.hover_over_cafe.on("mouseover",function(e){ 
			this.cursor = "pointer"; 
		});
		var _this = this;
		/*
		Durch Bewegen der Maus aus der angegebenen Symbolinstanz heraus wird eine Funktion ausgeführt.
		'3' gibt an, wie oft das Ereignis ausgelöst werden soll.
		*/
		stage.enableMouseOver(3);
		_this.hover_over_buero.on('mouseover', function(){
			var frameNumber = _this.buero.currentFrame
		
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber < 12) {
				_this.buero.gotoAndPlay(frameNumber);
			} else if (frameNumber > 12) {
				_this.buero.gotoAndPlay(24 - frameNumber);
			}
		});
		
		_this.hover_over_buero.on('mouseout', function(){
			var frameNumber = _this.buero.currentFrame
			
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber >= 12) {
				_this.buero.gotoAndPlay(frameNumber);
			} else if (frameNumber < 12) {
				_this.buero.gotoAndPlay(24 - frameNumber);
			}
		});
		
		var _this = this;
		/*
		Durch Klicken auf die angegebene Symbolinstanz wird eine Funktion ausgeführt.
		*/
		_this.hover_over_buero.on('click', function(){
		/*
		Lädt die URL in einem neuen Browserfenster.
		*/
		window.open('https://www.bluecom-gmbh.de/gewerbe', '_blank');
		});
		
		stage.enableMouseOver(10); this.hover_over_buero.on("mouseover",function(e){ 
			this.cursor = "pointer"; 
		});
		var _this = this;
		/*
		Durch Bewegen der Maus aus der angegebenen Symbolinstanz heraus wird eine Funktion ausgeführt.
		'3' gibt an, wie oft das Ereignis ausgelöst werden soll.
		*/
		stage.enableMouseOver(3);
		_this.hover_over_agrar.on('mouseover', function(){
			var frameNumber = _this.agrar.currentFrame
		
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber < 12) {
				_this.agrar.gotoAndPlay(frameNumber);
			} else if (frameNumber > 12) {
				_this.agrar.gotoAndPlay(24 - frameNumber);
			}
		});
		
		_this.hover_over_agrar.on('mouseout', function(){
			var frameNumber = _this.agrar.currentFrame
			
			frameNumber = frameNumber == 0 ? 1 : frameNumber 
			
			if (frameNumber >= 12) {
				_this.agrar.gotoAndPlay(frameNumber);
			} else if (frameNumber < 12) {
				_this.agrar.gotoAndPlay(24 - frameNumber);
			}
		});
		
		var _this = this;
		/*
		Durch Klicken auf die angegebene Symbolinstanz wird eine Funktion ausgeführt.
		*/
		_this.hover_over_agrar.on('click', function(){
		/*
		Lädt die URL in einem neuen Browserfenster.
		*/
		window.open('https://www.bluecom-gmbh.de/agrar', '_blank');
		});
		
		stage.enableMouseOver(10); this.hover_over_agrar.on("mouseover",function(e){ 
			this.cursor = "pointer"; 
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// sport_hover
	this.hover_over_sport = new lib.hoveroversport();
	this.hover_over_sport.name = "hover_over_sport";
	this.hover_over_sport.setTransform(1427.2,1727.45,1,1,0,0,0,155.3,125);

	this.timeline.addTween(cjs.Tween.get(this.hover_over_sport).wait(1));

	// sport
	this.sport = new lib.sportaktiv();
	this.sport.name = "sport";
	this.sport.setTransform(1411,1729,1,1,0,0,0,140,118);

	this.timeline.addTween(cjs.Tween.get(this.sport).wait(1));

	// rathaus_hover
	this.hover_over_rathaus = new lib.hoveroverrathaus();
	this.hover_over_rathaus.name = "hover_over_rathaus";
	this.hover_over_rathaus.setTransform(995.2,1044.65,1,1,0,0,0,184.8,209.2);

	this.timeline.addTween(cjs.Tween.get(this.hover_over_rathaus).wait(1));

	// rathaus
	this.rathaus = new lib.rathausaktiv();
	this.rathaus.name = "rathaus";
	this.rathaus.setTransform(990,1040.5,1,1,0,0,0,178,196.5);

	this.timeline.addTween(cjs.Tween.get(this.rathaus).wait(1));

	// privat_hover
	this.hover_over_privat = new lib.hoveroverprivat();
	this.hover_over_privat.name = "hover_over_privat";
	this.hover_over_privat.setTransform(1055.85,1803.7,1,1,0,0,0,346.9,207.9);

	this.timeline.addTween(cjs.Tween.get(this.hover_over_privat).wait(1));

	// privat
	this.privat = new lib.privataktiv();
	this.privat.name = "privat";
	this.privat.setTransform(1061,1804.5,1,1,0,0,0,328,197.5);

	this.timeline.addTween(cjs.Tween.get(this.privat).wait(1));

	// parken_hover
	this.hover_over_parken = new lib.hoveroverparken();
	this.hover_over_parken.name = "hover_over_parken";
	this.hover_over_parken.setTransform(2094.3,1740.45,1,1,0,0,0,243,236.1);

	this.timeline.addTween(cjs.Tween.get(this.hover_over_parken).wait(1));

	// parken
	this.parken = new lib.parkenaktiv();
	this.parken.name = "parken";
	this.parken.setTransform(2088,1757,1,1,0,0,0,233,247);

	this.timeline.addTween(cjs.Tween.get(this.parken).wait(1));

	// krankenhaus_hover
	this.hover_over_krankenhaus = new lib.hoveroverkrankenhaus();
	this.hover_over_krankenhaus.name = "hover_over_krankenhaus";
	this.hover_over_krankenhaus.setTransform(1655.85,1945.5,1,1,0,0,0,237.2,234.5);

	this.timeline.addTween(cjs.Tween.get(this.hover_over_krankenhaus).wait(1));

	// krankenhaus
	this.krankenhaus = new lib.krankenhausaktiv();
	this.krankenhaus.name = "krankenhaus";
	this.krankenhaus.setTransform(1655,1954.5,1,1,0,0,0,231,243.5);

	this.timeline.addTween(cjs.Tween.get(this.krankenhaus).wait(1));

	// industrie_hover
	this.hover_over_industrie = new lib.hoveroverindustrie();
	this.hover_over_industrie.name = "hover_over_industrie";
	this.hover_over_industrie.setTransform(2547.85,1347.2,1,1,0,0,0,302.3,271.9);

	this.timeline.addTween(cjs.Tween.get(this.hover_over_industrie).wait(1));

	// industrie
	this.industrie = new lib.industrieaktiv();
	this.industrie.name = "industrie";
	this.industrie.setTransform(2533,1334.5,1,1,0,0,0,279,249.5);

	this.timeline.addTween(cjs.Tween.get(this.industrie).wait(1));

	// hotel_hover
	this.hover_over_hotel = new lib.hoveroverhotel();
	this.hover_over_hotel.name = "hover_over_hotel";
	this.hover_over_hotel.setTransform(1946.25,966.35,1,1,0,0,0,181.2,303.1);

	this.timeline.addTween(cjs.Tween.get(this.hover_over_hotel).wait(1));

	// hotel
	this.hotel = new lib.hotelaktiv();
	this.hotel.name = "hotel";
	this.hotel.setTransform(1946.5,955,1,1,0,0,0,181.5,286);

	this.timeline.addTween(cjs.Tween.get(this.hotel).wait(1));

	// cafe_hover
	this.hover_over_cafe = new lib.hoverovercafe();
	this.hover_over_cafe.name = "hover_over_cafe";
	this.hover_over_cafe.setTransform(1447.25,1397.1,1,1,0,0,0,286.8,146);

	this.timeline.addTween(cjs.Tween.get(this.hover_over_cafe).wait(1));

	// cafe
	this.cafe = new lib.cafeaktiv();
	this.cafe.name = "cafe";
	this.cafe.setTransform(1430.5,1435.1,1,1,0,0,0,282.5,184);

	this.timeline.addTween(cjs.Tween.get(this.cafe).wait(1));

	// buero_hover
	this.hover_over_buero = new lib.hoveroverbuero();
	this.hover_over_buero.name = "hover_over_buero";
	this.hover_over_buero.setTransform(1483.9,557.9,1,1,0,0,0,213.4,459.9);

	this.timeline.addTween(cjs.Tween.get(this.hover_over_buero).wait(1));

	// buero
	this.buero = new lib.bueroaktiv();
	this.buero.name = "buero";
	this.buero.setTransform(1461,578,1,1,0,0,0,252,480);

	this.timeline.addTween(cjs.Tween.get(this.buero).wait(1));

	// agrar_hover
	this.hover_over_agrar = new lib.hoveroveragrar();
	this.hover_over_agrar.name = "hover_over_agrar";
	this.hover_over_agrar.setTransform(582.2,1391.5,1,1,0,0,0,479.6,298.2);

	this.timeline.addTween(cjs.Tween.get(this.hover_over_agrar).wait(1));

	// agrar
	this.agrar = new lib.agraraktiv();
	this.agrar.name = "agrar";
	this.agrar.setTransform(629,1396,1,1,0,0,0,213,282);

	this.timeline.addTween(cjs.Tween.get(this.agrar).wait(1));

	// HG
	this.instance = new lib.bluecom_city();
	this.instance.setTransform(30,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1530,1297.5,1430,1046.5);
// library properties:
lib.properties = {
	id: '49B249D2B386444594631D2A4FD761BA',
	width: 3000,
	height: 2400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bluecom_city.png", id:"bluecom_city"},
		{src:"images/City_Animation_atlas_1.png", id:"City_Animation_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['49B249D2B386444594631D2A4FD761BA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;