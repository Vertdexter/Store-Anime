import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


import {Title} from '../../../core/models/fooder-title.model';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 
  title: Title[] = [
    {text: 'One', cols: 5, rows: 1, color: '#3641C8'},
    {text: 'Two', cols: 2, rows: 1, color: 'white'},
    {text: 'Tree', cols: 1, rows: 1, color: '#8799DE'},
    {text: 'Four', cols: 2, rows: 1, color: 'white'},
    {text: 'Five', cols: 5, rows: 1, color: '#3641C8'},
  ]

  disableSelect = new FormControl(false);

  email: FormControl;
  
  constructor() { 
    this.email = new FormControl( '',  [
      Validators.email
    ]);
    /* this.email.valueChanges.subscribe( response =>{
      console.log(response);
    }) */
  }

  ngOnInit(): void {
  }

  sendEmail(){
    if(this.email.valid){
      console.log(this.email.value);
      
    }
  }

}
