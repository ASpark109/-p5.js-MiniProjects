function setup()
{
    createCanvas(200, 200);
}

let strokeWeight = 0;

function draw()
{
    background(0);

    for(let i = 1; i < height; i+=1)
    {
        for(let j = 1; j < width; j+=1)
        {
            strokeWeight = Math.cos(j * (180/Math.PI) / mouseX / 10) * 255;
            stroke(strokeWeight);
            point(j, i);
        }
    }
}