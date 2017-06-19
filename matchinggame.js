//This is the Javascript file for "Project 2 - Javascript Matching Game"


 
/* Generic Tile
  //tile x
  //tile y
  //tile size (constant, they're square)
  //tile back image, eventually 
*/

//this function builds the tiles, 
var Tile = function (x, y,)
{
  this.x = x;
  this.y = y;
  this.width = 70px;
  fill(214, 247, 202);
  strokeWeight(2);
  rect(this.x, this.y, this.width, this.width, 10);
};

var testTile = new Tile(50, 50)