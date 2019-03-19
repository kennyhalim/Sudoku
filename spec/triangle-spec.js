import { Board } from './../src/sudoku.js';


describe('Board', function() {

  it('should check if first row equals to 9', function() {
    var newBoard = new Board();
    for(var i = 1;i < 10;i++){
      newBoard.row.push(i);
    }
    
    expect(newBoard.checkRow()).toEqual(true);
  });
  
  it('should check if first row equals to 9', function() {
    var newBoard = new Board();
    for(var i = 1;i < 10;i++){
      newBoard.column.push(i);
    }
    
    expect(newBoard.checkColumn()).toEqual(true);
  });
  
  it('should check if each box adds up to 45', function() {
    var newBoard = new Board();

    newBoard.board[0][0] = 1;
    newBoard.board[0][1] = 2;
    newBoard.board[0][2] = 3;
    newBoard.board[1][0] = 4;
    newBoard.board[1][1] = 5;
    newBoard.board[1][2] = 6;
    newBoard.board[2][0] = 7;
    newBoard.board[2][1] = 8;
    newBoard.board[2][2] = 9;
  

    console.log(newBoard.board);
    expect(newBoard.checkEachBox()).toEqual(true);
  });
  
  it('should check if first row does not equal to 9', function(){
    var newBoard = new Board();
    for(var i = 1;i < 20;i++){
      newBoard.row.push(i);
    }
    
    expect(newBoard.checkRow()).toEqual(false);
  })

});
