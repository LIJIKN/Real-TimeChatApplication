import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
username="";
User_form  = new FormGroup({
  nickname : new FormControl(this.username,[Validators.required,]),

})
  constructor(private router:Router,private service:AuthService) { }

  ngOnInit(): void {
  }
  get nickname(){return this.User_form.controls.nickname;}
  onSubmitNAME(values:any){
    

  }

}
