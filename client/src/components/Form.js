import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmpassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // create a javascript object to hold all of the values
        const newUser = { 
            firstname: firstname,
            lastname: lastname,
            email: email, 
            password: password,
            confirmpassword: confirmpassword
        };
        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted( true );
        console.log("Welcome", newUser);
    };

    
    const forMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting!"
        } else {
            return "Welcome, please submit the form"
        }
    }

    return(
        <form onSubmit={ createUser }>
        <h3>{forMessage()}</h3>
            <div id="up">
                <label>First Name: </label> 
                <input id="i1" type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            {firstname.length < 2 && firstname.length > 0 ?<p>First Name must be at least 2 characters</p>: null}
            <div id="down">
                <label>Last Name: </label> 
                <input type="text" id="i2" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
            </div>
            {lastname.length < 2 && lastname.length > 0 ?<p>Last Name must be at least 2 characters</p>: null}
            <div id="up">
                <label>Email Address: </label> 
                <input id="i3" type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            {email.length < 5 && email.length > 0  ?<p>Email must be at least 5 characters</p>: null}
            <div id="down">
                <label>Password: </label>
                <input id="i4" type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            {password.length < 8 && password.length > 0 ?<p>Password must be at least 8 characters</p>: null}
            <div id="up">
                <label> Confirm Password: </label>
                <input id="i5" type="text" value={confirmpassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            {confirmpassword.length <1 &&  confirmpassword.length > 0 ?<p>Please confirm the password</p>: null}  
            {confirmpassword != password ?<p>Passwords must match !</p>: null}
            <input id="submit" type="submit" value="Create User" />
        <div id="display-data">
            <h2>Your Form Data</h2>
            <h4>First Name: <p>{firstname}</p></h4>
            <h4>Last Name: <p>{lastname}</p></h4>
            <h4>Email: <p>{email}</p></h4>
            <h4>Password: <p>{password}</p> </h4>
            <h4>Confirm password: <p>{confirmpassword}</p></h4>
        </div>
        </form>
    );
};
export default UserForm;