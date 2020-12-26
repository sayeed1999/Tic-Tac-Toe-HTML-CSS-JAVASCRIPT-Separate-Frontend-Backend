const game = {
  board: ['...','...','...'],
  no_of_play: 0,
  game_mode: 0,
  
  startgame: function(){
    this.board = ['...','...','...'];
    this.no_of_play = 0;
    this.game_mode = this.choose_player();
  
    this.newgame('one');
  },
  
  /////console attached!
  choose_player: function(){
    var res = prompt('To play multi-player, type 1' + '\n' + 'To play with computer:\n'+ '   computer plays first, type 2\n   you play first, type 3');
    
    return res;
  },
  
  //my computer real game!
  computerInput: function(){
    
  },
  
  //////console attached!
  //user input
  takeInput: function(){
    var input = prompt("Enter row-column like 12: ");
    return input;
  },
  //////console attached
  //user output
  display: function(){
    window.alert(this.board[0] + '\n' + this.board[1] + '\n' + this.board[2]);
  },
  check: function(){
    if(this.board[0][0]===this.board[0][1] && this.board[0][0]===this.board[0][2] && this.board[0][0]!=='.') return true;
    if(this.board[1][0]===this.board[1][1] && this.board[1][0]===this.board[1][2] && this.board[1][0]!=='.') return true;
    if(this.board[2][0]===this.board[2][1] && this.board[2][0]===this.board[2][2] && this.board[2][0]!=='.') return true;
    
    if(this.board[0][0]===this.board[1][0] && this.board[0][0]===this.board[2][0] && this.board[0][0]!=='.') return true;
    if(this.board[0][1]===this.board[1][1] && this.board[0][1]===this.board[2][1] && this.board[0][1]!=='.') return true;
    if(this.board[0][2]===this.board[1][2] && this.board[0][2]===this.board[2][2] && this.board[0][2]!=='.') return true;
    
    if(this.board[0][0]===this.board[1][1] && this.board[1][1]===this.board[2][2] && this.board[0][0]!=='.') return true;
    
    if(this.board[2][0]===this.board[1][1] && this.board[1][1]===this.board[0][2] && this.board[2][0]!=='.') return true;
    
    return false;
  },
  win: function(player){
    if(player==='one') window.alert("Player 1 wins!");
    else window.alert("Player 2 wins!");
  },
  draw: function(){
    window.alert('match tie');
  },
  
  newgame: function(player){
    this.no_of_play++;
    var input;
    if(this.game_mode=='1')
      input = this.takeInput();
    else{
      if((this.game_mode=='3' && player==='one')||(this.game_mode=='2' && player==='two'))
        input = this.takeInput();
      else
        input = this.computerInput();
    }
    
    var row = input[0];
    row -=1;
    var col = input[1];
    col -=1;
    
    var tmp = '';
    for(let i=0; i<=2; i++)
    {
      if(i===col){
        if(player==='one') tmp += 'x';
        else tmp += 'o';
      }
      else tmp += this.board[row][i];
    }
    this.board[row] = tmp;
    
    
    this.display();
    
    if(this.check()==true){
      //win
      this.win(player);
    }
    else if(this.no_of_play===9){
      //draw
      this.draw();
    }
    else{
      //match continue
      player = player==='one'? 'two': 'one';
      this.newgame(player);
    }
  }
}

game.startgame();