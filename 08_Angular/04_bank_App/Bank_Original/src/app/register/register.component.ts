import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private ds:DataService,private rout:Router,private fb:FormBuilder) { }

  RegisterForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]]
  })
  
  ngOnInit(): void {
  }

  register(){
    var acno=this.RegisterForm.value.acno
    var uname=this.RegisterForm.value.uname
    var pass=this.RegisterForm.value.pswd
    
    if(this.RegisterForm.valid){
      const result=this.ds.register(acno,uname,pass)

      if(result){
        alert("Added successfully")
        this.rout.navigateByUrl("")
      }
      else{
        alert("Already exist")
      }
    }else{
      alert("Invalid username")
    }

    
    
  }
}
