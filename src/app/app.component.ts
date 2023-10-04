import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'Dashboard';
  activeIndex!:number;
  Pages = [
    {
      title: 'Home',
      url: '',
      icon: 'Home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },

  ];
  constructor() {

  }
  ionViewDidEnter() {
  }
}
