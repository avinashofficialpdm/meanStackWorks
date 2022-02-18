function addAccount(){
    let no = acNo.value
    let phoneNumber = phone.value
    let accType = Type.value
    let emailId = email.value
    let password = pass.value

    let account = {
        no,phoneNumber,accType,emailId,password
    }

    localStorage.setItem(no,JSON.stringify(account))
}

function login(){
    let currAcNo = acNumber.value
    let currPass = passw.value

    if(currAcNo in localStorage){
       let currAccountData= localStorage.getItem(currAcNo)
       currAccountData = JSON.parse(currAccountData)
        console.log(currAccountData);
        if(currAccountData.password ==currPass){
            alert("success")
        }else{
            alert("Password is incorrect")
        }
    }else{
        alert("This account number doesn't exists")
    }

}