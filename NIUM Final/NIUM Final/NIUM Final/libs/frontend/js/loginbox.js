function validateForm() {
    var username = document.getElementById("username").value; // Get username input value
    var password = document.getElementById("password").value; // Get password input value

    // Perform validation
    if (username === "NIUM" && password === "qwer")    //User Name & Password                   
    {
        alert("Login successful!"); // Show success message     
        window.location.href="v2.html";                   
    }
    else if (username ==="2" && password === "qwe") //User Name & Password       
    {
        // alert("Login successfull Click on OK")  
        window.location.href="v2.html"; //Master Plan page
    }
     else {
        alert("Invalid username or password. Please try again."); // Show error message
    }
   
}
//

window.location.href = '#';
window.addEventListener('beforeunload', function (e) {
e.preventDefault();
e.returnValue = '';
});

// Redirect to the logout URL or trigger the logout action
      history.pushState(null, null, location.href);
        window.onpopstate = function () {
        logout();
        };
        function logout() {
        window.location.href = 'logout.php';
        }