const validation = (userName, email, emailValidation, password, passwordValidation) => {
    const items = { ...localStorage };

    if (userName === "" || email === "" || emailValidation === "" || password === "" || passwordValidation === "") {
        console.log("You must fill all the forms!");
        alert("You must fill all the forms!");
        return false; 
    }

    for (var index in items) {
        var user = JSON.parse(items[index]);
        if (user.userName === userName) {
            console.log("User name is taken");
            alert("This user name is taken! Choose another one!");
            return false;
        }
    }

    if (emailValidation !== email) {
        console.log("Please validate with correct Email!");
        alert("Please validate with correct Email!");
        return false;
    }

    
    if (!/^(?=.*[0-9])(?=.*[.!@#$%^&*])[a-zA-Z0-9!.@#$%^&*]{7,15}$/g.test(password)) {
        alert('Password must  contain between 8 to 15 characters and must contain at least one numeric digit and a special character')
        return false;
    }
  
    if (password !== passwordValidation) {
        console.log("Please validate with correct Password!");
        alert("Please validate with correct Password!");
        return false;
    }

    return true;

}


export default validation;