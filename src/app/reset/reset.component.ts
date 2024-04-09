import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent {
  errorMessage: string = '';
  formData = {
    password: '',
    confirmPassword: ''
  };
  showErrorPasswordAlert: boolean = false;
  showErrorPasswordMatchAlert: boolean = false;

  constructor(private authService: AuthService) {}

  reset(resetForm: NgForm) {
    if(this.checkForm(resetForm)) {
      const uidb64 = this.getQueryParameter("uidb64");
      const token = this.getQueryParameter("token");
      let key = `reset/${uidb64}/${token}`;
      let password = this.formData.password
      this.authService.reset(key, password)
    }
  }


    /**
 * starts varies functions to validate the form
 * @param {NgForm} form - entered data
 * @returns boolean
 */
    checkForm(form: NgForm) {
      if (form.valid) {
        if (!this.validatePassword(this.formData.password)) {
          this.renderAlert("password");
          return false;
        }
        if (this.formData.password !== this.formData.confirmPassword) {
          this.renderAlert("passwordMatch"); 
          return false;
        }
        return true;
      } else {
        return false
    }
  }
  
/**
 * checks if password follows rules of at least 8 characters and not entirely numeric
 * @param {string} password - value of password field
 * @returns boolean
 */
validatePassword(password: string): boolean {
  if (password.length < 8) {
    this.showErrorPasswordAlert = true;
    return false;
  }
  if (!/[a-zA-Z]/.test(password)) {
    this.showErrorPasswordAlert = true;
    return false;
  }
  this.showErrorPasswordAlert = false;
  return true;
}

getQueryParameter(name:string) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}


/**
 * renders alert
 * @param {string} alertType - identifier of alert (email, password, passwordMatch=
 * @returns boolean
 */
renderAlert(alertType: string) {
  if (alertType === 'password') {
    this.showErrorPasswordAlert = true;
  } else if (alertType === 'passwordMatch') {
    this.showErrorPasswordMatchAlert = true;
  }
    
  }
}
