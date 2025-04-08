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

  playerLeftVisible = true;
  playerRightVisible = true;

  opponentLeftVisible = true;
  opponentRightVisible = true;

  labelText: string = "";
  player: string = "";
  opponent: string = "";

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
      this.randomMove();

      this.labelText = "choose one hand";
    }
  }

  randomMove(){
    switch(Math.floor(Math.random() * 3) + 1){
      case 1:
        this.opponentLeftHand = "leftScissorsOpponent.png";
        break;
      case 2:
        this.opponentLeftHand = "leftRockOpponent.png";
        break;
      case 3:
        this.opponentLeftHand = "leftPaperOpponent.png";
        break;
    }

    switch(Math.floor(Math.random() * 3) + 1){
      case 1:
        this.opponentRightHand = "rightScissorsOpponent.png";
        break;
      case 2:
        this.opponentRightHand = "rightRockOpponent.png";
        break;
      case 3:
        this.opponentRightHand = "rightPaperOpponent.png";
        break;
    }
  }

  handChooser(event: Event): void {
    var element = event.target as HTMLImageElement;
    if(element.alt == "Left Player"){
      this.playerRightVisible = false;
    } else if(element.alt == "Right Player"){
      this.playerLeftVisible = false;
    }

    this.opponentHand();
    this.whoWon();
  }

  opponentHand(){
    switch(Math.floor(Math.random() * 2) + 1){
      case 1:
        this.opponentLeftVisible = false;
        break;
      case 2:
        this.opponentRightVisible = false;
        break;
    } 
  }

  whoWon(){
    this.player = this.whatWeaponPlayer();
    this.opponent = this.whatWeaponOpponent();

    if(this.player == this.opponent) this.labelText = "draw";

    if(this.player == "rock" && this.opponent == "scissors") this.labelText = "win";
    if(this.player == "rock" && this.opponent == "paper") this.labelText = "lose";

    if(this.player == "paper" && this.opponent == "rock") this.labelText = "win";
    if(this.player == "paper" && this.opponent == "scissors") this.labelText = "lose";

    if(this.player == "scissors" && this.opponent == "paper") this.labelText = "win";
    if(this.player == "scissors" && this.opponent == "rock") this.labelText = "lose";
  }

  whatWeaponPlayer(): string{
    if(this.playerLeftVisible){
      if(this.playerLeftHand.includes("Rock")) return "rock";
      else if(this.playerLeftHand.includes("Paper")) return "paper";
      else if(this.playerLeftHand.includes("Scissors")) return "scissors";
    } else if (this.playerRightVisible){
      if(this.playerRightHand.includes("Rock")) return "rock";
      else if(this.playerRightHand.includes("Paper")) return "paper";
      else if(this.playerRightHand.includes("Scissors")) return "scissors";
    }

    return "pozdro";
  }

  whatWeaponOpponent(): string{
    if(this.opponentLeftVisible){
      if(this.opponentLeftHand.includes("Rock")) return "rock";
      else if(this.opponentLeftHand.includes("Paper")) return "paper";
      else if(this.opponentLeftHand.includes("Scissors")) return "scissors";
    } else if (this.opponentRightVisible){
      if(this.opponentRightHand.includes("Rock")) return "rock";
      else if(this.opponentRightHand.includes("Paper")) return "paper";
      else if(this.opponentRightHand.includes("Scissors")) return "scissors";
    }

    return "pozdro";
  }

  reset(){
    window.location.reload();
  }
}
