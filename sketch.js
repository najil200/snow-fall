var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var snowflacks;
var snowGroup;
var snow1_img, snow2_img;
var player_img;


function preload(){
  back_img = loadImage("snow1.jpg");
  player_img = loadImage("snowboy.png");
  snow1_img = loadImage("snow4.webp");
  snow2_img = loadImage("snow5.webp");
  snowGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}