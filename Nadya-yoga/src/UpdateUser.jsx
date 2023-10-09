import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from 'axios'

function UpdateUser () {
    const {id} = useParams()
    const [FirstName, setfName] = useState()
    const [LastName, setlName] = useState()
    const [Email, setEmail] = useState()
    const [Phone, setPhone] = useState()
    const [Message, setMessage] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {console.log(result)
            setfName(result.data.FirstName)
            setlName(result.data.LastName)
            setEmail(result.data.Email)
            setPhone(result.data.Phone)
            setMessage(result.data.Message)
        })
        .catch(err => console.log(err))
    }, [])
    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id, {FirstName, LastName, Email, Phone, Message})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <form onSubmit={Update}>
                <div className="row">
                    <div className="col">
                        <input 
                            type="text"
                            className="form-control" 
                            placeholder="First Name"                            
                            value={FirstName}
                            onChange={(e) => setfName(e.target.value)} />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Last Name"                             
                            value={LastName}
                            onChange={(e) => setlName(e.target.value)} />
                    </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Email address</label>
                        <input type="email" placeholder="Email"  className="form-control"                         
                         value={Email}
                         onChange={(e) => setEmail(e.target.value)} />                        
                    </div>
                
                    <div className="mb-3">
                        <label htmlFor="" >Phone</label>
                        <input type="number" placeholder="Phone"  className="form-control"                        
                         value={Phone}
                         onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Message</label>
                        <textarea placeholder="Message"  className="form-control" rows="3"
                         value={Message}
                         onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                  
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}
export default UpdateUser;