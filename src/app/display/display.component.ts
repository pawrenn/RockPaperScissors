import { Component, OnInit, Input } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  constructor(private scoreService: ScoreService) {
   }
   
  ngOnInit() {
  }

}
