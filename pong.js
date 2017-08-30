var canvas;
var canvasc;
var ballX = 50;
var ballY = 50;
var speedX = 5;


window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasc = canvas.getContext('2d');

  var framespersecond = 30
  setInterval(function () {
    move();
    drawEverything();
  }, 1000/framespersecond);
}

function move() {
  if(ballX > (canvas.width - 25) || ballX < 0){
    speedX = -speedX;
  }
  ballX += speedX;
}

function drawEverything() {
  //make canvas black
  colorRect(0,0,canvas.width, canvas.height,'black');

  //make padle1
  colorRect(0,250, 10,100, 'white');
  //make padle2
  colorRect(canvas.width - 10,250,10,100,'white');

  //make "ball"
  colorRect(ballX,ballY,25,25,'red');
}

function colorRect(leftX, topY, width,height, color) {
  canvasc.fillStyle = color;
  canvasc.fillRect(leftX, topY, width,height);
}
