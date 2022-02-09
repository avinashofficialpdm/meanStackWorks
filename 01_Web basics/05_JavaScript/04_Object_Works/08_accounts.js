var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

//   How may accounts ara there?
  console.log(accounts.length," account details are there");

//   print savings accounts
console.log("Savings accounts are");
accounts.filter(account=>account.ac_type=="savings").forEach(account=>console.log(account.acno))

// balance of account number 1000
accounts.find(account=>account.acno==1000).balance

// print phonepay transaction details
var allTrans = accounts.map(account=>account.transactions).flat()
console.log(allTrans);
var phonepay=allTrans.filter(trans=>trans.method=="phone-pay")
console.log(phonepay);

// print all transactions whose amount is greater than 500

var allTran = accounts.map(account=>account.transactions).flat()
allTran.filter(tran=>tran.amount>500).forEach(t=>console.log(t))


// credit transactions of accno 1002
var creditTrans = accounts.map(account=>account.transactions).flat().filter(trn=>trn.to==1002)
console.log(creditTrans);

// print highest balance account details

var highestBalanceAc = accounts.reduce((ac1,ac2)=>ac1.balance>ac2.balance?ac1:ac2)
console.log("Highest account details ",highestBalanceAc);

