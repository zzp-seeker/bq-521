var momObj=function()
{
    this.x;
    this.y;
    this.angle;
    this.bigEye = [];
    this.bigTail = [];

    this.bigBody = new Image();
    this.bigBody1 = [];
    this.bigBody2 = [];

    this.bigTailTimer = 0;
    this.bigTailCount = 0;

    this.bigEyeTimer = 0;
    this.bigEyeCount = 0;

    this.bigBodyType = 0;
    this.bigBodyTimer = 0;
    this.bigBodyCount = 0;
}
momObj.prototype.init=function()
{
    this.x = canWidth*0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;

    for (var i = 0; i < 2; i++) {
        this.bigEye[i] = new Image();
        this.bigEye[i].src = "./src/bigEye" + i + ".png";
    }

    this.bigBody.src = "./src/bigSwim0.png"

    for (var i = 0; i < 8; i++) {
        this.bigBody1[i] = new Image();
        this.bigBody2[i] = new Image();
        this.bigBody1[i].src = "./src/bigSwim" + i + ".png";
        this.bigBody2[i].src = "./src/bigSwimBlue" + i + ".png";
    }

    for (var i = 0; i < 8; i++) {
        this.bigTail[i] = new Image();
        this.bigTail[i].src = "./src/bigTail" + i + ".png";
    }

}
momObj.prototype.draw=function()
{
    this.x = lerpDistance(mx, this.x, 0.96);
    this.y = lerpDistance(my, this.y, 0.96);

    var deltaX = mx - this.x;
    var deltaY = my - this.y;
    var beta = Math.atan2(deltaY, deltaX)+Math.PI;

    this.angle = lerpAngle(beta, this.angle, 0.96);


    this.bigTailTimer += deltaTime;
    if (this.bigTailTimer > 50) {
        this.bigTailCount = (this.bigTailCount + 1) % 8;
        this.bigTailTimer %= 50;
    }

    this.bigEyeTimer += deltaTime;
    if (this.bigEyeTimer > 2000 && this.bigEyeTimer < 2100) {
        this.bigEyeCount = 1;
    }
    else if (this.bigEyeTimer > 2100)
    {
        this.bigEyeCount = 0;
        this.bigEyeTimer %= 2100;
    }

    this.bigBodyTimer += deltaTime;
    if (this.bigBodyTimer > 200)
    {
        this.bigBodyTimer %= 200;
        if (this.bigBodyCount < 7)
            this.bigBodyCount = (this.bigBodyCount + 1) % 8;
        else if (this.bigBodyCount == 7)
        {
            this.bigBodyCount = 7;
            if(!this.bigBodyType)
            {
                this.bigBodyType = true;
                this.bigBodyCount = 0;
            }
        }
    }

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    

    if (this.bigBodyType==1)
        ctx1.drawImage(this.bigBody1[7-this.bigBodyCount], -this.bigBody1[0].width * 0.5, -this.bigBody1[0].height * 0.5);
    else if (this.bigBodyType == 2)
        ctx1.drawImage(this.bigBody2[7-this.bigBodyCount], -this.bigBody2[0].width * 0.5, -this.bigBody2[0].height * 0.5);
    else
        ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);

    ctx1.drawImage(this.bigTail[this.bigTailCount], -this.bigTail[0].width * 0.5 + 30, -this.bigTail[0].height * 0.5);
    ctx1.drawImage(this.bigEye[this.bigEyeCount], -this.bigEye[0].width * 0.5, -this.bigEye[0].height * 0.5);

    ctx1.restore();
}