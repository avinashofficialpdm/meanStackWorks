import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { TransactionComponent } from '../transaction/transaction.component';

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

  withdraw(){
    let acno=this.acno
    let password=this.password
    let amount=this.amount

    const result=this.ds.withdraw(acno,password,amount)
    if(result){
      alert("Amount withdraw success and now balance is "+result)
    }else{
      
    }
  }

  deposite(){
    let acno=this.acno1
    let password=this.password1
    let amount=this.amount1

    const result =this.ds.deposit(acno,password,amount) 
    if(result){
        alert(amount+" is Success fully added and new balance is "+result)
        
    }else{

    }

  }
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

}
