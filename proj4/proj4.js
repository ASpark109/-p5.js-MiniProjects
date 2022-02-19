let bodyArr = []
const bodyNum = 100;
const bodyRadius = 4;
const lineDist = 70;
const startSpeed = 10;
let curDist = 0;

function setup()
{
    createCanvas(1000, 600);

    //Initialization of points
    for(let i = 0; i < bodyNum; i++)
    {
        bodyArr[i] = new Body(
                        random(bodyRadius*2, width - bodyRadius), 
                        random(bodyRadius*2, height - bodyRadius), 
                        random(-startSpeed, startSpeed), 
                        random(-startSpeed, startSpeed))
    }
}

function draw()
{
    background(200);

    for(let i = 0; i < bodyNum; i++)
    {
        //Display each point
        bodyArr[i].display();
        
        for(let j = i; j < bodyNum; j++)
        {
            if(i != j)
            {
                curDist = dist(bodyArr[i].x, bodyArr[i].y, bodyArr[j].x, bodyArr[j].y)

                //If the distance between two points is less than lineDist, a line is drawn between them
                if(curDist < lineDist && curDist > 7)
                {
                    stroke(30);
                    strokeWeight(100/curDist)
                    line(bodyArr[i].x, bodyArr[i].y, bodyArr[j].x, bodyArr[j].y)
                }
            }
        }

        //Update the position of each point
        bodyArr[i].move();
    }
}


//The point class
class  Body
{
    constructor(x, y, sX, sY)
    {   
        //Coordinates on the X axis
        this.x = x;

        //Coordinates on the Y axis
        this.y = y;

        //The speed of the point on the X and Y axes
        this.speedX = sX;
        this.speedY = sY;
    }
    
    move()
    {

        //Conditions of reflection of a point from walls
        if(this.x < bodyRadius || this.x > width - bodyRadius)
        {
            this.speedX *= -1;
        }
        if(this.y < bodyRadius || this.y > height - bodyRadius)
        {
            this.speedY *= -1;
        }

        //Adjust the speed of the points with the mouse
        this.x += this.speedX * (mouseX - width/2) / width;
        this.y += this.speedY * (mouseX - width/2) / height;
    }

    //A method for displaying a point
    display()
    {
        fill(0);
        noStroke();
        ellipse(this.x, this.y, bodyRadius * 2, bodyRadius * 2)
    }
}
