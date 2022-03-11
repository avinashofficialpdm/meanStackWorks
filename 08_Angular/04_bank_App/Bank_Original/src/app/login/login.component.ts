import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
 
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  login() {
    var accno = this.loginForm.value.acno
    var passs = this.loginForm.value.pswd
    let database = this.ds.database
    const data=this.ds.login(accno,passs)
    

    if(data){
      this.rout.navigateByUrl("dashboard")
    }


  }
  constructor(private rout: Router, private ds: DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

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