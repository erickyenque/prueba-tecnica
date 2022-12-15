import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  private form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.createForm();
  }

  public createForm(): FormGroup {
    return this.fb.group({
      fieldEmail: [null, [Validators.required]],
      fieldPassword: [null, [Validators.required]]
    })
  }

  public get getForm() {
    return this.form;
  }

  public get fieldEmail() {
    return this.getForm.get('fieldEmail');
  }

  public get fieldPassword() {
    return this.getForm.get('fieldPassword');
  }

  public get fieldEmailInvalid() {
    return (
      this.fieldEmail.invalid && this.fieldEmail.touched
    );
  }

  public get fieldPasswordInvalid() {
    return (
      this.fieldPassword.invalid && this.fieldPassword.touched
    );
  }
}
