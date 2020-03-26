function addJavaScript()
{
  $(document).ready(function(){
  $("#info_form").submit(function(){
    if (document.forms["myForm"]["email"].value){
      if (document.forms["myForm"]["firstname"].value){
        if (document.forms["myForm"]["lastname"].value){
          if (document.forms["myForm"]["phone"].value){
              alert("Your info has been recorded");
            } else {
            alert("Phone Number Field Must Be Completed");
            return false;
            }
          } else {
          alert("Last Name Field Must Be Completed");
          return false;
        }
      } else {
        alert("First Name Must Be Completed");
        return false;
      }
    } else {
      alert("Email Field Must Be Completed");
      return false;
    }
  });
});
}
