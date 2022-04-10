function preload() {
  //https://www.spriters-resource.com/pc_computer/pajamasamnoneedtohidewhenitsdarkoutside/sheet/96680/
  img = loadImage('bedroo.png');
  //https://www.spriters-resource.com/nintendo_switch/newsupermariobrosudeluxe/sheet/169163/
  imgg= loadImage('fastwalkright.gif');
  imggg= loadImage('fastwalkleft.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

var x=20;
var y=20;
//var imaje=imgg;


function draw() {
  image(img, 0, 0, windowWidth, windowHeight);

  if (mousePressed){

    if (mouseX>=x){
      image(imgg, x,y);
      x+=2.5
    }
    if (mouseY>y){
      y+=2.5
    }
    if (mouseX<x){
      image(imggg, x,y);
      x-=2.5
    }
    if (mouseY<y){
      y-=2.5
    }
    if (x<=1260&&x>=1180){
//add 
    }
    if (y<=320&&y>=480){

    }
    // if(mouseX=x){
    //   image(still, x,y);
    // }
    // if(mouseX>=420&&mouseX<=380){

    // }
  }

  toggle_vis;

  // if (x>=1300 && y>=300){
  //   document.getElementById("nexttime").style.display = "";
  // } else {
  //   document.getElementById("nexttime").style.display = "none";
  // }
}

function toggle_vis(nexttime){
  var nexttime= document.getElementById("nexttime");
  if (x>=1300 && y>=300){
    nexttime.style.display = "";
  }else{
    nexttime.style.display = "none";
  }


}

// function toggle_visibility(id) {
//   var e = document.getElementById(id);
//   if(e.style.display == 'block')
//      e.style.display = 'none';
//   else
//      e.style.display = 'block';

 function mousePressed(event){
   loop();

 }


 