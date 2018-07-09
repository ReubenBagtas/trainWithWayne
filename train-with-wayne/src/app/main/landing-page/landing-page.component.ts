import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private _router: Router) {}
  ngOnInit() {}

  login() {
    this._router.navigate(['/login']);
  }

  register() {
    this._router.navigate(['/register']);
  }
}
