import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    routes = [
      {routerLink: '', routerName: 'Home', routerClass: 'home'},
      {routerLink: 'coverage', routerName: 'Coverage', routerClass: ''},
      {routerLink: 'plan', routerName: 'Plan', routerClass: ''},
      {routerLink: 'compare', routerName: 'Compare', routerClass: ''}
     
    ];
  constructor() { }

  ngOnInit() {
  }

}
