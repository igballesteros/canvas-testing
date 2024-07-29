function RandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return ("rgba("+r+","+g+","+b+")");
}

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d')

var primary = canvas.height * (3/7);
var secondary = canvas.height * (2/7);

var centerHeight = canvas.height * 0.5;
var centerWidth = canvas.width * 0.5;

c.fillStyle = "rgba(255, 240, 0, 0.4)"
c.fillRect(0, 0, canvas.width, primary)

c.fillStyle = "rgba(0, 0, 255, 0.4)"
c.fillRect(0, primary, canvas.width, secondary) //(x, y, width, height)

c.fillStyle = "rgba(255, 0, 0, 0.4)"
c.fillRect(0, (primary+secondary), canvas.width, secondary)

console.log(canvas)

// Line
c.beginPath();
c.moveTo(centerWidth - 50, centerHeight - 50); //(x, y)
c.lineTo(centerWidth + 50, centerHeight - 50);
c.lineTo(centerWidth + 50, centerHeight + 50);
c.lineTo(centerWidth - 50, centerHeight + 50);
c.lineTo(centerWidth - 50, centerHeight - 50);

c.strokeStyle = "black";
c.stroke() // has to be after line is declared

c.beginPath();
c.moveTo(150, centerHeight);
c.lineTo(canvas.width - 150, centerHeight)
c.strokeStyle = "white";
c.stroke() // has to be after line is declared

c.beginPath();
c.moveTo(centerWidth, 300);
c.lineTo(centerWidth, canvas.height - 300);
c.strokeStyle = "white";
c.stroke(); // has to be after line is declared

// arc or circle
// (x, y, radius, startAngle: float, endAngle: float, drawCounterClk: bool: true or false)
// startAngle - start; endAngle - end; [radians]

c.beginPath();
c.arc (centerWidth, centerHeight, 30, 0, Math.PI * 2, false);
c.strokeStyle = "black"
c.stroke();

for (var i = 0; i < 100; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(x, y, 50, 0, Math.PI * 2, false);
    c.strokeStyle = RandomColor();
    c.stroke();
    // c.fillStyle = RandomColor();
    // c.fill()
}
