import React, { useState } from 'react'
import { Input, Form, message } from 'antd'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

const initialState = { fullName: "", email: "", password: "", confirmPassword: "", role: "student", status: "active", dateCreated: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() }

export default function SignUp() {

    let users = [];
    users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    const [state, setState] = useState(initialState);
    const { dispatch, user } = useAuthContext()

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const signUp = e => {
        e.preventDefault();
        let { fullName, email, password, confirmPassword } = state;
        fullName = fullName.trim();
        email = email.trim();
        password = password.trim();
        confirmPassword = confirmPassword.trim();
        if (!fullName) {
            message.error("Please Enter Your Full Name");
            return;
        }
        if (fullName.length < 3) {
            message.error("Please Enter Your Name Correctly");
            return;
        }
        if (!email) {
            message.error("Please Enter Your Email");
            return;
        }
        if (!password) {
            message.error("Please Enter Your Password");
            return;
        }
        if (password.length < 6) {
            message.error("Please Enter 6 character or more");
            return;
        }
        if (!confirmPassword) {
            message.error("Please Enter Your Confirm Password");
            return;
        }
        if (confirmPassword.length < 6) {
            message.error("Please Enter 6 character or more");
            return;
        }
        if (confirmPassword != password) {
            message.error("Please Enter The Same Password");
            return;
        }
        users.push(state)
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("User", JSON.stringify(state))
        localStorage.setItem("token", "true")
        dispatch({ type: "SET_LOGGED_IN", payload: { state } })
        message.success("A new user added successfully");
    }

    return (
        <>
            <div className="img1">
                <div className="container py-3">
                    <div className="row">
                        <div className="col">
                            <Form className='d-flex justify-content-center align-items-center py-5'>
                                <div className="card beforeCard auth p-4">
                                    <h4>SignUp</h4>
                                    <div className="d-flex">
                                        <p>Does have an account?</p>
                                        <Link to="/auth/login" className="ms-1 text-decoration-none" style={{ color: "purple" }}>Login</Link>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h6>Full Name</h6>
                                            <Input type="text" name="fullName" onChange={handleChange} id="fullName" className='form-control w-100' placeholder='Full Name' />
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col">
                                            <h6>Email Address</h6>
                                            <Input type="email" name="email" onChange={handleChange} id="email" className='form-control w-100' placeholder='you@example.com' />
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col">
                                            <h6>Password</h6>
                                            <Input.Password type="password" onChange={handleChange} name="password" id="password" className='form-control w-100 d-flex' placeholder='Enter 6 character or more' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h6>Confirm Password</h6>
                                            <Input.Password type="confirmPassword" onChange={handleChange} name="confirmPassword" id="confirmPassword" className='form-control w-100 d-flex' placeholder='Enter 6 character or more' />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input type="checkbox" name="" id="checkbox" />
                                            <label for="checkbox" className='ms-2'>Remember me</label>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col text-center">
                                            <button className='border-0 rounded-2 w-75 text-white' onClick={signUp} style={{ minHeight: 40, backgroundColor: "#588157" }}>SignUp</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
