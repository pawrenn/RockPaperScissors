import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-win-streak',
  templateUrl: './win-streak.component.html',
  styleUrls: ['./win-streak.component.css']
})
export class WinStreakComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
  }

}
