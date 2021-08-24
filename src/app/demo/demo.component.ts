import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'proyet1';
  hellow = 'Hola mundo';
  items = ["Luis","Nicole","Beto", "Karen"]

  ex = 10;

  
  addItem(){
    this.items.push('New Items')
  }
  deleteItem(index:number){
    this.items.splice(index, 1)
  }
  

}
