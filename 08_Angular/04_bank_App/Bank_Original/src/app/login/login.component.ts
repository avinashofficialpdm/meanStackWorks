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
    if(this.loginForm.valid){
      this.ds.login(accno,passs)
      .subscribe((result:any)=>{
        if(result){
          console.log(result);
          
          localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
          localStorage.setItem("currentUname",JSON.stringify(result.currentUname))
          localStorage.setItem("token",JSON.stringify(result.token))
          alert("login successsssss")
          this.rout.navigateByUrl("dashboard")
        }
      },
      (result)=>{
        alert(result.error.message)
      })
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