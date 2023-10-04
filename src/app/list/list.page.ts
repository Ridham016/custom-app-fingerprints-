import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  name:string='';
  nameList:any=[];
  clicked= false;
  constructor() { }

  ngOnInit() {
  }
  onNameAdded(){
    // this.nameList.push(this.name);
  }
}
