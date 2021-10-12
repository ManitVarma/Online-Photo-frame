function setup(){
    canvas = createCanvas(660, 660);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 230, 150, 220, 200);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    noFill()
    rect(90, 40, 460, 460);

    fill("orange");
    circle(40, 25, 40);

    fill("orange");
    circle(40, 100, 40);

    fill("orange");
    circle(40, 175, 40);

    fill("orange");
    circle(40, 250, 40);

    fill("orange");
    circle(40, 325, 40);

    fill("orange");
    circle(40, 400, 40);

    fill("orange");
    circle(40, 475, 40);

    fill("orange");
    circle(40, 550, 40);

    fill("orange");
    circle(40, 625, 40);

    fill("orange");
    circle(40, 700, 40);

    fill("orange");
    circle(40, 775, 40);

    fill("orange");
    circle(40, 850, 40);

    fill("orange");
    circle(40, 925, 40);

    fill("orange");
    circle(40, 1000, 40);






    fill("navy");
    circle(150, 20, 40);

    fill("navy");
    circle(250, 20, 40);

    fill("navy");
    circle(350, 20, 40);

    fill("navy");
    circle(450, 20, 40);

    fill("navy");
    circle(550, 20, 40);

    fill("navy");
    circle(640, 20, 40);

    




    fill("orange");
    circle(640, 20, 40);

    fill("orange");
    circle(640, 100, 40);

    fill("orange");
    circle(640, 175, 40);

    fill("orange");
    circle(640, 250, 40);

    fill("orange");
    circle(640, 325, 40);

    fill("orange");
    circle(640, 400, 40);

    fill("orange");
    circle(640, 475, 40);

    fill("orange");
    circle(640, 550, 40);

    fill("orange");
    circle(640, 625, 40);

    fill("orange");
    circle(640, 700, 40);

    fill("orange");
    circle(640, 775, 40);

    fill("orange");
    circle(640, 850, 40);

    fill("orange");
    circle(640, 925, 40);

    fill("orange");
    circle(640, 1000, 40);
}

function takeSnapshot(){
    save ("MySelfie.png")
}