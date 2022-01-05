var gameState = 0
var playerCount;
var database
var form
var Game
var Player

function setup(){
createCanvas(400,400)

database = firebase.database();

Game = new game();
Game.getState()
Game.start()

}

function draw(){



}