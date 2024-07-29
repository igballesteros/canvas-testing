var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// circle created
// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "black";
// c.stroke();

// move objects - create a function - this set up creates a loop
// move circle into the animate function and create it within

function RandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return ("rgba("+r+","+g+","+b+")");
}

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = () => {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = RandomColor();
        c.stroke()
    }

    this.update = () => {
        if (this.x > innerWidth - this.radius || this.x < this.radius) {
            this.dx = -this.dx;
        }
    
        if (this.y > innerHeight - this.radius || this.y < this.radius) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

function Rectangle(x, y, width, height, dx, dy) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = dx;
    this.dy = dy;


    this.draw = () => {
        c.beginPath();
        c.strokeStyle = RandomColor()
        c.rect(this.x, this.y, this.width, this.height)
        c.stroke();
    }

// || this.x < innerWidth

    this.update = function() {
        if (this.x > innerWidth - this.width || this.x <= 0) {
            this.dx = -this.dx
        }

        if (this.y > innerHeight - this.height|| this.y < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = []
var rectArray = []

for (var i = 0; i < 100; i++) {
    var x = Math.floor(Math.random() * innerWidth)
    var y = Math.floor(Math.random() * innerHeight)
    var radius = 30;
    var dx = Math.floor((Math.random() - 0.5) * 10)
    var dy = Math.floor((Math.random() - 0.5) * 10)

    circleArray.push(new Circle(x, y, dx, dy, radius));
    rectArray.push(new Rectangle(x, y, 60, 60, dx, dy));  
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
        rectArray[i].update();
    }

}

animate();