import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidador } from 'src/app/utils/validators';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide = true

  form: FormGroup

  constructor(
    private formbuilder: FormBuilder
  ) { 
    this.builderForm();
  }

  ngOnInit(): void {
  }

 get fillUser(){
  return this.form.get('user')
 }
 
 
  builderForm(){
    this.form = this.formbuilder.group({
      user: ['', [Validators.required, MyValidador.isUserValid]],
      password: ['' , [Validators.required, MyValidador.isPasswordValid] ]
    })
  }


}
