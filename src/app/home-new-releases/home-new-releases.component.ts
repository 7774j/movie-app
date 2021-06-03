import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-new-releases',
  templateUrl: './home-new-releases.component.html',
  styleUrls: ['./home-new-releases.component.css']
})
export class HomeNewReleasesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
