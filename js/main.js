var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height/2;
ctx.translate(radius,radius);


function render(){
    renderBackground();
    renderTime();
    renderClockLayout();
}

setInterval(render,1);

function renderBackground(){
    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.arc(0,0,radius*0.90,0,Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(0,0,radius*0.1,0,Math.PI*2);
    ctx.fill();
}

function renderClockLayout(){
  var ang;
  var num;

  for(num = 1 ; num < 13 ; num++)
  {
    ang = (num) * Math.PI / 6;
    ctx.rotate(ang);
    ctx.moveTo(0,185);
    ctx.lineTo(0,203);
    ctx.lineWidth = radius*0.01;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.rotate(-ang);
  }
}

function renderTime(){
  var time = new Date();
  var hour = time.getHours();
  var second = time.getSeconds();
  var minute = time.getMinutes();
  var milliseconds = time.getMilliseconds();

  hour = hour%12;
  hour = (hour*(Math.PI/6))+(minute*(Math.PI/(60*6))) + (second*(Math.PI/(360*6)));
  renderArrow(hour,radius*0.60,"red");

  minute = (minute*Math.PI/30) + (second*Math.PI/30*60);
  renderArrow(minute,radius*0.69,"blue");

  second = (second*Math.PI/30) + (milliseconds*Math.PI/(1000*30));
  renderArrow(second,radius*0.80,"green");
}

function renderArrow(angle,length,color){
  var width = radius*0.05;
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(angle);
  ctx.lineTo(0,-length);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.rotate(-angle);
}