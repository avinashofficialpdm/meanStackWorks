import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  amount=""
  acno=""
  password=""

  amount1=""
  acno1=""
  password1=""

  user:any
  lDate:any
  deleteAcno:any


  withdrawForm=this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  depositForm=this.fb.group({
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  withdraw(){
    let acno=this.withdrawForm.value.acno
    let password=this.withdrawForm.value.pswd
    let amount=this.withdrawForm.value.amount

    if(this.withdrawForm.valid){
      const result=this.ds.withdraw(acno,password,amount)
      if(result){
        alert("Amount withdraw success and now balance is "+result)
      }else{
        
      }
    }else{
      alert("invalid form")
    }
    
  }

  deposite(){
    let acno=this.depositForm.value.acno1
    let password=this.depositForm.value.password1
    let amount=this.depositForm.value.amount1

    const result =this.ds.deposit(acno,password,amount) 
    if(result){
        alert(amount+" is Success fully added and new balance is "+result)
    }else{

    }

  }
  constructor(private ds:DataService,private fb:FormBuilder,private rout:Router) {
    this.user=this.ds.currentUname

    this.lDate=new Date()
   }

   logout(){
     localStorage.removeItem("currentAcno")
     localStorage.removeItem("currentUname")
    this.rout.navigateByUrl("")
   }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      this.rout.navigateByUrl("")
      alert("Please Login")
      
    }
  }

  cancel(){
    this.deleteAcno=""
  }
  deleteAccount(){
    this.deleteAcno=JSON.parse(localStorage.getItem("currentAcno")  || '')
  }
  delete(event:any){
    alert("Delete account "+event+" from parent")
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUname")
    this.rout.navigateByUrl("")

  }
}
