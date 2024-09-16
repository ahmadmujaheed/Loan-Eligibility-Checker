
function validate(){
    // document.getElementById("myform").addEventListener("submit", function(e){
    //     e.preventDefault()

        let valid=true;
        let curr_bal=document.getElementById("current_balance").value;
        let loan_amt=document.getElementById("loan_amount").value
        let curr_err=document.getElementById("curr_err");
        let loan_err=document.getElementById("loan_err");
        
    
        
        if(curr_bal===""){
            curr_err.textContent="Current balnace cannot be empty"
            valid=false;
        }else{
            curr_err.textContent=""
        }
    
        
        if(loan_amt===""){
            loan_err.textContent="Loan amount cannot be empty"
            valid=false;
        }else{
            loan_err.textContent=""
        }
    
        if(!valid){
            // e.preventDefault()
            console.log("Error filling the form")
        }else{
            // e.preventDefault()
            getLoan()
            console.log("Form Submitted Correctly")
        }
    
    // });
}

function getLoan(){
    // document.getElementById("myform").addEventListener("submit", function(e){
    //     e.preventDefault()

const current_balance=parseFloat(document.getElementById("current_balance").value)
const loan_amount=parseFloat(document.getElementById("loan_amount").value)
const month_history=document.getElementById("month_history").value
const last_deposit_date=document.getElementById("last_deposit_date").value
const collection_date=document.getElementById("collection_date").value
const repayment_period=document.getElementById("repayment_period").value
const acc_type=document.getElementById("acc_type").value

points=0;

//check amount in account
if(loan_amount<current_balance){
    points+=10
}else if(loan_amount>current_balance){
    points=-10
}
        
// if(loan_amount<current_balance)
// points+=10;

// if(loan_amount>current_balance)
// points+=-10;


//check history
if(month_history==="paid"){
    points+=10;
}else if(month_history==="not_paid"){
    points+=0;
}

//check deposit date
if(last_deposit_date==="within"){
    points+=5;
}else if(last_deposit_date==="above" || last_deposit_date==="below"){
    points+=0
}

//check collection date
if(collection_date==="above"){
    points+=10;
}else if(collection_date==="within" || collection_date==="below"){
    points+=0
}

//check repayment date
if(repayment_period==="below"){
    points+=5;
}else if(repayment_period==="within" || repayment_period==="above"){
    points+=0
}

//check acc type
if (acc_type === "current"){
    points+= 10;
}else if (acc_type === "savings"){
    points+= 5;
}


//display
const result=document.getElementById("result")

if(points>30){
    result.innerHTML=`Congrats! You can get the loan.`;
}else if(points<30){
    result.innerHTML=`Sorry! You cannot apply for the loan`;
}

// });

}




//QUESTION:
// HOW CAN I APPLY THE VALIDATE FUNCTION?
// HOW CAN I VALIDATE THE SELECT BUTTON?
