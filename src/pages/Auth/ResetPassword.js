import React, { useState } from 'react'
import { Form,Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'

const initialState = { newPassword: "", confirmPassword: "" }

export default function ResetPassword() {

    const [state, setState] = useState(initialState)
    let users = JSON.parse(localStorage.getItem("users"))
    let email = localStorage.getItem("email")

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()

    const resetPassword = e => {
        e.preventDefault();
        let { newPassword, confirmPassword } = state;
        newPassword = newPassword.trim();
        confirmPassword = confirmPassword.trim();
        if (!newPassword) {
            message.error("Enter Your New Password")
            return;
        }
        if (!confirmPassword) {
            message.error("Enter Your Confirm Password")
            return;
        }
        if (confirmPassword !== newPassword) {
            message.error("Both New And Confirm Password Doesn't Match")
            return;
        }
        let newUser = users.filter((filterUser) => {
            return filterUser.email == email
        })
        console.log('newUser', newUser)
        newUser = { ...newUser[0], password: newPassword, confirmPassword: confirmPassword }

        let newUsers = users.filter((filterUser) => {
            return filterUser.email != email
        })
        newUsers.push(newUser)
        console.log('newUsers', newUser)
        console.log('newUsers', newUsers)
        localStorage.setItem("User", JSON.stringify(newUser))
        localStorage.setItem("users", JSON.stringify(newUsers))
        localStorage.removeItem("email")
        message.success("Password Reset Successfully")
        navigate("/auth/login")
    }

    return (
        <>
            <div className="img1">
                <div className="container auth py-3">
                    <div className="row">
                        <div className="col">
                            <Form className='d-flex justify-content-center align-items-center py-5'>
                                <div className="card beforeCard p-4 w-50">
                                    <h4>Reset Password</h4>
                                    <div className="row my-2">
                                        <div className="col">
                                            <h6>New Password</h6>
                                            <Input.Password type="password" name="newPassword" onChange={handleChange} className='form-control w-100 d-flex' placeholder='Enter 6 character or more' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h6>Confirm Password</h6>
                                            <Input.Password type="password" name="confirmPassword" onChange={handleChange} className='form-control w-100 d-flex' placeholder='Enter 6 character or more' />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col text-center">
                                            <button to="/resetpassword" className='border-0 rounded-2 w-75 text-white' onClick={resetPassword} style={{ height: 40, backgroundColor: "#588157" }}>Reset Password</button>
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
