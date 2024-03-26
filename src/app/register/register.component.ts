import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formData = {
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit(form: NgForm) {
    
    console.log(this.formData);
  }
}
