import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tabRegister: Boolean = false;
  tabLogin: Boolean = true;
  regUsername: string = '';
  regEmail: string = '';
  regPassword: string = '';
  regConfirmPassword: string = '';
  loginUsername: string = '';
  loginPassword: string = '';


  ngOnInit(): void {
    
  }

  onTabRegisterClick(){
    this.tabLogin = false;
    this.tabRegister = true;
    console.log("Register click")
  }

  onTabLoginClick(){
    this.tabLogin = true;
    this.tabRegister = false;
    console.log("Login click")
  }

  onLogin(){

  }

  onRegister(){
    
  }
}
