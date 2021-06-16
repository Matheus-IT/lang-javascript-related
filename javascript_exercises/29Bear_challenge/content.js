const counter = (function () {
	var c = 0;
	return function () {
		c++;
		if (c > 3) c = 1;
		return c;
	};
})();

function bear_runs() {
	img = document.createElement("img");
	if (pixels === 98) {
		window.clearInterval(t);
		t = window.setInterval(bear_back, 200);
	} else {
		img.setAttribute("src", `images/chara-${counter()}.png`);
		img.style.marginLeft = `${pixels}%`;
		pixels++;
		div_bear.innerHTML = ""; 
		div_bear.appendChild(img);
	}
}

function bear_back() {
	img = document.createElement("img");
	if (pixels === 0) {
		window.clearInterval(t);
		t = window.setInterval(bear_runs, 200);
	} else {
		img.setAttribute("src", `images/chara-${counter()}.png`);
		img.setAttribute("id", "bear_back");
		img.style.marginLeft = `${pixels}%`;
		pixels--;
		div_bear.innerHTML = ""; 
		div_bear.appendChild(img);
	}
}

var div_bear;
var img;
var t;
var pixels = 0;

div_bear = document.querySelector("div#bear");
t = window.setInterval(bear_runs, 200);
