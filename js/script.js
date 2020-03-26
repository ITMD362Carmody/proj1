$(document).ready(function(){
  $("#myForm").submit(function(){
    if (document.forms["myForm"]["email"].value){
      if (document.forms["myForm"]["firstname"].value){
        if (document.forms["myForm"]["lastname"].value){
          if (document.forms["myForm"]["phone"].value){
              alert("H4H4 Y0U'V3 B33N H4CK3D F00L");
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
