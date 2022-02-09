class bank{
    account_details={
        1000:{account_number:1000,balance:3000,password:"userone",transactions:[]},
        1001:{account_number:1001,balance:2000,password:"usertwo",transactions:[]},
        1002:{account_number:1002,balance:4000,password:"userthree",transactions:[]},
        1003:{account_number:1003,balance:5000,password:"userfour",transactions:[]}
    }
    validate(acno){
        return acno in this.account_details?true:false
    }
    authentication(acno,pass){
        if(this.validate(acno)){
            let pwd =this.account_details[acno].password
            if(pass==pwd){
                console.log("Permission Granted");
            }else{
                console.log("permission Denied - Account number or Password is incorrect");
            }
        }
    }
    getBalance(acno){
        if(this.validate(acno)){
            return this.account_details[acno].balance
        }
    }

    fundTransfer(fromAc,toAc,amount){
        if(this.validate(fromAc)&&this.validate(toAc)){
            let availBal = this.getBalance(fromAc)
            if(availBal>amount){
                this.account_details[fromAc].balance-=amount
                this.account_details[toAc].balance+=amount
                this.account_details[fromAc].transactions.push({to:toAc, Amount:amount})
                this.account_details[toAc].transactions.push({From:fromAc, Amount:amount})
            }else{
                console.log("Insufficient balance");
            }
            
        }
        else{
            console.log("account details are incorrect");
        }
    }
}

var obj = new bank()
console.log(obj.validate(1008));
obj.authentication(1000,"usertwo")
console.log(obj.getBalance(1000));
console.log(obj.account_details[1000]);
console.log(obj.account_details[1001]);
obj.fundTransfer(1000,1001,200)
obj.fundTransfer(1000,1001,600)

console.log(obj.account_details[1000]);
console.log(obj.account_details[1001]);