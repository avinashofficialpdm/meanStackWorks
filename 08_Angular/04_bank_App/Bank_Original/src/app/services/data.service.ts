import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentAcno:any
  currentUname:any

  database: any = {
    1000: { acno: 1000, uname: "Neer", password: 1000, balance: 5000,transaction:[] },
    1001: { acno: 1001, uname: "Vyom", password: 1001, balance: 5000,transaction:[]  },
    1002: { acno: 1002, uname: "Laisha", password: 1002, balance: 5000,transaction:[] }
  }
  constructor(private http:HttpClient) {
    // this.getData()
   }


   
  
  setData(){
    localStorage.setItem("database",JSON.stringify(this.database))
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
    if(this.currentUname){
      localStorage.setItem("currentUname",JSON.stringify(this.currentUname))
    }
  }

  getData(){
    if(localStorage.getItem("database")){
      this.database=JSON.parse(localStorage.getItem("database") ||"")
    }
    if(localStorage.getItem("currentAcno")){
      this.currentAcno=JSON.parse(localStorage.getItem("currentAcno") ||"")
    }
    if(localStorage.getItem("currentUname")){
      this.currentUname=JSON.parse(localStorage.getItem("currentUname") ||"")
    }
  }


  getOptions(){
    const token = JSON.parse(localStorage.getItem("token") || '')

    let headers = new HttpHeaders

    if(token){
     headers= headers.append("x-access-token",token)
      options.headers=headers
    }
    return options
  }
  register(acno: any, uname: any, password: any) {

    const data={
      acno,uname,password
    }

    return this.http.post('http://localhost:3000/register',data)
    // let database = this.database

    // if (acno in database) {

    //   // alert("Already exists")
    //   return false
    // }
    //  else {
    //   database[acno] = {
    //     acno,
    //     uname,
    //     password:pass,
    //     balance: 0,
    //     transaction:[]
    //   }
    //   this.setData()
    //   return true
    //   // this.rout.navigateByUrl("")
    // }
  }

  login(accno:any,passs:any){
 
    const data={
      accno,passs
    }
    return this.http.post('http://localhost:3000/login',data)
    // if (accno in this.database) {
    //   if (passs == this.database[accno]["password"]) {
    //     this.currentAcno=accno
    //     this.currentUname=this.database[accno].uname
    //     this.setData()
    //     return true
    //   } else {
    //     alert("Incorrect password")
    //     return false
    //   }
    // } else {
    //   alert("Accound doesn't exist")
    //   return false
    // }
  }

  deposit(acno:any,password:any,amt:any){  
    // req body
    const data = {
      acno,password,amt
    }

    // deposite API
    return this.http.post('http://localhost:3000/deposit',data,this.getOptions())


    // let amt=parseInt(amount)
    // let db=this.database
    // if(acno in db){
    //   if(db[acno].password==password){
    //     db[acno].balance+=amt
    //     db[acno].transaction.push({
    //       amount:amt,
    //       type:"Deposit"
    //     })
    //     this.setData()
    //     return db[acno].balance
    //     // console.log();
        
        
    //   }else{
    //     alert("Password is incorrect")
    //     return false
    //   }
    // }else{
    //   alert("User doesn't Exist")
    //   return false
    // }
  }


  withdraw(acno:any,password:any,amount:any){
    let amt=parseInt(amount)
    let db=this.database
    if(acno in db){
        if(db[acno].password==password){
          if(db[acno].balance>amt){
            db[acno].balance-=amt
            db[acno].transaction.push({
              amount:amt,
              type:"Withdraw"
            })
            this.setData()
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

  getTransaction(acno:any){
    return this.database[acno].transaction
  }
}
