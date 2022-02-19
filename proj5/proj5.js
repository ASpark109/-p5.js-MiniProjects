let bodyArr = []
const bodyNum = 10;         //Number of objects
const bodyRadius = 4;       //The radius of the ball
const startSpeedX = 25;     //Initial velocity in the horizontal X axis (max 25, min -25)
const startSpeedY = 10;     //Initial velocity in the vertical Y axis (max 10, min -10)
const G_forse = 0.8;        //Gravitational constant
const t = 0.3;

function setup()
{
    createCanvas(1000, 600);
    //Initialization of points
    init()
}

function draw()
{
    background(228, 228, 228, 70);

    for(let i = 0; i < bodyNum; i++)
    {
        //Display each point
        bodyArr[i].display();
        bodyArr[i].move();
    }
}


//The point class
class  Body
{
    constructor(x, y, sX, sY, weight, elasticity)
    {   
        //Coordinates on the X axis
        this.x = x;

        //Coordinates on the Y axis
        this.y = y;

        //The speed of the point on the X and Y axes
        this.speedX = sX;
        this.speedY = sY;

        this.weight = weight;
        this.elasticity = elasticity;
    }
    
    move()
    {


        //Conditions of reflection of a point from walls
        if(this.x < bodyRadius)
        {
            this.x = bodyRadius;
            this.speedX *= -this.elasticity;
        }
        if(this.x > width - bodyRadius)
        {
            this.x = width - bodyRadius;
            this.speedX *= -this.elasticity;
        }

        if(this.y < bodyRadius)
        {
            this.y = bodyRadius;
            this.speedY *= -this.elasticity;
        }
        if(this.y > height - bodyRadius)
        {
            this.y = height - bodyRadius;
            this.speedY *= -this.elasticity;
        }
        
        //Simulation of air resistance force, for braking balls in the horizontal direction
        if(this.speedX > 0)
        {
            this.speedX -= 0.004;
        }
        else if(this.speedX < 0)
        {
            this.speedX += 0.004;
        }

        //Calculation of the velocity of the ball in the vertical axis
        this.speedY = this.speedY + G_forse * this.weight * t

        //New coordinates of the ball
        this.x += this.speedX;
        this.y += this.speedY;

    }

    //A method for displaying a point
    display()
    {
        fill(25, 73, 25);
        noStroke();
        ellipse(this.x, this.y, bodyRadius * 2, bodyRadius * 2)
    }
}


//Initialization of objects
function init()
{
    for(let i = 0; i < bodyNum; i++)
    {
        bodyArr[i] = new Body(
            random(bodyRadius*2, width - bodyRadius), 
            random(bodyRadius*2, height - bodyRadius), 
            random(-startSpeedX, startSpeedX), 
            random(-startSpeedY, -startSpeedY*2),
            random(0, 1),
            random(0.6, 0.9))
    }
}

function mousePressed()
{
    init()
}
