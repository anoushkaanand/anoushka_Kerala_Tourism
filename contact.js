const mail = document.querySelector("email");
const phone = document.querySelector("phone");

function phonenumber(input1)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var en = document.getElementById("en");
  if(input1.value.match(phoneno))
  {
    document.form1.phone.focus();
    en.innerHTML = "Valid Phone number";
    en.style.color = "green";
    return true;
  }
  else
  {
    document.form1.phone.focus();
    en.innerHTML = "Invalid Phone number";
    en.style.color = "red";
    return false;
    }
  }

function ValidateEmail(input) 
{
  var validRegex = /^[a-zA-Z0-9\.-]+@[a-zA-Z0-9\-]+.([a-z]{2,3})((.[a-z]{2,3})?)*$/;
  var error = document.getElementById("error");
  if (input.value.match(validRegex)) 
  {
    document.form1.email.focus();
    error.innerHTML = "Valid Email";
    error.style.color = "green";
    return true;
  }
  else {
    document.form1.email.focus();
    error.innerHTML = "Invalid Email";
    error.style.color = "red";
    return false;
  }
}