import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-tool-menu',
  templateUrl: './tool-menu.component.html',
  styleUrls: ['./tool-menu.component.css']
})
export class ToolMenuComponent implements OnInit {

  locked: boolean = false;
  num: number;
  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
  }

  onSetRock(){
    this.scoreService.setTool("Rock");
    this.locked = true;
    this.scoreService.determineWinner();
  }

  onSetPaper(){
    this.scoreService.setTool("Paper");
    this.locked = true;
    this.scoreService.determineWinner();
  }

  onSetScissors(){
    this.scoreService.setTool("Scissors");
    this.locked = true;
    this.scoreService.determineWinner();
  }
}
