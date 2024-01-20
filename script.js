function reg(){
    let register=document.getElementById('div')
    register.innerHTML=` <center>
    <div style="border-style:ridge; width: 400px; padding: 30px; border-radius: 30px; margin-top: 25%; padding-top: 10%; background-image: url(https://wallpapercave.com/wp/wp6615469.png); background-size: cover; background-position: center;">
    <input id="input"  type="text" class="form-control" placeholder="enter your name">
    <input style='width: 300px;
    margin-bottom: 10px;    ' id="email"  type="email" class="form-control" placeholder="enter your mail id">
    <input style='width: 300px;
    margin-bottom: 10px;    ' id="regpas" type="password" class="form-control" placeholder="password">
    <button onclick=signUp() id="login" class="btn btn-primary">Sign Up</button> <br>

   

</div>
    </center>
   
    `
}
function signUp(){
    email=email.value
    pswd=regpas.value
    
    user={
        email,pswd
    }
    if(email in localStorage){
        alert('Email id already exist')
    }
    else{
        localStorage.setItem(email,JSON.stringify(user))
        alert('Registration succesfully')
        window.location='./index.html'
    }


}
function Login(){
    email=loginUser.value
    pswd=loginpas.value
    if(email in localStorage){
        user=JSON.parse(localStorage.getItem(email))
        if(pswd == user.pswd){
            alert('Login succesfully')
            window.location='./budget.html'
        }
        else{
            alert('Incorrect password')
        }
    }
    else{
        alert('invalid email id')
    }
}


function logout(){
    window.location ="./index.html"
}

function enterBudget(){
    const budget = document.getElementById("budget").value;
    inner1.innerHTML =`<div class="budg">
    BUDGET:<h2>${budget}<h2/>
                        <div>`
    
}

let expense_record =[];
var exp=0;

function enterData(date='N/A',event='N/A', amount='N/A')  {
    const budget = document.getElementById("budget").value;
    var date = document.getElementById("date").value;
    console.log(date);
    var event = document.getElementById("event").value;
    console.log(event);
    var amount = document.getElementById("amount").value;
    console.log(amount);

    if(date==""||event==""||amount==""){
        alert("Please fill all feilds");
    }
    else{
      exp = Number(exp)+Number(amount);
      inner2.innerHTML =`<div class="bu">
      TOTAL EXPENSE:<h2>${exp}</h2>
      <div>`
      bala = Number(budget)-exp;
      inner3.innerHTML =`<div class="bu">
      CASH BALANCE:<h2>${bala}</h2>
      <div>`
      tot.innerHTML = `<div>Total Amount: ${exp}</div>`
      expense_record.push({date,event,amount})
      renderTable();
       }
    }
    

  function renderTable(){
    if(expense_record.length==1){
        expense_record.forEach((expense)=>{
            table_style.innerHTML+=`<tr >
                <td>${expense.date}</td>
                <td>${expense.event}</td>
                <td>${expense.amount}</td>
                
            </tr>`
        });
    }
    else{
        expense_record.reduceRight((expense)=>{
            table_style.innerHTML+=`<tr >
                <td>${expense.date}</td>
                <td>${expense.event}</td>
                <td>${expense.amount}</td>
            </tr>`
        });
    }
}

// // function income(){
// //     amnt=document.getElementById('incAmount').value
// //     if(amnt<=0){
// //         alert('value cant be zero or negative')
// //     }
// //    else{
// //     budget.innerHTML=`<div style="width: 400px; border-style: ridge;
// //     border-radius: 50px; margin-top: 50%; margin-left: 5%; background-color: rgba(0, 0, 0, 0.358);">
// //        <h2 style="color: white; font-size:30px">BUDGET</h2>
// //        <p>_______</p>
// //        <h2 style='font-size:40px'>${amnt}/-</h2>


// //        <div class="row">
// //            <div id='total' class="col-6">
               
               

// //            </div>
// //            <div id='balance' class="col-6">
               

// //            </div>
// //        </div>
// //    </div>`
// //    alert('amount succesfully added')



// //    }

// // }
// // let expense_record =[];
// // var exp=0;

// // function expense(){
// //     const expna=document.getElementById('expn').value
// //     const date=document.getElementById('date').value
// //     const desccription=document.getElementById('desc').value

// //     if(expna=='' || date=='' || desccription==''){
// //        alert('enter all field')
// //     }
// //     else{
// //         exp=Number(exp)+Number(expna)
// //     total=document.getElementById('total')
// //     total.innerHTML=`<h2>Total Expense</h2>
// //     <p>_______________</p>
// //     <h2>${exp}/-</h2>`
// //     bala=Number(amnt)-exp
// //     balance.innerHTML=`<h2>Budget Balance</h2>
// //     <p>_______________</p>
// //     <h2>${bala}/-</h2>`

    
// //     document.getElementById('data').innerHTML=`<tr>
// //     <td>${date}</td></tr>
// //     <td>${exp}</td></tr>
// //     <td>${}</td></tr>`

// }


