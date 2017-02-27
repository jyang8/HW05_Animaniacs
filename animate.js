var canvas = document.getElementById("drawing");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#B7410E";

var rid = 0;

var animateDot = function() {
    window.cancelAnimationFrame( rid );
    
    var r = 5;
    var out = true;

    var circles = function() {
	var circleOut = function() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    ctx.beginPath();
	    ctx.arc(canvas.width/2,canvas.height/2,r,0,2*Math.PI);
	    ctx.fill();
	    r++;
	    if (r >= canvas.width/2 || r >= canvas.height/2) {
		out = false;
	    };
	};

	var circleIn = function() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    ctx.beginPath();
	    ctx.arc(canvas.width/2,canvas.height/2,r,0,2*Math.PI);
	    ctx.fill();
	    r--;
	    if (r == 0) {
		out = true;
	    };
	};
	
	if (out == true) {
	    circleOut();
	} else {
	    circleIn();
	};
   
	rid = window.requestAnimationFrame( circles );
    };
	
    circles();
    
};

var animateDVD = function() {
    window.cancelAnimationFrame( rid );

    var img = new Image();
    img.src = "dvd.png";

    var x = Math.random() * 250;
    var y = Math.random() * 250;
    var w = 150;
    var h = 90;
    var right = true;
    var down = true;
    
    var screensaver = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, x, y, w, h);

	if (x >= canvas.width-w) {
	    right = false;
	} else if (x <= 0) {
	    right = true;
	}
	if (y >= canvas.height-h) {
	    down = false;
	} else if (y <= 0) {
	    down = true;
	}

	if (right == true) {
	    x++;
	} else {
	    x--;
	}
	if (down == true) {
	    y++;
	} else {
	    y--;
	}

	rid = window.requestAnimationFrame( screensaver );
    };

    screensaver();

};

var stopIt = function() {
    window.cancelAnimationFrame( rid );
};

var stopBtn = document.getElementById("stop_btn");
stopBtn.addEventListener("click", stopIt);

var dotBtn = document.getElementById("circle_btn");
dotBtn.addEventListener("click", animateDot);

var dvdBtn = document.getElementById("dvd_btn");
dvdBtn.addEventListener("click", animateDVD);
