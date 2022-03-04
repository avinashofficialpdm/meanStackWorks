import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { deepStrictEqual } from 'assert';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  password=""

  constructor(private ds:DataService,private rout:Router) { }

  
  
  ngOnInit(): void {
  }

  register(){
    var acno=this.acno
    var uname=this.uname
    var pass=this.password
    
    

    const result=this.ds.register(acno,uname,pass)

    if(result){
      alert("Added successfully")
      this.rout.navigateByUrl("")
    }
    else{
      alert("Already exist")
    }
    
  }
}
