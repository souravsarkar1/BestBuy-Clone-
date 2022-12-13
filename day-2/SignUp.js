let signUpData=JSON.parse(localStorage.getItem("signUpLSData")) || [];
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
   // console.log("ratna");
    let obj ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
        phone : document.getElementById("phone").value,
    }
   let flagEmail = false;
   let flagPhone = false;
   for(let i = 0;i<signUpData.length;i++){
    if(signUpData[i].email===obj.email){
        flagEmail=true;
        break;
    }
    if(signUpData[i].phone===obj.phone){
        flagPhone=true;
        break;
    }

   }
    if(obj.name==="" || obj.name === "" || obj.password==="" || obj.phone === ""){
        alert("Fill all the fields")
    }else if( flagEmail===true){
        alert("This email is already taken");
    }
    else if( flagPhone===true){
        alert("This phone is already taken");
    }
    else{
    localStorage.setItem("signUpLSData",JSON.stringify(signUpData));
    }

})