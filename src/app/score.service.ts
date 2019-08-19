import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScoreService {
  //variables to track each player's pick as well as the score and result of each fight
  highScore: number;
  tool: string;
  oppTool: string;
  result: string;
  num: number;

  //initialize our variables
  constructor() { 
    this.highScore = 0;
    this.tool = "Nothing...";
    this.oppTool = "Something better than you!";
    this.result = "It's anyone's game!";
  }
  
  //method to assign a random weapon to the opponent
  //going to add some basic AI in later
  getRandomTool(){
    this.num = Math.floor((Math.random() * 3) + 1);
    if(this.num == 1){
      this.setOppTool("Rock");
    }
    else if(this.num == 2){
      this.setOppTool("Paper");
    }
    else{
      this.setOppTool("Scissors");
    }
  }
  
  //method to find if the player won, lost, or tied
  determineWinner(){
    //first give opponent a weapon
    this.getRandomTool();

    //need a variable to determine if we should continue to check possible outcomes
    //intialize as false
    var finished: boolean = false;

    //if the player and opp have same it's a tie and we are done
    if(this.getTool() == this.getOppTool()){
      this.setResult("It's a tie!");
      finished = true;
    }

    //loop through the three tools and check for win/loss
    else if(this.getTool() == "Rock" && !finished){
      if(this.getOppTool() == "Scissors"){
        this.setResult("You Win!");
      }
      else{
        this.setResult("You Lose!")
      }
      finished = true;
    }
    else if(this.getTool() == "Paper" && !finished){
      if(this.getOppTool() == "Scissors"){
        this.setResult("You Lose!");
      }
      else{
        this.setResult("You Win!")
      }
      finished = true;
    }
    else if(this.getTool() == "Scissors" && !finished){
      if(this.getOppTool() == "Rock"){
        this.setResult("You Lose!");
      }
      else{
        this.setResult("You Win!")
      }
      finished = true;
    }

    //once we know the result, we either increment the score or reset it to 0
    if(this.getResult() == "You Win!"){
      this.setHighScore();
    }
    else if(this.getResult() == "You Lose!"){
      this.resetScore();
    }
  }

  //set and get for Result
  setResult(result: string){
    this.result = result;
  }
  getResult(){
    return this.result;
  }
  
  //set, get, and reset for High Score
  setHighScore(){
    this.highScore++;
  }
  getHighScore(){
    return this.highScore;
  }
  resetScore(){
    this.highScore = 0;
  }

  //set and get for Opp weapon
  setOppTool(newTool:string){
    this.oppTool = newTool;
  }
  getOppTool(){
    return this.oppTool;
  }

  //set and get for player weapon
  setTool(newTool: string){
    this.tool = newTool;
  }
  getTool(){
    return this.tool;
  }
}
