import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:5000/api/user';

loginUser(user:any){
  let url = `${this.baseUrl}/login`;
    return this.http.post(url,{user});
  // return this.http.post("http://localhost:5000/login",user)
}
  constructor(private http:HttpClient) { }


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


}

