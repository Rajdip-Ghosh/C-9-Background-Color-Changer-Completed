
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);

  if(keyIsDown(UP_ARROW))
{
  background('magenta');
}

if(keyIsDown(DOWN_ARROW))
{
  background('yellow');
}

if(keyIsDown(LEFT_ARROW))
{
  background('royalblue');
}

if(keyIsDown(RIGHT_ARROW))
{
  background('lightgreen');
}

}


