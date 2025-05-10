var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var fon = new Image();
var bord = new Image();
var up = new Image();
var down = new Image();

bird.src = "img/bird.png";
fon.src = "img/fon.png";
bord.src = "img/bord.png";
down.src = "img/down.png";
up.src = "img/up.png";

var fly = new Audio();
var score_audio = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";

var gap = 90;

document.addEventListener('keydown', moveUp);

function moveUp() {
    yPos -= 25;
    fly.play();
}

var pipe = [];
pipe [0] = {
    x: cvs.width,
    y: 0
}

var score = 0;

var xPos = 50;
var yPos = 270;
var grav = 1.5;


function draw() {
    ctx.drawImage(fon, 0, 0);

    for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(down, pipe[i].x, pipe[i].y);
        ctx.drawImage(up, pipe[i].x, pipe[i].y + down.height + gap);

        pipe[i].x--;

        if(pipe[i].x == 125) {
            pipe.push( {
                x: cvs.width,
                y: Math.floor(Math.random()*down.height) - down.height
            });
        }

        if(xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + down.width
            && (yPos <= pipe[i].y + down.height
                || yPos + bird.height >= pipe[i].y + down.height + gap)
            || yPos + bird.height >= cvs.height - bord.height) {
                    location.reload();
                }
        
        if(pipe[i].x == 5) {
            score++;
            score_audio.play();
        }
    }
    
    ctx.drawImage(bord, 0, cvs.height - bord.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Счет: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
}

up.onload = draw;