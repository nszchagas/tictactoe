import { Component} from '@angular/core';


@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent {

  player:String = "X";
  winner:String="";
  table:String[][]=[["", "", ""],["", "", ""],["", "", ""]]
  spacesFilled:number = 0;

  reset(): void {
    
    this.winner = "";
    this.player = "X";
    for (var row = 0 ; row < 3 ; row++) {
      for (var column = 0 ; column < 3 ; column++) {
        this.table[row][column] = "";
      }
    }
  }


  getWinner(){
       
    if (this.spacesFilled == 9){
      this.winner = "Draw";
    } else {
      for (var row = 0; row < 3 ; row ++){
        for (var column = 0; column < 3 ; column ++){
          if (this.checkWinner()){
            alert(`${this.player} wins!`)
            return this.player;
          }
        }
      }
    }

    return "";
  }

  cellClick(row:number, column:number){
    if(this.winner === "") {
      if(this.table[row][column] === ""){
        this.table[row][column] = this.player;
        this.spacesFilled++;
        this.winner = this.getWinner();
        this.player = (this.player == "X" ? "O" : "X");    
      }else {
        alert("Esse espaço já foi escolhido!")
      }
    }else{
      alert("Jogo encerrado!")
    }
    
  }

  checkWinner():boolean {
    for (var row = 0; row < this.table.length ; row++){
      if(this.table[row][0] === this.player && 
        this.table[row][1] === this.player && this.table[row][2] === this.player)
          return true;
    }
    for (var col = 0; col < this.table.length ; col++){
      if(this.table[0][col] === this.player && 
        this.table[1][col] === this.player && this.table[2][col] === this.player)
          return true;        
    }
    if((this.table[0][0] === this.player && 
      this.table[1][1] === this.player && this.table[2][2] === this.player) ||
       ((this.table[0][2] === this.player && 
        this.table[1][1] === this.player && this.table[2][0] === this.player)))
        return true;
    return false;
  }
  
}


