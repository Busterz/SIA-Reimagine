function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "user" && password == "123")
        {
            alert("Login Successful");
            window.location = 'home.html';
            return false;
        }
    else if(username == "admin" && password == "123")
        {
            alert("Login Successful");
            window.location = 'home-admin.html';
            return false;
        }
    else
        {
            alert("Incorrect Credentials");
            return false;
        }
}

