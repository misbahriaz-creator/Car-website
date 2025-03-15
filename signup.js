function signup()
{
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    if(email==''||password=='')
    {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Fill the inputs",
          });

    }
    else{
      // alert(email+password)
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    
    Swal.fire({
        icon: "success",
        title: "Signup",
        text: "Successfully account has been created",
        
      });
     
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorCode + errorMessage)
  });
    }
}