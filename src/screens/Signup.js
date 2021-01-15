import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';




class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            email:"",
            emailValidation: "",
            password: "",
            passwordValidation: "",
            userName: ""
        }

    }

  
  render() {

    return (
        <>
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="User Name" />
                </div>

                <div className="form-group">
                    <label>Mail Adress</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Re-enter Mail Adress</label>
                    <input type="email" className="form-control" placeholder="Enter email again" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="email" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Re-enter Password</label>
                    <input type="password" className="form-control" placeholder="Enter password again" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/">log in?</a>
                </p>
            </form>

        </>
    );
  }
}

export default Signup;