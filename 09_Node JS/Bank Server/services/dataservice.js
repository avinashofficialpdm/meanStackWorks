const jwt = require("jsonwebtoken")
const db =require("./db")

database = {
  1000: { acno: 1000, uname: "Neer", password: 1000, balance: 5000, transaction: [] },
  1001: { acno: 1001, uname: "Vyom", password: 1001, balance: 5000, transaction: [] },
  1002: { acno: 1002, uname: "Laisha", password: 1002, balance: 5000, transaction: [] }
}

const register = (acno, uname, pass) => {


  return db.User.findOne({acno:acno}).then(uuser=>{
    if(uuser){
      return{
      statusCode: 411,
      status: false,
      message: "User already exists"
      }
    }else{
      const newUser= new db.User({
        acno,
        uname,
        password: pass,
        balance: 0,
        transaction: []
      })
      newUser.save()
      return {
        statusCode: 200,
        status: true,
        message: "Registered successfully"
      }
    }
  })
  // if (acno in database) {
    // return {
    //   statusCode: 411,
    //   status: false,
    //   message: "User already exists"
    // }
  // }
  // else {
    // database[acno] = {
    //   acno,
    //   uname,
    //   password: pass,
    //   balance: 0,
    //   transaction: []
    // }
    // return {
    //   statusCode: 200,
    //   status: true,
    //   message: "Registered successfully"
    // }
  // }
}

const login = (accno, passs) => {

  return db.User.findOne({accno,passs})
  .then(user=>{
    if(user){
      currentAcno = accno
      currentUname =user.uname
      const token=jwt.sign({
        currentAcno:accno
      },'superkey123')
      console.log(currentAcno);

      return {
        statusCode: 200,
        status: true,
        message: "Login success",
        currentAcno,
        currentUname,
        token
      }
    }else{
      return {
        statusCode: 422,
        status: false,
        message: "Incorrect password"
      }
    }
  })
  // if (accno in database) {
  //   if (passs == database[accno]["password"]) {
      // currentAcno = accno
      // currentUname = database[accno].uname
      // const token=jwt.sign({
      //   currentAcno:accno
      // },'superkey123')
      // return {
      //   statusCode: 200,
      //   status: true,
      //   message: "Login success",
      //   currentAcno,
      //   currentUname,
      //   token
      // }
  //   } else {
      // return {
      //   statusCode: 422,
      //   status: false,
      //   message: "Incorrect password"
      // }
  //   }
  // } else {
  //   return {
  //     statusCode: 411,
  //     status: false,
  //     message: "Account not found"
  //   }
  // }
}

const deposit = (acno, password, amt) => {

  var amount = parseInt(amt)

  //asynchronous
  return db.User.findOne({acno,password})
  .then(user=>{
    if(user){
      user.balance+=amount
      user.transaction.push({
        amount:amount,
        type:"CREDIT"
      })
      user.save()
      return {
        statusCode: 200,
        status: true,
        message: amount + "Successfully deposited...And new balance is" + user.balance
  
      }
    }
    else {
      return {
        statusCode: 422,
        status: false,
        message: "Incorrect Password/Account Number"
      }
     }
   })
  // let amt = parseInt(amount)
  // let db = database
  // if (acno in db) {
  //   if (db[acno].password == password) {
  //     db[acno].balance += amt
  //     db[acno].transaction.push({
  //       amount: amt,
  //       type: "Deposit"
  //     })
  //     return {
  //       statusCode: 200,
  //       status: true,
  //       message: amt + " is Success fully added and new balance is" + db[acno].balance
  //     }
  //     // console.log();


  //   } else {
  //     return {
  //       statusCode: 422,
  //       status: false,
  //       message: "Incorrect password"
  //     }
  //   }
  // } else {
  //   return {
  //     statusCode: 411,
  //     status: false,
  //     message: "Account not found"
  //   }
  // }
}

const withdraw=(req,acno,password,amount)=>{
  let amt=parseInt(amount)
  let db=database
  var currentAcno=req.currentAcno
  if(acno in db){
      if(db[acno].password==password){
        if(currentAcno==acno){
          if(db[acno].balance>=amt){
            db[acno].balance-=amt
            db[acno].transaction.push({
              amount:amt,
              type:"Withdraw"
            })
            return {
              statusCode: 200,
              status: true,
              message: amt + " is  withdrawed Success fully and new balance is" + db[acno].balance
            }
          }else{
            return  {
              statusCode: 422,
              status: false,
              message: "Insufficient balance"
            }
          }
        
        }else{
          return {
            statusCode: 422,
            status: false,
            message: "Permission denied"
          }
        }
      }else{
        return {
          statusCode: 422,
          status: false,
          message: "Incorrect password"
        }
      }
    
  }else{
    return {
      statusCode: 411,
      status: false,
      message: "Account not found"
    }
  }
}

const transaction=(acno)=>{
  if(acno in database){
    return {
      statusCode: 422,
      status: false,
      transactions: database[acno].transaction
    }
  }else{
    return {
      statusCode: 411,
      status: false,
      message: "Account not found"
    }
  }
}
  

module.exports = {
  register, login, deposit,withdraw,transaction
}