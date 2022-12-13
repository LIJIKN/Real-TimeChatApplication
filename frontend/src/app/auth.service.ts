import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:5000/api/user';


  constructor(private http:HttpClient) { }
  

  loginUser(user:any){
    let url = `${this.baseUrl}/login`;
      return this.http.post(url,{user});
    // return this.http.post("http://localhost:5000/login",user)
  }
  loggedin(){
    return !!localStorage.getItem('username');
  }


  signup = (item:any,otp:any)=>{
    let url = `${this.baseUrl}/signup/` + otp;
    return this.http.post<any>(url,{item});
  }
  sendOTP = (item:any,otp:any)=>{
    let url = `${this.baseUrl}/sendOTP/`+ otp;
    return this.http.post(url,{item});
  }

  getUserById(userId:any){
    let url = `${this.baseUrl}/getUserById/`+ userId;
    return this.http.get(url);
  }

  verifyOTP(item:any){
    let url = `${this.baseUrl}/verifyOTP`;
    return this.http.put(url,{item});
  }

  nickname( item:any,userId:any){
    let url = `${this.baseUrl}/savename/`+ userId;
    return this.http.put(url,{item});

  }

  checkname(name:any)
  {
    let url = `${this.baseUrl}/checkName/`+ name;
    return this.http.get(url);

  }

  // search = (item:any)=>{
  //   let url = `${this.baseUrl}/search/`;
  //   return this.http.post<any>(url,{item});
  // }
  // search = (values:any,username:any) => {
  //   let url = `${this.baseUrl}/search/`+username;
  //   return this.http.post(url,{values});
  // }

  search = (values:any,username:any) => {
    let url = `${this.baseUrl}/searchUser/`+username;
    return this.http.post(url,{values});
  }
  sendMessage = (values:any,username:any,currentuser:any) => {
    let url = 'http://localhost:5000/sendMessage/'+username+'/'+currentuser;
    return this.http.post(url,values);
  }

  getMsg = (currentuser:any,username:any) =>{
    let url = `${this.baseUrl}/getMsg/`+currentuser+`/`+username;
    return this.http.get(url);
  }
  // usermessage

}

