import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  numb = 100
  accno = "enter account NUmber"
  acno = ""
  password = ""
  database: any = {
    1000: { acno: 1000, uname: "Neer", password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "Vyom", password: 1001, balance: 5000 },
    1002: { acno: 1002, uname: "Laisha", password: 1002, balance: 5000 }
  }


  // acnoChange(ev: any) {
  //   this.accountNumber = ev.target.value
  // }

  // passChange(ev: any) {
  //   this.password = ev.target.value
  // }

  // login(a:any,p:any) {
  //   var acno = a.value
  //   var pass = p.value
  //   let database = this.database
  //   if (acno in database) {
  //     if (pass == database[acno]["password"]) {
  //       alert("login success")
  //     } else {
  //       alert("Password incorrect")
  //     }
  //   } else {
  //     alert("Account doesn't exist")
  //   }


  // }
  login() {
    var acno = this.acno
    var pass = this.password
    let database = this.database
    if (acno in database) {
      if (pass == database[acno]["password"]) {
        alert("login success")
      } else {
        alert("Password incorrect")
      }
    } else {
      alert("Account doesn't exist")
    }


  }
  constructor() { }

  ngOnInit(): void {
  }

}
