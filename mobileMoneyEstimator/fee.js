// Declaring the function

function estimateTransactionFee(amountToSend) {

// NB: FOR BROSWER PROMPT PURPOSES UNCOMMENT LINE (6) AND COMMENT OUT LINE (9) AND REMOVE THE PARAMETER
//   let amountToSend = Number(prompt("Enter the amount you wish to send:"));


  amountToSend = Number(amountToSend)

// Simplified Fee structure
    
  const minimumFee = 10; //KES
  const maximumFee = 70; //KES


  const transactionFee = 0.015 * amountToSend;
  const totalAmountDebited = amountToSend + transactionFee;



//   Conditionals to follow rules
  if (transactionFee < minimumFee || transactionFee > maximumFee) {
    console.log("This transaction cannot be performed");
  } else {
    console.log(`The total amount to be debited is ${totalAmountDebited} KES`);
  }


}
estimateTransactionFee();



