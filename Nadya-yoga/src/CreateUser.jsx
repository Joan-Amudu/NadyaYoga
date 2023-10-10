import React , {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function CreateUser () {
    const [FirstName, setfName] = useState()
    const [LastName, setlName] = useState()
    const [Email, setEmail] = useState()
    const [Phone, setPhone] = useState()
    const [Message, setMessage] = useState()

    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {FirstName, LastName, Email, Phone, Message})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div>
                <form onSubmit={Submit}>
                
                    <div className="mb-3">
                        <input 
                            type="text"
                            className="form-control" 
                            placeholder="First Name"                            
                            onChange={(e) => setfName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Last Name"                             
                            onChange={(e) => setlName(e.target.value)} />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="">Email address</label>
                        <input type="email" placeholder="Email"  className="form-control"                         
                         onChange={(e) => setEmail(e.target.value)} />                        
                    </div>
                
                    <div className="mb-3">
                        <label htmlFor="" >Phone</label>
                        <input type="number" placeholder="Phone"  className="form-control"                        
                         onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Message</label>
                        <textarea placeholder="Message"  className="form-control" rows="3"
                         onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                  
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default CreateUser;