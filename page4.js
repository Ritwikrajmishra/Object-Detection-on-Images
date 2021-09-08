status1 = "";

function preload()
{
    mouse_img = loadImage("20210908_185652.jpg")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResults);
}

function draw()
{
    image(mouse_img, 0, 0, 600, 500);

    rect(30, 10, 550, 450);
    noFill();
    stroke('#FF0000');
}

function back()
{
    window.location="index.html";
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}