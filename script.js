
let password = document.getElementById("password");


function MyPassword() {
    let icon = document.getElementById("eyeicon");
    if (password.type === "password") {
    password.type = "text";
    icon.src = "images/eye-open.png";
    } else {
    password.type = "password";
    icon.src = "images/eye-close.png";
    }
}