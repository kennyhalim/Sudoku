export function Board() {
  this.row = [],
  this.column = [],
  this.board = [ [],[],[] ];
}

Board.prototype.checkRow = function() {
  var total = 0;
  for(var i = 0;i < this.row.length;i++){
    total += this.row[i];
  }
  if(total === 45){
    return true;
  }
  else {
    return false;
  }
};

Board.prototype.checkEachBox = function() {
  var total = 0;
  for(var i = 0;i < 3;i++){
    for(var j = 0;j < 3;j++){
      total += this.board[i][j];
    }
  }
  if(total === 45){
    return true;
  }
  else {
    return false;
  }
}

Board.prototype.checkColumn = function() {
  var total = 0;
  for(var i = 0;i < this.column.length;i++){
    total += this.column[i];
  }
  if(total === 45){
    return true;
  }
  else {
    return false;
  }
};

