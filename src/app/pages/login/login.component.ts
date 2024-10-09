import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userForm = new FormGroup({  
    username: new FormControl(''),
    password: new FormControl(''),
  });

  router = inject(Router);

  onSubmit() {
    if(this.userForm.value.username === 'admin' && this.userForm.value.password === 'admin'){
      this.router.navigateByUrl('/dashboard');
    }else{
      alert('Login failed');
    }
  }
}
