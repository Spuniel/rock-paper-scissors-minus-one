import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rock-paper-scissors-minus-one';

  playerLeftHand: string = "leftPaperPlayer.png";
  playerRightHand: string = "rightPaperPlayer.png";
  opponentLeftHand: string = "leftPaperOpponent.png";
  opponentRightHand: string = "rightPaperOpponent.png";

  leftSelected: boolean = false;
  rightSelected: boolean = false;

  labelText: string = "";

  leftScissorsClick(){
    this.playerLeftHand = "leftScissorsPlayer.png"
    this.leftSelected = true;
    this.startGame();
  }

  rightScissorsClick(){
    this.playerRightHand = "rightScissorsPlayer.png"
    this.rightSelected = true;
    this.startGame();
  }

  leftRockClick(){
    this.playerLeftHand = "leftRockPlayer.png"
    this.leftSelected = true;
    this.startGame();
  }

  rightRockClick(){
    this.playerRightHand = "rightRockPlayer.png"
    this.rightSelected = true;
    this.startGame();
  }

  leftPaperClick(){
    this.playerLeftHand = "leftPaperPlayer.png"
    this.leftSelected = true;
    this.startGame();
  }

  rightPaperClick(){
    this.playerRightHand = "rightPaperPlayer.png"
    this.rightSelected = true;
    this.startGame();
  }

  startGame(){
    if(this.leftSelected && this.rightSelected){
      this.labelText = "ready to play";
    }
  }
}
