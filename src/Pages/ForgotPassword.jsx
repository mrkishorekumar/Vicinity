import React, { useState, useReducer, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { reducerFunction } from '../Helper/Reducer'
import Logo from '../assets/images/vicinity.svg'
import Navbar from '../Components/Navbar';

function ForgotPassword() {

    const [data, setData] = useState({ email: "" })

    const [err, setErr] = useState("")

    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
    }

    const handleChange = (e) => {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_SERVER_KEY}/users/reset-password-mail`, data)
            .then((res) => {
                console.log(res.data)
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
                if (res.data.responseStatus === "SUCCESS") {
                    alert(res.data.message)
                }
            })
            .catch((err) => {
                setErr(err.response.data.error.debugMessage)
                dispatch({ type: "FETCH_ERROR", payload: err.response.data })
            })

    }

    return (
        <Fragment>
            <Navbar />
            <form onSubmit={handleSubmit} className="container-xl my-5 needs-validation p-5">

                <div>
                    <Link to="/"><img className="d-block mx-auto mb-2" src={Logo} alt="u-rl Logo" width="72"
                        height="57" /></Link>
                </div>
                <div className="mb-2 text-center">
                    <h3>Forgot Password</h3>
                </div>
                <div className="form-group">
                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="you@example.com"
                            required onChange={handleChange} value={data.email} />
                        <div className="invalid-feedback">
                            Please enter a valid email address for Signup.
                        </div>
                    </div>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                {
                    err && <div className="alert alert-danger my-2" role="alert">
                        {err}
                    </div>
                }
                <div className="d-flex justify-content-between w-100 mt-3">
                    <div><button type="submit" className="btn btn-dark">{state.loading ? "Loading..." : "Send verification Link"}</button></div>
                    <div><Link className="btn btn-outline-dark" to="/login" role="button">Back to Login</Link></div>
                </div>
            </form>
        </Fragment>
    )
}

export default ForgotPassword