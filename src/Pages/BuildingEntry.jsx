import React, { useState, useReducer } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

import { reducerFunction } from '../Helper/Reducer'
import Logo from '../assets/images/vicinity.svg'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const BuildingEntry = () => {

    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
      }
    
    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

    const [data, setData] = useState({
        name: "",
        sector: "PRIVATE",
        type: "THEATRE",
        description: "",
        address: {
            street: "",
            area: "",
            city: "",
            state: "",
            country: "",
            pinCode: ""
        },
        images: [
            {
                name: "",
                url: "",
                description: ""
            }
        ],
        videos: [
            {
                name: "",
                url: "",
                description: ""
            }
        ],
        accessibilityFeatures: [
            {
                name: "",
                description: "",
                image: {
                    url: "",
                },
                video: {
                    url: "",
                }
            }
        ],
        buildingOwnerId: 1
    })

    const [image, setImage] = useState([1])

    const [accessibility, setAccessibility] = useState([1])

    const [video, setVideo] = useState([1])


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "FETCH_START" })
        axios.post(`${import.meta.env.VITE_SERVER_KEY}/buildings`,data, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` }}, )
          .then((res) => {
                console.log(res)
              dispatch({ type: "FETCH_SUCCESS", payload: res.data })
          })
          .catch((err) => {
              console.log(err)
              dispatch({ type: "FETCH_ERROR", payload: err.response.data })
          })
    }

    return (
        <>
            <Navbar />
            <form className='container-xl my-5' onSubmit={handleSubmit}>
            <div>
                <Link to="/"><img className="d-block mx-auto mb-2" src={Logo} alt="u-rl Logo" width="72"
                    height="57" /></Link>
            </div>
            <div className="mb-2 text-center">
                <h3>Add your Building</h3>
            </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        name='name'
                        required
                        value={data.name}
                        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                        placeholder='Mall, Hospital, Theater...'
                        type="text"
                        className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        value={data.description}
                        required
                        name='description'
                        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                        col="10"
                        placeholder='Prozone Mall Coimbatore is one of the largest horizontally designed shopping malls in India!'
                        type="text"
                        className="form-control"></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Building Type</label>
                    <select className="form-select" onChange={(e) => setData({ ...data, ["type"]: e.currentTarget.value })}>
                        <option defaultValue value="THEATRE">Theater</option>
                        <option value="EDUCATIONAL_BUILDING">Collage/School</option>
                        <option value="HOTEL">Hotel</option>
                        <option value="RESTAURANT">Restaurant</option>
                        <option value="HOSPITAL">Hospital</option>
                        <option value="OFFICE">Office</option>
                        <option value="STADIUM">Stadium</option>
                        <option value="AUDITORIUM">Auditorium</option>
                        <option value="COMMERCIAL">Commercial</option>
                        <option value="RESIDENTIAL">Residential</option>
                        <option value="INDUSTRIAL_BUILDING">Industrial Building</option>
                        <option value="LIBRARY">Library</option>
                        <option value="SPORTS_BUILDING">Sports Building</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Sector</label>
                    <select className="form-select" onChange={(e) => setData({ ...data, ["sector"]: e.currentTarget.value })}>
                        <option defaultValue value="PRIVATE">Private</option>
                        <option value="PUBLIC">Govt</option>
                    </select>
                </div>

                <div className="text-success">
                    <hr />
                </div>

                <div className="mb-3">
                    <label className="form-label">Street</label>
                    <input
                        required
                        name="street"
                        value={data.address.street}
                        onChange={(e) => setData({...data, ["address"] : {...data.address, [e.target.name] : e.target.value} })}
                        placeholder='SF 201'
                        type="text"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Area</label>
                    <input
                        required
                        onChange={(e) => setData({...data, ["address"] : {...data.address, [e.target.name] : e.target.value} })}
                        name="area"
                        value={data.address.area}
                        placeholder='Sivanandapuram'
                        type="text"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input
                        required
                        onChange={(e) => setData({...data, ["address"] : {...data.address, [e.target.name] : e.target.value} })}
                        name="city"
                        value={data.address.city}
                        placeholder='Coimbatore'
                        type="text"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Pincode</label>
                    <input
                        required
                        onChange={(e) => setData({...data, ["address"] : {...data.address, [e.target.name] : e.target.value} })}
                        name="pinCode"
                        value={data.address.pinCode}
                        placeholder='641035'
                        type="number"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">State</label>
                    <input
                        required
                        onChange={(e) => setData({...data, ["address"] : {...data.address, [e.target.name] : e.target.value} })}
                        name="state"
                        value={data.address.state}
                        placeholder='Tamil Nadu'
                        type="text"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Country</label>
                    <input
                        required
                        onChange={(e) => setData({...data, ["address"] : {...data.address, [e.target.name] : e.target.value} })}
                        name="country"
                        value={data.address.country}
                        placeholder='India'
                        type="text"
                        className="form-control" />
                </div>

                <div className="text-success">
                    <hr />
                </div>

                <div className="mb-3">
                    {
                        image.map((val, index) => {
                            return (
                                <div className="mb-3" key={index}>
                                    <label className="form-label">Building Images</label>
                                    <input
                                        required
                                        value={data.images[val-1].name}
                                        name="name"
                                        onChange={(e) => {
                                            setData({...data,["images"]:  [...data.images].fill({...data.images[val-1],name:e.target.value},val-1,val)})
                                        }}
                                        placeholder={`Building Image Name ${val}`}
                                        type="text"
                                        className="form-control mb-3" />
                                    <input
                                        required
                                        value={data.images[val-1].url}
                                        name="url"
                                        onChange={(e) => {
                                            setData({...data,["images"]:  [...data.images].fill({...data.images[val-1],url:e.target.value},val-1,val)})
                                        }}
                                        placeholder={`https://cloudinary.com/images/photo${val}`}
                                        type="url"
                                        className="form-control mb-3" />
                                    <input
                                        required
                                        value={data.images[val-1].description}
                                        name="description"
                                        onChange={(e) => {
                                            setData({...data,["images"]:  [...data.images].fill({...data.images[val-1],description:e.target.value},val-1,val)})
                                        }}
                                        placeholder='Image Description'
                                        type="text"
                                        className="form-control mb-3" />
                                    {
                                        val !== 1 ? <button type="button" className="btn btn-dark" onClick={
                                            () => {
                                                setImage(image.slice(0, -1))
                                                setData({...data, ["images"] : data.images.slice(0, -1) })
                                            } 
                                        }>Delete</button> : null
                                    }
                                </div>
                            )
                        })
                    }
                    {
                        image.length === 5 ? null :
                            <button
                                type="button"
                                className="btn btn-dark mt-3"
                                onClick={
                                    () => {
                                        image.length <= 4 ? (setImage([...image, image[image.length - 1] + 1])) : null
                                        setData({...data, ["images"] : [...data.images, { name: "", url: "", description: ""} ] })
                                    } 
                                }>
                                Add Images
                            </button>
                    }

                    <div className="text-success">
                        <hr />
                    </div>

                    {/* video */}

                    <div className="mb-3">
                        {
                            video.map((val, index) => {
                                return (
                                    <div className="mb-3" key={index}>
                                        <label className="form-label">Building Video</label>
                                        <input
                                            required
                                            value={data.videos[val-1].name}
                                            name="name"
                                            onChange={(e) => {
                                                setData({...data,["videos"]:  [...data.videos].fill({...data.videos[val-1],name:e.target.value},val-1,val)})
                                            }}
                                            placeholder={`Building Video ${val}`}
                                            type="text"
                                            className="form-control mb-3" />
                                        <input
                                            required
                                            value={data.videos[val-1].url}
                                            name="url"
                                            onChange={(e) => {
                                                setData({...data,["videos"]:  [...data.videos].fill({...data.videos[val-1],url:e.target.value},val-1,val)})
                                            }}
                                            placeholder="https://cloudinary.com/video/master.mp4"
                                            type="url"
                                            className="form-control mb-3" />

                                        <input
                                            required
                                            value={data.videos[val-1].description}
                                            name="description"
                                            onChange={(e) => {
                                                setData({...data,["videos"]:  [...data.videos].fill({...data.videos[val-1],description:e.target.value},val-1,val)})
                                            }}
                                            placeholder='Building Video Description'
                                            type="text"
                                            className="form-control mb-3" />
                                        {
                                            val !== 1 ? <button type="button" className="btn btn-dark" onClick={() => {
                                                setVideo(video.slice(0, -1))
                                                setData({...data, ["videos"] : data.videos.slice(0, -1) })
                                            }
                                            }>Delete</button> : null
                                        }
                                    </div>
                                )
                            })
                        }
                        {
                            video.length === 5 ? null :
                                <button
                                    type="button"
                                    className="btn btn-dark mt-3"
                                    onClick={() => {
                                        video.length <= 4 ? setVideo([...video, video[video.length - 1] + 1]) : null
                                        video.length <= 4 ? setData({...data, ["videos"] : [...data.videos, { name: "", url: "", description: ""}]}) : null
                                    }}>
                                    Add Video
                                </button>
                        }
                    </div>

                    <div className="text-success">
                        <hr />
                    </div>

                    <div className="mb-3">
                        {
                            accessibility.map((val, index) => {
                                return (
                                    <div className="mb-3" key={index}>
                                        <label className="form-label">Accessibility Features</label>
                                        <input
                                            required
                                            value={data.accessibilityFeatures[val-1].name}
                                            name="name"
                                            onChange={(e) => {
                                                setData({...data,["accessibilityFeatures"]:  [...data.accessibilityFeatures].fill({...data.accessibilityFeatures[val-1],name:e.target.value},val-1,val)})
                                            }}
                                            placeholder={`Features Name ${val}`}
                                            type="text"
                                            className="form-control mb-3" />
                                        <input
                                            required
                                            value={data.accessibilityFeatures[val-1].description}
                                            name="description"
                                            onChange={(e) => {
                                                setData({...data,["accessibilityFeatures"]:  [...data.accessibilityFeatures].fill({...data.accessibilityFeatures[val-1],description:e.target.value},val-1,val)})
                                            }}
                                            placeholder='Accessibility Description'
                                            type="text"
                                            className="form-control mb-3" />
                                        <input
                                            required
                                            value={data.accessibilityFeatures[val-1].image.url}
                                            name="url"
                                            onChange={(e) => {
                                                setData({...data,["accessibilityFeatures"]:  [...data.accessibilityFeatures].fill({...data.accessibilityFeatures[val-1],image:{...data.accessibilityFeatures[val-1].image,url:e.target.value}},val-1,val)})
                                            }}
                                            placeholder={`https://cloudinary.com/images/photo${val}`}
                                            type="url"
                                            className="form-control mb-3" />
                                        

                                        <input
                                            required
                                            value={data.accessibilityFeatures[val-1].video.url}
                                            name="url"
                                            onChange={(e) => {
                                                setData({...data,["accessibilityFeatures"]:  [...data.accessibilityFeatures].fill({...data.accessibilityFeatures[val-1],video:{...data.accessibilityFeatures[val-1].video,url:e.target.value}},val-1,val)})
                                            }}
                                            placeholder="https://cloudinary.com/video/master.mp4"
                                            type="url"
                                            className="form-control mb-3" />
                                        {
                                            val !== 1 ? <button type="button" className="btn btn-dark" onClick={() =>{
                                                setAccessibility(accessibility.slice(0, -1))
                                                setData({...data, ["accessibilityFeatures"] : data.accessibilityFeatures.slice(0, -1) })
                                            }} >Delete</button> : null
                                        }
                                    </div>
                                )
                            })
                        }
                        {
                            accessibility.length === 5 ? null :
                                <button
                                    type="button"
                                    className="btn btn-dark mt-3"
                                    onClick={
                                    () => {
                                        accessibility.length <= 4 ? setAccessibility([...accessibility, accessibility[accessibility.length - 1] + 1]) : null
                                        accessibility.length <= 4 ? setData({...data, ["accessibilityFeatures"] : [...data.accessibilityFeatures, {
                                            name: "",
                                            image: { url: "" },
                                            video: { url: "" },
                                        } ]}) : null
                                    }
                                    }>
                                    Add Features
                                </button>
                        }
                    </div>

                </div>

                <button type="submit" className="btn btn-dark w-100 mb-4">Submit for Review</button>
            </form>
            <Footer />
        </>
    )
}

export default BuildingEntry