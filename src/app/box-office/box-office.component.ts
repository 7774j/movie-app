import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-office',
  templateUrl: './box-office.component.html',
  styleUrls: ['./box-office.component.css']
})
export class BoxOfficeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
