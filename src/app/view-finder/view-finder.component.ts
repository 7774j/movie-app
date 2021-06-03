import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-finder',
  templateUrl: './view-finder.component.html',
  styleUrls: ['./view-finder.component.css']
})
export class ViewFinderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
