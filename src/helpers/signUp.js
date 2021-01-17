import validation from "./validation";

const signUp = (e, state) => {
    console.log(state);

    let isValidate = validation(state.userName,
        state.email,
        state.emailValidation,
        state.password,
        state.passwordValidation
    );
    if (!isValidate) {
        e.preventDefault();
    }
    else {
        if (localStorage) {
            var user = {
                userName: state.userName,
                email: state.email,
                password: state.password
            }
            window.localStorage.setItem(state.userName, JSON.stringify(user));
            alert("Successfully registered the user");
            return true;
        }
        else {
            e.preventDefault();
            alert("This browser doesn't support local storage!");
            return false;
        }
    }
}

export default signUp;