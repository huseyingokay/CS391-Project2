const isUserExist = (email, password) => {
    const items = { ...localStorage };
    
    for(var index in items){
        var user = JSON.parse(items[index]);
        if(user.email === email){
            if(user.password === password){
                console.log("Log in succeed");
                return true;
            }
        } 
    }
    console.log("Your password is wrong or user doesn't exist");
    return false;
}

export default isUserExist;