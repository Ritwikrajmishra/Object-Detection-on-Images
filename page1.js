function preload()
{
    mouse_img = loadImage("20210908_184133.jpg")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
}

function draw()
{
    image(mouse_img, 0, 0, 600, 500);

    rect(50, 50, 500, 400);
    noFill();
    stroke('#FF0000');
}

function back()
{
    window.location="index.html";
}