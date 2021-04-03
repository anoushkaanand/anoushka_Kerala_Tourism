const indicator = document.querySelector(".indicator");
const input = document.querySelector("#password");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
const mail = document.querySelector("email");
const phone = document.querySelector("phone");
const rpass = document.querySelector("#rpsw");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
function repass()
{
  var rp = document.getElementById("rp");
  if(input.value == rpass.value)
  {
    rp.innerHTML = "Password Match";
    rp.style.color = "green"; 
    return true;
  }
  else
  {
    rp.innerHTML = "Password Do Not Match";
    rp.style.color = "red"; 
    return false;
  }
}
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
function trigger()
{
  if(input.value != ""){
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if(input.value.length <= 8 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
    if(input.value.length >= 8 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
    if(input.value.length >= 8 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
    if(no==1)
    {
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too week";
      text.classList.add("weak");
    }
    if(no==2)
    {
      medium.classList.add("active");
      text.textContent = "Your password is medium";
      text.classList.add("medium");
    }else
    {
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if(no==3)
    {
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
    }else
    {
      strong.classList.remove("active");
      text.classList.remove("strong");
    }
    showBtn.style.display = "block";
    showBtn.onclick = function()
    {
      if(input.type == "password")
      {
        input.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#23ad5c";
      }else
      {
        input.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#000";
      }
    }
  }
  else
  {
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }
}