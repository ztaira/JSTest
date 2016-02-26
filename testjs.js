var my_canvas = document.getElementById("test_canvas");
var ctx = my_canvas.getContext("2d");

function circle(x, y, radius)
{
  this.y_acc = 0.025;
	this.x_vel = 2.5;
  this.y_vel = 0;
  this.x_pos = x;
  this.y_pos = y;
  this.rad = radius;
}

function updateCircle()
{
	circle1.y_vel += circle1.y_acc;
	circle1.x_pos += circle1.x_vel;
  circle1.y_pos += circle1.y_vel;
  if (circle1.y_pos > my_canvas.height-(circle1.rad))
  {
  	circle1.y_vel = -0.9*circle1.y_vel;
    circle1.x_vel = 0.95*circle1.x_vel;
  }
  else if (circle1.y_pos < circle1.rad)
  {
    circle1.y_vel = -0.9*circle1.y_vel;
    circle1.x_vel = 0.95*circle1.x_vel;
  }
  if (circle1.x_pos > my_canvas.width-(circle1.rad))
  {
  	circle1.x_vel = -circle1.x_vel;
  }
  else if (circle1.x_pos < circle1.rad)
  {
  	circle1.x_vel = -circle1.x_vel;
  }
  if (Math.abs(circle1.y_vel) < 1 && circle1.y_pos > my_canvas.height-(circle1.rad))
  {
  	circle1.y_vel = 0;
    circle1.y_acc = 0;
  }
}

function drawCircle()
{
    ctx.clearRect(0, 0, 475, 475);
	updateCircle();
    ctx.save();
	ctx.beginPath();
	ctx.arc(circle1.x_pos, circle1.y_pos, circle1.rad, 0, Math.PI*2, false);
    ctx.fillStyle = "0095dd";
    ctx.fill()
	ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.strokeRect(1, 1, 473, 473);

  setTimeout(drawCircle, 5);
}

function clearctx()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
}

bounce_button.onclick = function(e)
{
	circle1.x_vel = Math.random()*3;
  if (Math.random() < 0.5)
  {
  	circle1.x_vel = -circle1.x_vel;
  }
  circle1.y_vel = -(Math.random()*3);
  circle1.y_acc = 0.025;
}

var circle1 = new circle(50, 50, 20);
drawCircle();
