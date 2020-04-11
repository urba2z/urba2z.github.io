const cvs = document.getElementById('gameArea');
const ctx = cvs.getContext('2d');

//Игровые объекты
const bird = new Image();
const bg = new Image(); // Создание объекта
const fg = new Image(); // Создание объекта
const pipeUp = new Image(); // Создание объекта
const pipeBtm = new Image(); // Создание объекта
const gap = 90;
let score = 0;// Очки 

//Позиция персонажа 
let xPos = 10;
let yPos = 150;
let grav = 1.6;
// Звуки 

const fly = new Audio();
const scoreAudio = new Audio();
const die = new Audio();

fly.src = "audio/wing.wav";
scoreAudio.src = "audio/point.wav";
die.src = "audio/die.wav";

//Создание блоков
const pipe = [];
pipe[0] = {x : cvs.width, y : 0}

//Управление  
const moveUp = () => { yPos -= 30}
document.addEventListener('keydown', moveUp);
fly.play();

bird.src = "img/bird.png"; // Указание нужного изображения
bg.src = "img/bg.png"; // Аналогично
fg.src = "img/fg.png"; // Аналогично
pipeUp.src = "img/pipeUp.png"; // Аналогично
pipeBtm.src = "img/pipeBtm.png"; // Аналогично

function draw() {

    ctx.drawImage(bg, 0, 0);

    for(let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBtm, pipe[i].x, pipe[i].y + pipeUp.height + gap);
        pipe[i].x--;

        //Генерация новых блоков
        if(pipe[i].x == 55) {
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }
        //Столкновение птицы и блока
        if(xPos + bird.width >= pipe[i].x 
            && xPos <= pipe[i].x + pipeUp.width 
            && (yPos <= pipeUp[i] +pipeUp.height
                || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
                || yPos + bird.height >= cvs.height - fg.height) {
            die.play();
            location.reload();     
        //Счетчик очков 
        } 
        if (pipe[i].x == 5){
            score++;
            scoreAudio.play();
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);
    yPos += grav;

    ctx.fillStile = "#fff";
    ctx.font = "24px Verdana";
    ctx.fillText("Ваш счет:" + score, 10, cvs.height - 20);
    requestAnimationFrame(draw);
}
pipeBtm.onload = draw();
