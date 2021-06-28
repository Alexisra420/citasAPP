import { Injectable } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/auth";
import { rejects } from 'assert';
import { promise } from 'protractor';
import { Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router : Router) { }


  login(email:string, password:string){

    return new Promise((resolve,rejects)=>{
      this.AFauth.signInWithEmailAndPassword(email,password).then(user =>{
        resolve(user)
         }).catch(err => rejects(err));
    });

 }
 register(email: string,password:string){
   return new Promise((resolve,react)=>{
    this.AFauth.createUserWithEmailAndPassword(email,password).then(res =>{
        resolve(res)
    }).catch(err => rejects(err))
   })
  

 }
  
 
}
