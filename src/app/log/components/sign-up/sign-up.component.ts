import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {

      this.builderForm();
   }

  ngOnInit(): void {
  }

  builderForm(){
    this.form = this.formBuilder.group({
      nombre:     ['', []],
      apellidos:  ['', []],
      correo:     ['',[]],
      usuario:    ['', []],
      genero:     ['', []]
    })
  }

}
