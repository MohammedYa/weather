const nameInput=document.getElementById("name")
const emailInput=document.getElementById("email")
const passInput=document.getElementById("pass")
const create= document.getElementById("btncreate")
const nametext=document.getElementById("nametext")
const emailtext=document.getElementById("emailtext")
const passtext=document.getElementById("passtext")
const emailExist=document.getElementById("emailExist")
let users;
if(users!=null){
    users=JSON.parse(localStorage.getItem("accounts")) 
}
else{
  users  =[];

}

create.addEventListener('click',function(){
    if(Exist()){
     Exist();
    }else{   
        adduser(); 
        
        clear();
     
    }
   
})

//adduser


function adduser(){

    let user={
    name:nameInput.value,
    email:emailInput.value,
    password:passInput.value


    }
    users.push(user)
    localStorage.setItem("accounts",JSON.stringify(users))
window.open('login.html', '_self')
    
}
/* validation in registeration card*/
nameInput.onkeyup=function(){
    var rejexName=/[a-zA-Z]{3}$/
    if(rejexName.test(nameInput.value)){
        if (emailInput.value!=""&&passInput.value!="") {
            create.removeAttribute("disabled")
 
        }
        nametext.style.display="none"
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")

    }
    else{
        create.setAttribute("disabled","true")
        nametext.style.display="block"
        nameInput.classList.add("is-invalid")
        nameInput.classList.remove("is-valid")

    }
    
}



emailInput.onkeyup=function(){
    var rejexmail=/@/
    if(rejexmail.test(emailInput.value)){
        if (passInput.value!=""&&nameInput.value!="") {
            create.removeAttribute("disabled")

        }
        emailtext.style.display="none"
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
    }
    else{
        create.setAttribute("disabled","true")
        emailtext.style.display="block" 
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
        
    }
    
}


passInput.onkeyup=function(){
var rejexpass=/^.{5,10}/
if(rejexpass.test(passInput.value)){
    if (emailInput.value!=""&&nameInput.value!="") {
       create.removeAttribute("disabled")
 
    }
passtext.style.display="none"
passInput.classList.add("is-valid")
passInput.classList.remove("is-invalid")
}
else{
create.setAttribute("disabled","true")
passtext.style.display="block" 
passInput.classList.add("is-invalid")
passInput.classList.remove("is-valid")
}
    
}


// email thair Exist
function Exist(){
  
 
 for (let x = 0; x < users.length; x++) {

    if (users[x].email.toLowerCase()==emailInput.value.toLowerCase()  ) {
        create.setAttribute("disabled","true")
        emailExist.style.display="block" 

        return true 
    }
    else{
       emailExist.style.display="none" 

        return false
    }
 }
  
}

//clear Inputs
function clear(){
    nameInput.value="";
    emailInput.value="";
    passInput.value="";
    create.setAttribute("disabled","true")
    passInput.classList.remove("is-invalid")
    passInput.classList.remove("is-valid")
    emailInput.classList.remove("is-invalid")
    emailInput.classList.remove("is-valid")
    nameInput.classList.remove("is-invalid")
    nameInput.classList.remove("is-valid")

}
