var img;
var img2;
var img3;

var gif1;

function setup() {
createCanvas(800, 800);
img = loadImage("http://i.imgur.com/P3o6ZLD.jpg");
img2 = loadImage("http://i.imgur.com/3LlgiGP.jpg");
img3 = loadImage("http://i.imgur.com/PDC6OQq.jpg");
gif1 = loadGif("http://i.imgur.com/FiZS3mr.gif");
//img5 = createImg("http://i.imgur.com/9dqBGPF.gif");
}



function draw() {
image(img, 0, 0, img.width/2, img.height/2);
image(img2, 540, 200, img2.width/2, img2.height/2);
image(img3, 0,0,);
image (gif1,540, 0);
//image (img5, 400, 870);
}