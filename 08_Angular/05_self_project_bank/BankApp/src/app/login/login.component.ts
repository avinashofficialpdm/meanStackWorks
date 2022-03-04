import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acno=""
  pswd=""

  database:any={
    1000:{uname:1000,password:1000},
    1001:{uname:1001,password:1001}
  }
  loginClicked(){
    var account=this.acno
    var pass=this.pswd
    if(account in this.database){
        if(this.database[account]["password"]==pass){
          this.rout.navigateByUrl("dashboard")
        }else{
          alert("Incorrect Password")
        }
    }else{
      alert("Account doesn't Exist")
    }

    
    
  }

  constructor(private rout:Router) { }

  ngOnInit(): void {
  }

}
