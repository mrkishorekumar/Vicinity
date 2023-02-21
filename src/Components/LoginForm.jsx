import React, { useState, useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie'
import { reducerFunction } from '../Helper/Reducer'
import Logo from '../assets/images/vicinity.svg'

const LoginForm = () => {

    const navigate = useNavigate()

    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
    }

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

    const [data, setData] = useState({ email: "", password: "" })

    const [err, setErr] = useState("")

    const handleChange = (e) => {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "FETCH_START" })
        axios.post(`${import.meta.env.VITE_SERVER_KEY}/authenticate`, data)
            .then((res) => {
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
                if (res.data.responseStatus === "SUCCESS") {
                    Cookies.set('jwtKey', res.data.data.jwtToken, { expires: 1 })
                    navigate('/dashboard', { replace: true })
                }
            })
            .catch((err) => {
                setErr(err.response.data.error.debugMessage)
                dispatch({ type: "FETCH_ERROR", payload: err.response.data })
            })
    }

    return (
        <form onSubmit={handleSubmit} className="container-xl my-5 needs-validation p-5">
            
            <div>
                <Link to="/"><img className="d-block mx-auto mb-2" src={Logo} alt="u-rl Logo" width="72"
                    height="57" /></Link>
            </div>
            <div className="mb-2 text-center">
                <h3>Login</h3>
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
            <div className="form-group">
                <div>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" pattern=".{8,}" className="form-control" id="email" placeholder="Your Password"
                        required onChange={handleChange} value={data.password} />
                    <div className="invalid-feedback">
                        Please enter a valid Password for Signup.
                    </div>
                </div>
            </div>
            {
                err && <div className="alert alert-danger my-2" role="alert">
                    {err}
                </div>
            }
            <div className="d-flex justify-content-between w-100 mt-3">
                <div><button type="submit" className="btn btn-dark">{state.loading ? "Loading..." : "Login"}</button></div>
                <div><Link className="btn btn-outline-dark" to="/signup" role="button">Signup</Link></div>
            </div>
        </form>
    )
}

export default LoginForm