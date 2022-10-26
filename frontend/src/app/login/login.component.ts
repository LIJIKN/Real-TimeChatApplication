import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submittedlogin=false;
  nameinput = '';
  passwordinput = '';

  loginForm = new FormGroup({

    username: new FormControl(this.nameinput,[
    Validators.required,
    Validators.minLength(1)
      ]),

      password: new FormControl(this.passwordinput,[
        Validators.required,
        Validators.minLength(6)
      ]),

    })
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }

  get username(){ return this.loginForm.controls.username; }
  
  get password(){ return this.loginForm.controls.password; }
  

  
  onsubmitlogin(values:any)
{
this.submittedlogin=true;

}  

loginUser()
{
  this._auth.loginUser(this.username)
}




}
