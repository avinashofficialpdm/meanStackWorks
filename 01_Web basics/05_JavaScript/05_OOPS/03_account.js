var account_details={
    1000:{account_number:1000,balance:3000,password:"userone",transactions:[]},
    1001:{account_number:1001,balance:2000,password:"usertwo",transactions:[]},
    1002:{account_number:1002,balance:4000,password:"userthree",transactions:[]},
    1003:{account_number:1003,balance:5000,password:"userfour",transactions:[]}
}

// q1 create a function validateAccountNumber(acno) if acno exist return true else return false
function validateAccountNumber(number){
    if(number in account_details){
        return true
    }else{
        return false
    }
}

// console.log(validateAccountNumber(1900));

// q2 create a function authenticate (acno,password) if given credential are correct . return access granted else return permission denied
function Authenticate(acno,pass){
    if(acno in account_details){
        if(pass==account_details[acno].password){
            console.log("Permission Granted");
        }else{
            console.log("permission Denied - Account number or Password is incorrect");
        }
    }
}

Authenticate(1001,"usertwo")