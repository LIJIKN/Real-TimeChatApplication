import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AuthService } from './auth.service';
import { OTPComponent } from './otp/otp.component';
import { ChatboardComponent } from './chatboard/chatboard.component';
import { UsernameComponent } from './username/username.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    OTPComponent,
    ChatboardComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
