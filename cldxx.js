<html> //collision detection
<body>
  <canvas id="the_canvas" width="400" height="400"></canvas>
  <script>
  var canvas = document.getElementById('the_canvas');
  var ctx = canvas.getContext('2d');
  var y = 240;
  var draw = function(){
    y++;
    //blue sky
    ctx.fillStyle = "rgba(64,237,245,.2)";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    //bolt
    ctx.beginPath();
    ctx.moveTo(180,220);
    ctx.lineTo(300,350);
    ctx.lineTo(155,120);
    ctx.fillStyle = "yellow";
    ctx.fill();
    //cloud left-bottom
    ctx.beginPath();
    ctx.arc(100,200,50,0,Math.PI*2,true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = .8;
    ctx.strokeStyle = "white";
    ctx.stroke();
    //cloud mid-bottom
    ctx.beginPath();
    ctx.arc(170,200,50,0,Math.PI*2,true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = .8;
    ctx.strokeStyle = "white";
    ctx.stroke();
    //cloud right-bottom
    ctx.beginPath();
    ctx.arc(240,200,50,0,Math.PI*2,true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = .8;
    ctx.strokeStyle = "white";
    ctx.stroke();
    //cloud left-top
    ctx.beginPath();
    ctx.arc(135,150,50,0,Math.PI*2,true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = .8;
    ctx.strokeStyle = "white";
    ctx.stroke();
    //cloud right-top
    ctx.beginPath();
    ctx.arc(205,150,50,0,Math.PI*2,true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = .8;
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(190,155,25,0,Math.PI,true); // ctx.moveTo(124,210);
    ctx.strokeStyle = "rgba(64,237,255,.5)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(120,190,25,0,Math.PI,true); // ctx.moveTo(124,210);
    ctx.strokeStyle = "rgba(64,237,255,.5)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(220,210,25,0,Math.PI,true); // ctx.moveTo(124,210);
    ctx.strokeStyle = "rgba(64,237,255,.5)";
    ctx.stroke();
    //rain
    ctx.fillStyle = "blue";
    ctx.fillRect (100, (y + 20), 5, 5);
    ctx.fillStyle = "blue";
    ctx.fillRect (140, y, 5, 5);
    ctx.fillStyle = "blue";
    ctx.fillRect (180, (y + 30), 5, 5);
    ctx.fillStyle = "blue";
    ctx.fillRect (230, (y + 10) , 5, 5);
    //function that returns rain to y coordinate 240px
    if (y > 400) {
      y = 240;
    }
  };
  setInterval(draw, 1)
</script>
</body>
</html>
<!-- Math.floor(Math.random()*300) -->
