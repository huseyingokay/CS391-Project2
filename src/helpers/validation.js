const validation = (userName, email, emailValidation, password, passwordValidation) => {
    const items = { ...localStorage };

    for (var index in items) {
        var user = JSON.parse(items[index]);
        if (user.userName === userName) {
            console.log("User name is taken");
            alert("This user name is taken! Choose another one!");
            return false;
        }
    }

    if (emailValidation != email) {
        console.log("Please validate with correct Email!");
        alert("Please validate with correct Email!");
        return false;
    }
    
    if (password != passwordValidation) {
        console.log("Please validate with correct Password!");
        alert("Please validate with correct Password!");
        return false;
    }
    
    return true;

}


export default validation;