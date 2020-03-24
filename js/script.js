function addJavaScript()
{
  var email = document.forms["myForm"]["email"].value;
  if (email == "") {
   alert("Email Field Must Be Completed");
   return false;
  }

  var firstname = document.forms["myForm"]["firstname"].value;
  if (firstname == "") {
    alert("First Name Field Must Be Completed");
    return false;
  }

  var lastname = document.forms["myForm"]["lastname"].value;
  if (lastname == "") {
    alert("Last Name Field Must Be Completed");
    return false;
  }

  var phone = document.forms["myForm"]["email"].value;
  if (email == ""){
    alert("Phone Number Field Must Be Completed");
    return false;
  }

}
