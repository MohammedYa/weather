const emailInput=document.getElementById("email")
const passInput=document.getElementById("pass")
const emailtext=document.getElementById("emailtext")
const passtext=document.getElementById("passtext")
const Loginbtn= document.getElementById("loginbtn")
const Msg= document.getElementById("Msg")
var users=[];
Loginbtn.addEventListener("click",function(){
    testEntries()
})
function testEntries(){
  users  =JSON.parse(localStorage.getItem("accounts")) 
  console.log(users)
  for(let i=0 ;i<users.length;i++){
    if (users[i].email==emailInput.value&&users[i].password==passInput.value) {
          Login()
          Loginbtn.removeAttribute("disabled")
          Msg.style.display="none" 

          correctEmail()
          correctpass()
    }
    else{
        Loginbtn.setAttribute("disabled","true")
        Msg.style.display="block" 
    }
  }
}
//email validtion

function correctEmail(){
     
        emailtext.style.display="none"
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
}
function uncorrectEmail(){
    Loginbtn.setAttribute("disabled","true")
    emailtext.style.display="block" 
    emailInput.classList.add("is-invalid")
    emailInput.classList.remove("is-valid")
}
emailInput.onkeyup=function(){
    var rejexmail=/@/
    if(rejexmail.test(emailInput.value)){
        if (passInput.value!="") {
            Loginbtn.removeAttribute("disabled")

        }
        correctEmail()
    }
    else{
        uncorrectEmail()
        
    }
    
}

//pass validation
function correctpass(){ 
passtext.style.display="none"
passInput.classList.add("is-valid")
passInput.classList.remove("is-invalid")
}
function uncorrectpass(){
Loginbtn.setAttribute("disabled","true")
passtext.style.display="block" 
passInput.classList.add("is-invalid")
passInput.classList.remove("is-valid")
}
passInput.onkeyup=function(){
var rejexpass=/^.{5,10}/
if(rejexpass.test(passInput.value)){
if (emailInput.value!="") {
    Loginbtn.removeAttribute("disabled")

}
  correctpass()
}
else{
 uncorrectpass()
}
    
}

function Login(){
    window.open('weather.html','_self')
}
//clear Inputs
function clear(){
    emailInput.value="";
    passInput.value="";
    create.setAttribute("disabled","true")
    passInput.classList.remove("is-invalid")
    passInput.classList.remove("is-valid")
    emailInput.classList.remove("is-invalid")
    emailInput.classList.remove("is-valid")
    

}