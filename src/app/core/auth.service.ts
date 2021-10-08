import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import * as firebaseAuth from "firebase/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  login() {
    this.afAuth.signInWithPopup(new firebaseAuth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
  }
}
