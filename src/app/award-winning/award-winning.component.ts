import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-award-winning',
  templateUrl: './award-winning.component.html',
  styleUrls: ['./award-winning.component.css']
})
export class AwardWinningComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
