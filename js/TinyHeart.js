var can1, can2;
var ctx1, ctx2;
var lastTime, deltaTime;
var mx, my;  //鼠标位置
var canHeight = 600, canWidth = 800;
var bgPic = new Image();
var gameStart = false;

var ane;   //海葵
var fruit;  //果实
var mom;//鱼妈妈
var baby;//鱼宝宝
var wave;//涟漪
var dust;//海藻
var data; //分数
var cainiao = true;



window.onload = game;
function game()
{
    init();
    lastTime = Date.now();
    deltaTime = 0;

    $(".btn1").on('click', function () {
        layer.msg("游戏说明：通过鼠标控制鱼妈妈，吃够足够能量碰一下鱼宝宝即可以喂食0^V^0，否则过一段时间鱼宝宝变白就死翘翘啦o(╥﹏╥)o,吃蓝色果实会增加倍数，吃黄色果实可以增加相应倍数的能量哟,鼠标尽量别移动到游戏窗口外，因为这样操作是无效的，鱼妈妈不会跟着窗口外的鼠标走");
    });
    $(".btn2").on('click', function () {
        layer.msg("一生一世只爱你，炳倩");
    });

    gameloop();
}
function init()
{
    can1 = document.getElementById("canvas1"); //fished,dust,UI,circle
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById("canvas2");//bg,ane,fruits
    ctx2 = can2.getContext("2d");
    bgPic.src = "./src/background.jpg";




    can1.addEventListener("mousemove", onMouseMove, false);

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    wave = new waveObj();
    wave.init();

    dust = new dustObj();
    dust.init();

    data = new dataObj();

    mx = 0;
    my = 0;

 
}
function gameloop()
{
    window.requestAnimFrame(gameloop);   //智能计算  不用setInterval  动态时间间隔
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if (deltaTime > 40) deltaTime = 40;

    ctx1.clearRect(0, 0, canWidth, canHeight);

    if (!gameStart) drawStart();
    gameBegin();

    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    mom.draw();
    momFruitsCollosion();
    momBabyCollosion();
    baby.draw();
    data.draw();
    wave.draw();
    dust.draw();
}

function onMouseMove(e)
{
    if(e.offsetX||e.layerX)
    {
        mx = e.offsetX == undefined ? e.layerX : e.offsetX;
        my = e.offsetY == undefined ? e.layerY : e.offsetY;
    }
}
