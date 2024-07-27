import isEmail from "validator/lib/isEmail";
// import { loginUserApi } from "../apis/user-api";
import { useState } from "react";
import { loginUser } from '../utils/LoginUtils';

const LoginScreen = ()=>{

    const [credentials, setCredentials] = useState({email: "", password: ""});

    const credentailsValidator = ({email, password})=>{
        if(isEmail(email) && password?.length >= 8){
            return true;
        }
        return false;
    }

    const handleChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        if(credentailsValidator(credentials)){
            return;
        }
        await loginUser({...credentials});
    }

    return (
        <div className="screen">
            <h1 className="ui heading center">Login</h1>

            <div>
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={credentials.email}/>
                    </div>
                    <div className="field">
                        <label>password</label>
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={credentials.password} minLength={8}/>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen;