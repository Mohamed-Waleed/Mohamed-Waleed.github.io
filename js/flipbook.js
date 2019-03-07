TweenLite.set(".flippageBg", {xPercent: -50, yPercent: -50});
TweenLite.set(".flippageWrapper", {left: "50%", perspective: 1000 });
TweenLite.set(".flippage", {transformStyle: "preserve-3d"});
TweenLite.set(".flipback", {rotationY: -180});
TweenLite.set([".flipback", ".flipfront"], {backfaceVisibility: "hidden"});


$(".flippage").click(
	function() {
		if (pageLocation[this.id] === undefined || pageLocation[this.id] == "right") {
			zi = ($(".left").length) + 1;
			TweenMax.to($(this), 1, {force3D: true, rotationY: -180, transformOrigin: "-1px top", className: '+=left', z: zi, zIndex: zi});
			TweenLite.set($(this), {className: '-=right'});
			pageLocation[this.id] = "left";
		} else {
			zi = ($(".right").length) + 1;
			TweenMax.to($(this), 1, {force3D: true, rotationY: 0, transformOrigin: "left top", className: '+=right', z: zi, zIndex: zi
			});
			TweenLite.set($(this), {className: '-=left'});
			pageLocation[this.id] = "right";
		}
	}
);

$(".flipfront").hover(
	function() {
		TweenLite.to($(this).find(".flippageFoldRight"), 0.3, {width: "50px", height: "50px", backgroundImage: "linear-gradient(45deg,  #fefefe 0%,#f2f2f2 49%,#ffffff 50%,#ffffff 100%)"});
	},
	function() {
		TweenLite.to($(this).find(".flippageFoldRight"), 0.3, {width: "0px", height: "0px"});
	}
);

$(".flipback").hover(
	function() {
		TweenLite.to($(this).find(".flippageFoldLeft"), 0.3, {width: "50px", height: "50px", backgroundImage: "linear-gradient(135deg,  #ffffff 0%,#ffffff 50%,#f2f2f2 51%,#fefefe 100%)"		});
	},
	function() {
		TweenLite.to($(this).find(".flippageFoldLeft"), 0.3, {width: "0px", height: "0px"});
	}
);

var pageLocation = [],
	lastPage = null;
	zi = 0;

