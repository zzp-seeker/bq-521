var fruitObj=function()
{
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd1 = [];      //长大速度
    this.spd2 = [];      //飘出速度
    this.large = [];     //变大后的大小
    this.fruitType = [];    //果实类型
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init=function()
{
    for(var i=0;i<this.num;i++)
    {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.spd1[i] =  Math.random() * 0.01 + 0.005;        //[0.005,0.015)
        this.spd2[i] = (Math.random() * 0.01 + 0.005) * 10;
        this.large[i] = Math.random() * 10 + 15;
        this.fruitType[i] = new Image();
        if (i > 2) this.fruitType[i].src = "./src/fruit.png";
        else this.fruitType[i].src = "./src/blue.png";
    }
}
fruitObj.prototype.draw=function()
{
    for(var i=0;i<this.num;i++)
    {
        if (this.alive[i])
        {
            if (this.l[i] <= this.large[i]) { this.l[i] += this.spd1[i] * deltaTime; }
            else { this.y[i] -= this.spd2[i] * deltaTime; }
            ctx2.drawImage(this.fruitType[i], this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            if (this.y[i] < 20) { this.alive[i] = false; }
        }
    }
}
fruitObj.prototype.born=function(i)
{
    var aneID = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.rootx[aneID];
    this.y[i] = ane.heady[aneID] + Math.random() * 150;
    this.l[i] = 0;
    this.alive[i] = true;
}
fruitObj.prototype.dead = function(i)
{
    this.alive[i] = false;
}



function fruitMonitor()
{
    var sum = 0;
    for(var i=0;i<fruit.num;i++)
    {
        if (fruit.alive[i]) { sum++; }
    }
    if(sum<30)
    {
        sendFruit();
        return;
    }
}
function sendFruit()
{
    for(var i=0;i<fruit.num;i++)
    {
        if(!fruit.alive[i])
        {
            fruit.born(i);
            return;
        }
    }
}