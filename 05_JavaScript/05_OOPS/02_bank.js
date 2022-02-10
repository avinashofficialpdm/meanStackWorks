class bank{
    constructor(acNo,pName,pan,branch,phone,bal){
        this.acNo=acNo
        this.pName=pName
        this.pan=pan
        this.branch=branch
        this.phone=phone
        this.bal=bal
    }
    withdraw(amount){
        if(amount>this.bal){
           console.log( "Accountil athrem cash illada daridravaasi");
        }else{
            this.bal-=amount
            console.log(`${amount} rupees debited from your account . Now your balance is${this.bal}`);
        }
    }
    deposit(amount){
        this.bal+=amount
        console.log(`${amount} rupees deposited to your account now balance is ${this.bal}`);
    }
    balanceEnquiry(){
        console.log(`Your balance is ${this.bal}`);
    }
}
var ac1=new bank(123,"avinash",77,"pdm",555,900)
ac1.withdraw(1000000)
ac1.deposit(8758)
ac1.balanceEnquiry()