const password = "Pass";

// AND -> && OR -> ||
if ((password.length >= 8 && password.length <=20) && !password.includes('@')){
    console.log("Password is of valid");
}else if(password.includes('@')){
    console.log("Password contains special characters");
}else if (password.length < 8 || password.length > 20){
    console.log("Password is not of valid length");
}else{
    console.log("Password is not of valid");
}