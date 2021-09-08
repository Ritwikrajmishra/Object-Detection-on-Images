function preload()
{
    book_img = loadImage("20210908_190012.jpg")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
}

function draw()
{
    image(book_img, 0, 0, 600, 500);

    rect(10, 10, 600, 490);
    noFill();
    stroke('#FF0000');
}

function back()
{
    window.location="index.html";
}