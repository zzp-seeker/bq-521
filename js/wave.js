var waveObj=function()
{
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
    this.type = [];
}
waveObj.prototype.num = 10;
waveObj.prototype.init=function()
{
    for(var i=0;i<this.num;i++)
    {
        this.alive[i] = false;
        this.r[i] = 0;
        this.type[i] = 0;
    }
}
waveObj.prototype.draw=function()
{
    for(var i=0;i<this.num;i++)
    {
        if(this.alive[i])
        {
            this.r[i] += deltaTime * 0.1;
            if (this.r[i] > 80)
                this.alive[i] = false;
            var alpha = 1 - this.r[i] / 80;
            ctx1.beginPath();
            ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
            ctx1.closePath();
            if (this.type[i]==1)
                ctx1.strokeStyle = "rgba(233,136,34," + alpha + ")";
            else
                ctx1.strokeStyle = "rgba(102,204,255," + alpha + ")";
            ctx1.lineWidth = 4;
            ctx1.stroke();
        }
    }
}
waveObj.prototype.born=function(x,y,id)
{
    for(var i=0;i<this.num;i++)
    {
        if(!this.alive[i])
        {
            this.alive[i] = true;
            this.r[i] = 5+Math.random()*10;
            this.x[i] = x;
            this.y[i] = y;
            this.type[i] = id;
            return;
        }
    }
}