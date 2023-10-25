import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getFirestore } from '@angular/fire/firestore';
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  db = getFirestore(initializeApp(environment.firebase));

  constructor(private fireAuth: AngularFireAuth) { }

  register(username: string, email: string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const uid = user?.uid;

      const usersCollection = collection(this.db, "Users");

      await setDoc(doc(usersCollection, uid), {
        username: username,
      })
      
      alert('Register Successful');
    })
    .catch((error) => {
      console.log(error);
      alert("Register Failed")
    })
  }
}
