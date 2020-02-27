function addJavaScript()
{
  var email = document.forms["myForm"]["email"].value;
  if (email == "") {
   alert("Email field must be completed");
   return false;
  }
}
