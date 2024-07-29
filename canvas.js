
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d")

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener("mousemove", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

function Circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "black";
        c.stroke();
    }

    this.update = function() {
        if (this.x > innerWidth - this.radius || this.x < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > innerWidth - this.radius || this.y < this.radius) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

    // adding interactivity

        // first conditional - right of mouse, second - left of mouse
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50
        ) {
            this.radius += 1;
        }
        
        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.floor(Math.random() * (innerWidth - radius * 2) + radius);
    var y = Math.floor(Math.random() * (innerHeight - radius * 2) + radius);
    var dx = Math.floor(Math.random() - 0.5);
    var dy = Math.floor(Math.random() - 0.5);

    circleArray.push(new Circle(x, y, radius, dx, dy));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
}

animate();
