Игра FlappyBird написана и создана на JS, без использования CSS (так как брал для игры уже, готовые изображения).
В игре есть музыкальное сопровождение при нажатии, на кнопку для прыжка. А также при наборе очков.
document.addEventListener('keydown', moveUp)
function moveUp()
var pipe = [];
for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(down, pipe[i].x, pipe[i].y);
        ctx.drawImage(up, pipe[i].x, pipe[i].y + down.height + gap)
        yPos += grav;
