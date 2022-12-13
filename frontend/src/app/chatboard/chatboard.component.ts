import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { AuthService } from '../auth.service';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-chatboard',
  templateUrl: './chatboard.component.html',
  styleUrls: ['./chatboard.component.css']
})
export class ChatboardComponent implements OnInit {

  searchInput = '';
  datas = '';
  currentUser = localStorage.getItem('username');
  
  //  console.log(currentUser);
  allUsers = new FormGroup({
    SearchName:new FormControl(this.searchInput,[
      Validators.required
    ])
  })
  name: any;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
  userName: any;
  msg = "";
  routeLink: string = "";
  userId: any;



  constructor(private service:AuthService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }    
  
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  
  get SearchName(){ return this.allUsers.controls.SearchName};
  search(values:any){
    alert("error "+ this.currentUser+ this.SearchName.value);
    
    this.service.search(values,this.currentUser)
    .subscribe((data)=>{
      console.log(data);
      var x = JSON.parse(JSON.stringify(data));
      console.log(x);
      if(x != ''){
        this.msg = "";
        console.log(x.username);

         this.service.getMsg(this.currentUser,x.username)
         .subscribe((data)=>{
console.log(data);
         });
          
         
       this.name = x.name;
      
      // this.userName = x[0].userName;
      // this.userId = x[0]._id;
      // this.routeLink = "/dashboard/chat/";
    }
      if(x == ''){
        this.msg = "No user found";
      }
    })
  }
  singleUser(event:any){
    console.log(event);
  }


  onSend() {


    
  }
 
}
