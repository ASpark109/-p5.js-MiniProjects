function setup()
{
    createCanvas(300, 300);
}

currentDis = 0;

function draw()
{
    background(0);

    for(let i = 1; i < height; i+=5)
    {
        for(let j = 1; j < width; j+=5)
        {
            currentDis = dist(j, i, width/2, height/2)

            if(currentDis > mouseX){
                stroke(0);
            }
            else{
                stroke(255);
            }
            point(j, i);
        }
    }
}