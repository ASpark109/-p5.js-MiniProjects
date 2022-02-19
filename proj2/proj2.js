let maxDist = 0;

function setup()
{
    createCanvas(500, 500);
    maxDist = Math.trunc(dist(0,0, width/2, height/2))
}

let strWeight = 0;

function draw()
{
    background(0);

    for(let i = 1; i < height; i+=1)
    {
        for(let j = 1; j < width; j+=1)
        {
            strWeight = dist(j, i, width/2, height/2)/(maxDist/255)
            stroke(height/2 - strWeight);
            point(j, i);
        }
    }
}