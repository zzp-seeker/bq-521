var babyObj=function()
{
    this.x;
    this.y;
    this.angle;
    this.babyEye = [];
    this.babyBody = [];
    this.babyTail = [];

    this.TIME;


    this.babyTailTimer = 0;
    this.babyTailCount = 0;
    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;

   // this.alive = true;
}
babyObj.prototype.init=function()
{
    this.x = canWidth*0.5 - 50;
    this.y = canHeight * 0.5 + 50;
    this.angle = 0;

    this.TIME = 800;

    for (var i = 0; i < 20; i++) {
        this.babyBody[i] = new Image();
        this.babyBody[i].src = "./src/babyFade" + i + ".png";
    }
    for (var i = 0; i < 2; i++){
        this.babyEye[i] = new Image();
        this.babyEye[i].src = "./src/babyEye" + i + ".png";
    }
    for (var i = 0; i < 8; i++) {
        this.babyTail[i] = new Image();
        this.babyTail[i].src = "./src/babyTail" + i + ".png";
    }
}

babyObj.prototype.draw=function()
{
    var deltaX = mom.x - this.x;
    var deltaY = mom.y - this.y;


    if (deltaX*deltaX + deltaY * deltaY>7500)
    {
        this.x = lerpDistance(mom.x, this.x, 0.98);
        this.y = lerpDistance(mom.y, this.y, 0.98);
    }
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;
    this.angle = lerpAngle(beta, this.angle, 0.97);

    this.babyTailTimer += deltaTime;
    if (this.babyTailTimer > 50)
    {
        this.babyTailCount = (this.babyTailCount + 1) % 8;
        this.babyTailTimer %= 50;
    }

    this.babyEyeTimer += deltaTime;
    if (this.babyEyeTimer > 1500 && this.babyEyeTimer <1600)
    {
        this.babyEyeCount =1;
    }
    else if (this.babyEyeTimer > 1600)
    {
        this.babyEyeCount = 0;
        this.babyEyeTimer %= 1600;
    }

    this.babyBodyTimer += deltaTime;
    if (this.babyBodyTimer > this.TIME)
    {
        if (this.babyBodyCount < 19)
        {
            if (gameStart)
            {
                if (!cainiao) { this.TIME = 500; cainiao = true;}
                this.babyBodyCount = (this.babyBodyCount + 1) % 20;
            }
            
        }
        this.babyBodyTimer %= this.TIME;
        if(this.babyBodyCount==19)
        {
            this.babyBodyCount = 19;
            

            if (!data.gameOver)
            {
                var audio = new Audio("music/4730.mp3");
                audio.play();
            }
            

            data.gameOver = true;
        }
    }





    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.babyTail[this.babyTailCount], -this.babyTail[0].width * 0.5 + 23, -this.babyTail[0].height * 0.5);
    ctx1.drawImage(this.babyBody[this.babyBodyCount], -this.babyBody[0].width * 0.5, -this.babyBody[0].height * 0.5);
    ctx1.drawImage(this.babyEye[this.babyEyeCount], -this.babyEye[0].width * 0.5, -this.babyEye[0].height * 0.5);
    ctx1.restore();
}