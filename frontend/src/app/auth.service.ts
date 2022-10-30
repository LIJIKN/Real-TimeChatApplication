import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUri: string = 'http://localhost:5000/api/user';

loginUser(user:any){
  let url = `${this.baseUri}/login`;
    return this.http.post(url,{user});
  // return this.http.post("http://localhost:5000/login",user)
}
  constructor(private http:HttpClient) { }


  signup = (item:any)=>{
    let url = `${this.baseUri}/signup`;
    this.http.post(url,{item});
  }

}

