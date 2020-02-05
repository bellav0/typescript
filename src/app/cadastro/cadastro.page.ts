import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { Storage} from '@ionic/storage'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder, public router: Router, private storage: Storage) {

    this.registerForm = this.formbuilder.group({
      name: [null,[Validators.required, Validators.minLength(3)]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(6)]],
      phone:[null,[Validators.required]],
      genre:[null,[Validators.required]]     
    });
  }

  submitForm(form){
    console.log(form);
    console.log(form.value);
    this.storage.set('name',form.value.name)
  }

  mostrarNome(){
    this.storage.get('name').then(
      (valor) => {
        console.log(valor);
      }
    );
  }

  navegar(){
    this.router.navigate(['/post'])
  }
  

  ngOnInit() {
  }

}
