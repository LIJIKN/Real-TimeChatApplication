import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submittedsignup=false;
  nameinput = '';
  emailinput = '';
  passwordinput = '';
  confpasswordinput = '';
  confPwdMsg = '';
  isExist = 0;


  signupForm = new FormGroup({

  username: new FormControl(this.nameinput,[
  Validators.required,
  Validators.minLength(1)
    ]),

  userEmail: new FormControl(this.emailinput,[
      Validators.required,
      Validators.pattern('^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})$')]),

  password: new FormControl(this.passwordinput,[
        Validators.required,
        Validators.minLength(6)
      ]),

  confpassword: new FormControl(this.confpasswordinput,[
        Validators.required,
        Validators.minLength(6)
      ])
  })
  constructor( private service:AuthService) { }

  ngOnInit(): void {
  }
  get username(){ return this.signupForm.controls.username; }
  get userEmail(){ return this.signupForm.controls.userEmail; }
  get password(){ return this.signupForm.controls.password; }
  get confpassword(){ return this.signupForm.controls.confpassword; }

  confirmPassword(event:any){
    event = event?.target as HTMLInputElement;
    const confPwd = event.value;
    const pwd = this.signupForm.controls.password.value;
    
    
    if(pwd == confPwd)
    {
      this.confPwdMsg = '';
      this.isExist = 0;
    }
    else{
       this.confPwdMsg = 'Password mismatch';
       this.isExist = 1;
    }
  }

  
  onsubmitsignup(values:any)
{
this.submittedsignup=true;
//  console.log(values);
this.service.signup(values);
  
}  

}
