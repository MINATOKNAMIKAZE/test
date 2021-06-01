const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//creatingVars
var engine, world;
var canvas, backgroundImage;
var gameState=0

function preload(){
player_img=loadImage("img3.png")
bg_1=loadImage("img2.JPG")







}
function setup(){
  engine = Engine.create();
  world = engine.world;
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  form=new Form()
  //database = firebase.database();
  maze1=new Maze1(200,200,80,20)
  maze2=new Maze1(300,180,20,240)
  player=createSprite(50,50,10,10)
  player.addImage("player",player_img)
  player.scale=0.3
}


function draw(){
  Engine.update(engine);
  background("white")
  if(gameState===0){
  form.display()
}
if(gameState===1){
  background(bg_1)
  createEdgeSprites();
createMazeSprites();
if(player.x===200&&player.y===200){
player.x=50
player.y=50
}
if(keyDown("LEFT_ARROW"))
{
  player.x=player.x-3
}
if(keyDown("RIGHT_ARROW"))
{
  player.x=player.x+3
}
if(keyDown("UP_ARROW"))
{
  player.y=player.y-3
}
if(keyDown("DOWN_ARROW"))
{
  player.y=player.y+3
}
drawSprites();
}
function createMazeSprites(){
  maze1.display();
  maze2.display();
}}