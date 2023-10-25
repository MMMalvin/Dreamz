import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getFirestore } from '@angular/fire/firestore';
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  db = getFirestore(initializeApp(environment.firebase));

  constructor(private fireAuth: AngularFireAuth) { }

  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const  uid = user?.uid;
      
      alert("Login Successful, uid:" + uid);


    })
    .catch((error) => {
      console.log(error);
      alert('Login Failed')
    })

  }

  forgotPassword(email:string){
    this.fireAuth.sendPasswordResetEmail(email)
    .then(async () => {
      alert("Link Sent")
    })
    .catch((error) => {
      console.log(error);
      alert("Error sending link")
    })
  
  }
}


