import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router=inject(Router)
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  login(){
      let {username,password}=this.loginForm.value;
      if(username=="enigma" && password=="enigma"){
        this.router.navigate(["/main"])
      }else{
        alert("Contraseña y/o usuario incorrecto, intente con 'enigma' ")
        this.loginForm.reset();
      }

  }
}
