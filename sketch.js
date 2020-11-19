//Create variables here
var dog, happyDog, database, foodS, foodStock
function preload()
{
  //load images here
dogImg = loadImage(dogImg.png);
dogImg1 = loadImage(dogImg1.png);
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  
  var dog= createSprite(250,250);
  dog.addAnimation(dogImg, dogImg1);
  //dog.addAnimation(dogImg1)

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
 background(46,139,87);

 if(keyWentDown(UP_ARROW)){
   writeStock(food);
   dog.addImage(dogHappy);
 }

  drawSprites();
  textSize= 15;
  Fill(red);
  text("Note: Press UP_ARROW Key To Feed Drago Milk", 150, 250);

function readStock(data){
  foodS=data.val();
}
function writeStock (x){

  if (x<=0){
    x=0;
  }else {
    x=x-1;
  }

database.ref('/').update({
  Food:x
})
}

//add styles here

}



