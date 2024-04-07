import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const jsonData = params['data'];
      if (jsonData) {
        this.data = JSON.parse(jsonData);
        console.log(this.data);
        this.render(this.data);
      }
    });
    const loginLink = document.getElementById('loginLink');
    if (loginLink) {
      loginLink.addEventListener('click', () => {
        this.router.navigateByUrl('/login');
      });
    }
  }

  render(data: any) {
    const confirmationBox = document.getElementById('confirmationBox');
    if (confirmationBox) {
      if (data.success) {
        confirmationBox.innerHTML = this.templateSuccess();
      }
      if (data.error) {
        confirmationBox.innerHTML = this.templateError(data.error);
      }
    } else {
      console.error("Element with ID 'confirmationBox' not found.");
    }
  }
  

templateSuccess() {
  let template = `  <h2>Confirmation</h2>
  <p>
      An Email has been sent to you. <br>
      Please check your inbox to confirm your account.
  </p>
  <p>After confirming your account, go to <a id="loginLink">Login</a></p>`;
  return template;
}


templateError(errorData: any) {
  return `
    <h2>An Error has occurred</h2>
    <p>${errorData}</p>
    <p>Already have an account? Go to <a id="loginLink">Login</a></p>
  `;
}


}
