import { LoginService } from './../Services/LoginService/login.service';
import { RegisterService } from './../Services/RegisterService/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private registerService: RegisterService, private loginService: LoginService){}

  tabRegister: Boolean = false;
  tabLogin: Boolean = true;
  tabForgotPassword: Boolean = false;
  regUsername: string = '';
  regEmail: string = '';
  regPassword: string = '';
  regConfirmPassword: string = '';
  loginEmail: string = '';
  loginPassword: string = '';
  forgotEmail: string = '';
  loginSuccess: Boolean = true;


  ngOnInit(): void {}

  onTabRegisterClick(){
    this.tabLogin = false;
    this.tabRegister = true;
    this.tabForgotPassword = false;
    console.log("Register click")
  }

  onTabLoginClick(){
    this.tabLogin = true;
    this.tabRegister = false;
    this.tabForgotPassword = false;
    console.log("Login click")
  }

  onForgotPasswordClick(){
    this.tabForgotPassword = true;
    this.tabLogin = false;
    this.tabRegister = false;
  }

  onLogin(){
    if(this.loginEmail == "" || this.loginPassword == ""){
      alert("Please enter all details");
    }
    else{
      this.loginService.login(this.loginEmail, this.loginPassword);
      this.loginSuccess = true;
    }
  }

  onRegister(){
    if(this.regUsername == "" || this.regEmail == "" || this.regPassword == "" || this.regConfirmPassword == ""){
      alert("Please enter all details");
    }
    else{
      if(this.regPassword !== this.regConfirmPassword){
        alert("Passwords do not match");
      }
      else{
        this.registerService.register(this.regUsername, this.regEmail, this.regPassword);
        this.loginSuccess = true;
      }
    }
  }

  onResetPassword(){
    if(this.forgotEmail == ""){
      alert("Please enter all details");
    }
    else{
      this.loginService.forgotPassword(this.forgotEmail);
    }
  }
}
