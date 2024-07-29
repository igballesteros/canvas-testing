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

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = () => {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "black";
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
        c.strokeStyle = "blue"
        c.rect(this.x, this.y, this.width, this.height)
        c.stroke();
    }

// || this.x < innerWidth

    this.update = function() {
        if (this.x > innerWidth - this.width || this.x < this.width) {
            this.dx = -this.dx
        }

        if (this.y > innerHeight - this.height|| this.y < innerHeight) {
            this.dy = -this.dy
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

console.log(innerWidth)
console.log(innerHeight)

var a = 10;
var b = 10;

var rectangle11 = new Rectangle(a, b, 60, 60, 2, 0)

var circleArray = []

console.log((10>100 || 20 < 30))

for (var i = 0; i < 100; i++) {
    var x = Math.floor(Math.random() * innerWidth)
    var y = Math.floor(Math.random() * innerHeight)
    var radius = 30;
    var dx = Math.floor((Math.random() - 0.5) * 10)
    var dy = Math.floor((Math.random() - 0.5) * 10)

    circleArray.push(new Circle(x, y, dx, dy, radius));
}

var rectArray = [];

// for (var i = 0; i < 10; i++) {
//     rectArray.push(new Rectangle((i+1)*10, (i+1)*10, 60, 60))
// }

console.log(rectArray)


c.beginPath();
c.strokeStyle = "red"
c.rect(100, 100, 150, 300);
c.stroke();

var a = 10;
var b = 10;

var rectangle11 = new Rectangle(a, b, 60, 60, 2, 0)

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight)

//     for (var i = 0; i < circleArray.length; i++) {
//         circleArray[i].update();
//     }

//     // for (var i = 0; i < 10; i++) {
//     //     rectArray[i].draw();
//     // }

//     c.beginPath();
//     c.strokeStyle = "red"
//     c.rect(a, b, 150, 300);
//     c.stroke();

//     rectangle11.update()

// }

// animate();