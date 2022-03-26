import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import login from '../images/login.jpg'

const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let history = useHistory();
    const host = "http://localhost:5000";

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = credentials;
        if (password !== cpassword) {
            props.showAlert("Password didn't match, please re-enter the password", "warning");
        }
        else {
            const response = await fetch(`${host}/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json();
            // eslint-disable-next-line
            console.log(json);
            if (json.success) {
                // Save the auth token and redirect
                localStorage.setItem('token', json.authtoken);
                history.push("/");
                props.showAlert("Account created successfully", "success");

            }
            else {
                props.showAlert('A user with this email already exists, please signup with another email address', "danger");
            }
        }
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container my-5 shadlog">
                <div className="row featurette">
                    <div className="col-md-5 px-5">
                        <h4 className='mt-3'>New Customers</h4>
                        <span className="">Create a new account to make future purchases even faster.</span>

                        <form className='mt-4' onSubmit={handleSignup}>
                            <div className="mb-2">
                                <label htmlFor="name" className="form-label">Your Name:</label>
                                <input type="text" className="form-control" onChange={onchange} id="name" name="name" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" onChange={onchange} id="email" name="email" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" onChange={onchange} id="password" name="password" minLength={5} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" onChange={onchange} id="cpassword" name="cpassword" minLength={5} required />
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-danger fw-bold" type="submit">Signup</button>
                            </div>
                        </form>
                        <div className="text-center mt-3">
                            <p>Have an account? <Link to="/login" className='redtxt'>Login</Link></p>
                        </div>
                    </div>

                    {/* Side Image */}
                    <div className="col-md-7">
                        <img src={login} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup