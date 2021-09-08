function preload()
{
    laptop_img = loadImage("20210908_184918.jpg")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
}

function draw()
{
    image(laptop_img, 0, 0, 600, 500);

    rect(10, 10, 590, 480);
    noFill();
    stroke('#FF0000');
}

function back()
{
    window.location="index.html";
}