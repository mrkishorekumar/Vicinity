import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/vicinity.svg'

const LoginForm = () => {

    const [data, setData] = useState({ email: "", password: "" })

    const [err, setErr] = useState("")

    const handleChange = (e) => {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit} className="container-xl my-5 needs-validation p-5" noValidate  >
            {
                err && <div className="alert alert-danger mb-2" role="alert">
                    {err}
                </div>
            }
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
            <div className="d-flex justify-content-between w-100 mt-3">
                <div><button type="submit" className="btn btn-dark">Login</button></div>
                <div><Link className="btn btn-outline-dark" to="/signup" role="button">Signup</Link></div>
            </div>
        </form>
    )
}

export default LoginForm