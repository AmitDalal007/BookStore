import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom';
import login from '../images/login.jpg'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();
    const host = "http://localhost:5000";

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in successfully", "success");
            history.push("/");

        }
        else{
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container my-5 shadlog">
                <div class="row featurette">
                    <div class="col-md-5 px-5">
                        <h4 className='mt-3'>Login</h4>
                        <span class="">If you already have an account, please sign in for faster checkout with Email <span className="fw-bold">OR</span> Mobile</span>

                        <form className='mt-4' onSubmit={handleLogin}>
                            <div class="mb-2">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" required/>
                            </div>
                            <div class="mb-2">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <label for="password" class="form-label">Password</label>
                                    </div>
                                    <div>
                                        <Link to="/signup" className='redtxt'>Forgot Password</Link>
                                    </div>
                                </div>
                                <input type="password" class="form-control" value={credentials.password} onChange={onChange} id="password" name="password" required />
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-danger fw-bold" type="submit">Login</button>
                            </div>
                        </form>

                        <p className='lineTxt my-5'><span>Or sign-in using your existing account with...</span></p>

                        <div className='d-flex justify-content-center'>
                            <a href='https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin' type="button" class="btn btn-outline-danger mx-1 fw-bold">Google</a>
                            <a href="https://www.facebook.com/" class="btn btn-outline-primary mx-1 fw-bold">Facebook</a>
                        </div>
                        <div className="text-center mt-3">
                        <p>Doesn’t have an account yet? <Link to="/signup" className='redtxt'>Signup</Link></p>
                        </div>
                    </div>

                    {/* Side Image */}
                    <div class="col-md-7">
                        <img src={login} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login