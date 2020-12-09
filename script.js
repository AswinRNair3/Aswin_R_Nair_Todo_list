let us= document.getElementById("us");
let pwd= document.getElementById("pwd");
let cpwd= document.getElementById("cpwd");
let strength= document.getElementById("strength");




function pass()
{ 
  if(us.value=="admin" && pwd.value=="12345")
    {
    strength.innerHTML="Success";
    strength.style.color="green";
    strength.style.border="2px solid green";
    strength.style.borderRadius="24px";
    strength.style.padding="7px";
    
    
    return true;
    }
  else if(pwd.value.length<5)
    { strength.innerHTML="Password too short";
      strength.style.color="red";
      strength.style.border="2px solid red";
      strength.style.borderRadius="24px";
      strength.style.padding="7px";
      return false;
    }

  else
  {strength.innerHTML="Incorrect Password or Username";
   strength.style.color="red";
   strength.style.border="2px solid red";
   strength.style.borderRadius="24px";
   strength.style.padding="7px";
   return false;
  }
}



