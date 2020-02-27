function addJavaScript()
{
  var first = document.forms["myForm"]["firstname"].value;
  if (first == "") {
    alert("All fields must be completed");
    return false;
  }
  var last = document.forms["myForm"]["lastname"].value;
  if (last == "") {
    alert("All fields must be completed");
    return false;
  }
  var email = document.forms["myForm"]["email"].value;
  if (email == "") {
   alert("Email must be filled out");
   return false;
  }
}
