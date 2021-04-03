function ValidateEmail(input) {
  var validRegex = /^[a-zA-Z0-9\.-]+@[a-zA-Z0-9\-]+.([a-z]{2,3})((.[a-z]{2,3})?)*$/;
  var error = document.getElementById("error");
  if (input.value.match(validRegex)) {
    document.form1.text1.focus();
    error.innerHTML = "valid email";
    error.style.color = "green";
    return true;
  }
  else {
    document.form1.text1.focus();
    error.innerHTML = "Invalid Email";
    error.style.color = "red";
    return false;
  }
}
