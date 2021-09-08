function preload()
{
    remote_img = loadImage("20210908_185324.jpg")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
}

function draw()
{
    image(remote_img, 0, 0, 600, 500);

    rect(70, 10, 450, 450);
    noFill();
    stroke('#FF0000');
}

function back()
{
    window.location="index.html";
}