import { Component, OnInit } from '@angular/core';

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
    alert("Withdraw clicked")
  }

  deposite(){
    alert("Deposit clicked")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
