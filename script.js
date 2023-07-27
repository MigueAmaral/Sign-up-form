function getinputVal() {
    let passwordConf = passConf.value;
    let password = passwordInput.value;
    if (password != passwordConf){
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("passwordConfirm").style.border = "2px solid red";
        document.getElementById("match").style.opacity = "1";

    };

}

let passConf = document.getElementById("passwordConfirm")
let button = document.getElementById("button")
let passwordInput = document.getElementById("password");
button.addEventListener ("click", getinputVal)

