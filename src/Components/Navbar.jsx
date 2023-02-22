import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { checkUser } from '../Helper/ProtectedRoute'

const Navbar = () => {

    const navigate = useNavigate()


    const logout = () => {
        Cookies.remove("jwtKey");
        navigate("/",{ replace: true })
    }

    return (
        <nav style={{zIndex : "999"}} className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky top-0 left-0" aria-label="Ninth navbar example">
            <div className="container-xl">
                <Link className="navbar-brand" to="/">Vicinity</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07XL">
                    {
                        checkUser() ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#" className="nav-link active pe-auto" aria-current="page" onClick={logout}>Logout</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/entry">Add Your Place</Link>
                        </li>

                    </ul> : <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/signup">SignUp</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/register">Register your Place</Link>
                        </li>
                    </ul>
                    }
 
                </div>
            </div>
        </nav>
    )
}

export default Navbar