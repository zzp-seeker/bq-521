
function drawBackground()
{
    ctx2.drawImage(bgPic, 0, 0, canWidth, canHeight);
}

function drawStart()
{
    ctx1.fillStyle = "purple";
    ctx1.font = "50px Arial";
    ctx1.fillText("我是菜鸟", canWidth * 0.3+50 , canHeight * 0.3 );

    ctx1.fillStyle = "purple";
    ctx1.font = "50px Arial";
    ctx1.fillText("我是高手", canWidth * 0.3+50 , canHeight * 0.3 + 200);
}