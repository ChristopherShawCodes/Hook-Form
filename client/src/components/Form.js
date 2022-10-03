import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmpassword, setConfirmPassword] = useState(""); 
    
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
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div id="up">
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div id="down">
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div id="up">
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div id="down">
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div id="up">
                <label> Confirm Password: </label>
                <input type="text" value={confirmpassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
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