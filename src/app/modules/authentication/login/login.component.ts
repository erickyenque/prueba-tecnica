import { Component, OnInit } from '@angular/core';
import { LoginFormService } from 'src/app/services/form/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginFormService: LoginFormService) { }

  ngOnInit(): void {
  }

  login() {
    if(this.loginFormService.getForm.valid) {
      alert("Validation Form")
    } else {
      this.loginFormService.getForm.markAllAsTouched();
    }
  }
}
