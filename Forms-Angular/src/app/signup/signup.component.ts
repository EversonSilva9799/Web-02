import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // constructor() { }

  
  meuForm = this.fb.group(
    {
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userPassword: ['', Validators.required]
    }
  );

  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.meuForm.value);
  }
  

}
