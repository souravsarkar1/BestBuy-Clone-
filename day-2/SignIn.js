let signUpData=JSON.parse(localStorage.getItem("signUpLSData")) || [];
    // signIpData =[];
    document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
   // console.log("ratna");
    let obj ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
        phone : document.getElementById("phone").value,
    }
    //.push(obj);
    signUpData.forEach(element => {
        if(obj.name === ""|| obj.email === "" ||obj.password === "" || obj.phone === ""){
            alert("Wrong Input")
        }
        else if(element.name === obj.name && element.email === obj.email && element.password === obj.password && element.phone === obj.phone){
            alert("Login Successful");
        }
        else{
            alert("Wrong Input")
        }
    });
    });
    