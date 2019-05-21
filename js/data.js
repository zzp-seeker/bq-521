var dataObj=function()
{
    this.fruitNum = 0;
    this.double = 2;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
    this.need = 30;

    this.fir = false;     //500
    this.dob = false;  //1000
    this.tri = false;     //1500
    this.qua = false;  //2000
    this.lgdr = false;  //2500
    this.pen = false;  //3000
}
dataObj.prototype.reset=function()
{
    this.score += this.fruitNum;
    this.fruitNum = 0;
    this.double = 2;
    if (this.score <= 1200)
        this.need = 30 + parseInt(this.score / 30);
    else if (this.score > 1200)
        this.need = 60 + parseInt(this.score / 120);

    if (!this.fir && this.score > 100) {
        this.fir = true;
        var audio = new Audio("music/fir.mp3");
        audio.play();
    }
    if (!this.dob && this.score > 300) {
        this.dob = true;
        var audio = new Audio("music/dob.mp3");
        audio.play();
    }
    if (!this.tri && this.score >500) {
        this.tri = true;
        var audio = new Audio("music/tri.mp3");
        audio.play();
    }
    if (!this.qua && this.score > 1000) {
        this.qua = true;
        var audio = new Audio("music/qua.mp3");
        audio.play();
    }
    if (!this.lgdr && this.score > 1500) {
        this.lgdr = true;
        var audio = new Audio("music/lgdr.mp3");
        audio.play();
    }
    if (!this.pen && this.score > 2000) {
        this.pen = true;
        var audio = new Audio("music/pen.mp3");
        audio.play();
    }



}
dataObj.prototype.draw=function()
{
    var h = canHeight;
    var w = canWidth;







    ctx1.save();
    if (gameStart) {
        ctx1.shadowBlur = 10;
        ctx1.shadowColor = "white";
        ctx1.fillStyle = "white";
        ctx1.font = "20px Arial";
        ctx1.fillText("现有能量" + this.fruitNum, w * 0.5 - 40, h - 50);
        ctx1.fillText("倍数" + this.double, w * 0.5 - 20, h - 80);
        ctx1.fillText("分数" + this.score, w * 0.5 - 20, 50);
        ctx1.fillText("鱼宝宝至少所需要的" + this.need, w * 0.5 - 90, h - 20);
    }

    if (this.gameOver)
    {
        this.alpha += deltaTime * 0.0002;
        if (this.alpha > 1) this.alpha = 1;
        ctx1.font = "50px Arial";
        ctx1.fillStyle = "rgba(" + 255 + "," + 255 + "," + 255 + "," + this.alpha + ")";
        ctx1.fillText("Game Over", w * 0.5 - 135, h - 310);
    }
    ctx1.restore();
}
