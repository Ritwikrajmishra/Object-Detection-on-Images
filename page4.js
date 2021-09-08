function preload()
{
    robot_img = loadImage("20210908_185652.jpg")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
}

function draw()
{
    image(robot_img, 0, 0, 600, 500);

    rect(30, 10, 550, 450);
    noFill();
    stroke('#FF0000');
}

function back()
{
    window.location="index.html";
}