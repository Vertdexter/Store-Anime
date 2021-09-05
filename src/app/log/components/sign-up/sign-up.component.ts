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
      nombre:     ['',  [Validators.required]],
      apellidos:  ['',  [Validators.required]],
      correo:     ['',  [Validators.required]],
      usuario:    ['',  [Validators.required]],
      password:   [null,[Validators.required]]
    })
  }

  get nombreFill(){
    return this.form.get('nombre')
  }

  get apellidosFill(){
    return this.form.get('apellidos')
  }

  get correoFill(){
    return this.form.get('correo')
  }

  get usuarioFill(){
    return this.form.get('usuario')
  }

  get passwordFill(){
    return this.form.get('password')
  }



}
