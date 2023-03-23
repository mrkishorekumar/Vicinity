import React, { Fragment, useState, useReducer, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { reducerFunction } from '../Helper/Reducer'
import Logo from '../assets/images/vicinity.svg'
import Navbar from '../Components/Navbar';
import Loading from '../Components/Loading';

function ResetPassword() {

    const navigate = useNavigate()

    const [searchParams] = useSearchParams();

    const [load, setLoad] = useState(undefined)

    let body = {
        token: searchParams.get("token"),
    }
    useEffect(() => {
        if(!Boolean(body.token)){
            setLoad(false)
        }
        axios.get(`${import.meta.env.VITE_SERVER_KEY}/users/token-validation/${body.token}`)
        .then((response) => {
            if(response.data.responseStatus === "SUCCESS"){
                setLoad(true)
            }
        })
        .catch((err) => {
            if(err.response.data.error.errorCode === 400){
                setLoad(false)
            }
        })
    },[])

    const [data, setData] = useState({ password: "" })

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
        axios.put(`${import.meta.env.VITE_SERVER_KEY}/users/password/${body.token}`, data)
            .then((res) => {
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
                if (res.data.responseStatus === "SUCCESS") {
                    alert(res.data.message)
                    navigate("/login")
                }
            })
            .catch((err) => {
                setErr(err.response.data.error.debugMessage)
                dispatch({ type: "FETCH_ERROR", payload: err.response.data })
            })

        }

    if(load === undefined){
        return <Loading />
    }

    if(load === false){
        return <h1>Invaild Token or Token Expire</h1>
    }
    if(load){
        return (
          <Fragment>
                  <Navbar />
                  <form onSubmit={handleSubmit} className="container-xl my-5 needs-validation p-5">
      
                      <div>
                          <Link to="/"><img className="d-block mx-auto mb-2" src={Logo} alt="u-rl Logo" width="72"
                              height="57" /></Link>
                      </div>
                      <div className="mb-2 text-center">
                          <h3>Reset Password</h3>
                      </div>
                      <div className="form-group">
                          <div>
                              <label htmlFor="password" className="form-label">New Password</label>
                              <input type="password" name="password" className="form-control" id="email" placeholder="Password"
                                  required onChange={handleChange} value={data.email} />
                          </div>
                      </div>
                      {
                          err && <div className="alert alert-danger my-2" role="alert">
                              {err}
                          </div>
                      }
                      <div className="d-flex justify-content-between w-100 mt-3">
                          <div><button type="submit" className="btn btn-dark">{state.loading ? "Loading..." : "Reset Password"}</button></div>
                          <div><Link className="btn btn-outline-dark" to="/login" role="button">Back to Login</Link></div>
                      </div>
                  </form>
              </Fragment>
        )
    }
}

export default ResetPassword