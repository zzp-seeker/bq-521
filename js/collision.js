function momFruitsCollosion()     //鱼妈妈和果实的碰撞
{
    if (!data.gameOver&&gameStart)
    for(var i=0;i<fruit.num;i++)
    {
        if(fruit.alive[i])
        {
            var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
            //console.log(fruit.fruitType[i].src);
            if (l < 900)
            {
                
                fruit.dead(i);

                var audio = new Audio("music/06.wav");
                audio.play();

                if(fruit.fruitType[i].src.indexOf("blue")>=0)
                {
                    data.double++;
                    mom.bigBodyCount = 0;
                    mom.bigBodyType = 2;
                    wave.born(fruit.x[i], fruit.y[i],2);
                }
                else
                {
                    for (var tt = 0; tt < data.double; tt++)
                         { data.fruitNum++; }
                    mom.bigBodyCount = 0;
                    mom.bigBodyType = 1;
                    wave.born(fruit.x[i], fruit.y[i], 1);
                }
            }
        }
    }
}

function momBabyCollosion()     //鱼妈妈和鱼宝宝的碰撞
{
    var l = calLength2(baby.x, baby.y, mom.x, mom.y);
    if (gameStart&&(!data.gameOver) && l < 900 && data.fruitNum >= data.need)
    {
        baby.babyBodyCount = 0;
        mom.bigBodyType = 0;
        mom.bigBodyCount = 0;
        data.reset();

        var audio = new Audio("music/love.mp3");
        audio.play();
    }
}

function gameBegin()   //游戏开始
{
    if(!gameStart)
    {
        if (mx > canWidth * 0.3 + 50 && my < canHeight * 0.3 && mx < canWidth * 0.3 + 250 && my > canHeight * 0.3 - 50)
        {
            var audio = new Audio("music/start.mp3");
            audio.play();
            gameStart = true;
        }
        else if (mx > canWidth * 0.3 + 50 && my < canHeight * 0.3+200 && mx < canWidth * 0.3 + 250 && my > canHeight * 0.3 + 150)
        {
            var audio = new Audio("music/start.mp3");
            audio.play();
            gameStart = true;
            cainiao = false;
        }
    }
}

