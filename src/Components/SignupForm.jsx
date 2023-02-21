import React, { useState, useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { reducerFunction } from '../Helper/Reducer'
import Logo from '../assets/images/vicinity.svg'

const SignupForm = () => {

    const navigate = useNavigate()

    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
    }

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

    const [data, setData] = useState({ name: "", email: "", password: "", phoneNumber: "",
    address : {
       street : "",
       area : "",
       city : "",
       state : "",
       country : "",
       pinCode : ""
   } })

    const [err, setErr] = useState("")

    const handleChange = (e) => {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleAddressChange = (e) => {
        let { name, value } = e.target
        setData({...data, ["address"] : {...data.address, [name] : value} })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "FETCH_START" })
        axios.post(`${import.meta.env.VITE_SERVER_KEY}/users`, data)
            .then((res) => {
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
            })
            .catch((err) => {
                setErr(err.response.data.error.message)
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
                <h3>SignUp</h3>
            </div>
            <div className="form-group">
                <div>
                    <label className="form-label">Full Name</label>
                    <input type="text" name="name" className="form-control" placeholder="M R Kishore Kumar"
                        required onChange={handleChange} value={data.name} />
                </div>
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
            <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                    name='phoneNumber'
                    value={data.phoneNumber}
                    onChange={handleChange}
                    placeholder='Enter your Phone Number'
                    type="tel"
                    className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Street</label>
                <input
                    name='street'
                    value={data.address.street}
                    onChange={handleAddressChange}
                    placeholder='New Bangaru Naidu Street'
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Area</label>
                <input
                    name='area'
                    value={data.address.area}
                    onChange={handleAddressChange}
                    placeholder='Victoria Garden'
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">City</label>
                <input
                    name='city'
                    onChange={handleAddressChange}
                    value={data.address.city}
                    placeholder='Chennai'
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">State</label>
                <input
                    name='state'
                    onChange={handleAddressChange}
                    value={data.address.state}
                    placeholder='Tamil Nadu'
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                    name='country'
                    onChange={handleAddressChange}
                    value={data.address.country}
                    placeholder='India'
                    type="text"
                    className="form-control" />
            </div>
            <div className="form-group">
                <div>
                    <label className="form-label">Pin Code</label>
                    <input
                        onChange={handleAddressChange}
                        value={data.address.pinCode}
                         type="number" name="pinCode" className="form-control" placeholder="600078"
                          />
                </div>
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
                err && <div className="alert alert-danger my-3" role="alert">
                    {err}
                </div>
            }
            {
                Object.keys(state.data).length > 0 && state.data.message  && <div className="my-3 alert alert-success" role="alert">
                                Account Created Successfully! Go to Login Page
                            </div>
            }
            <div className="d-flex justify-content-between w-100 mt-3">
                <div><button type="submit" className="btn btn-dark">{state.loading ? "Loading..." : "Signup"}</button></div>
                <div><Link className="btn btn-outline-dark" to="/login" role="button">Login</Link></div>
            </div>
        </form>
    )
}

export default SignupForm