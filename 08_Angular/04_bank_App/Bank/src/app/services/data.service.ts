import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  database: any = {
    1000: { acno: 1000, uname: "Neer", password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "Vyom", password: 1001, balance: 5000 },
    1002: { acno: 1002, uname: "Laisha", password: 1002, balance: 5000 }
  }
  constructor() { }

  register(acno: any, uname: any, pass: any) {
    let database = this.database

    if (acno in database) {

      // alert("Already exists")
      return false
    }
     else {
      database[acno] = {
        acno,
        uname,
        password:pass,
        balance: 0
      }
      return true
      // this.rout.navigateByUrl("")
    }
  }

  login(accno:any,passs:any){
    if (accno in this.database) {
      if (passs == this.database[accno]["password"]) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  deposit(acno:any,password:any,amount:any){
    let amt=parseInt(amount)
    let db=this.database
    if(acno in db){
      if(db[acno].password==password){
        db[acno].balance+=amt
        return db[acno].balance
        // console.log();
        
        
      }else{
        alert("Password is incorrect")
        return false
      }
    }else{
      alert("User doesn't Exist")
      return false
    }
  }


  withdraw(acno:any,password:any,amount:any){
    let amt=parseInt(amount)
    let db=this.database
    if(acno in db){
        if(db[acno].password==password){
          if(db[acno].balance>amt){
            db[acno].balance-=amt
            return db[acno].balance
          }else{
            alert("Insufficient balance")
            return false
          }
        
        }else{
          alert("Password is incorrect")
          return false
        }
      
    }else{
      alert("Account doesn't Exist")
      return false
    }
  }
}
