function signin()
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
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    Swal.fire({
        icon: "success",
        title: "Login",
        text: "Successfully Login",
        
      });
    // ...<!--redirecting to landing page-->
    window.location.href = "index.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode+errorMessage)
  });

}
}