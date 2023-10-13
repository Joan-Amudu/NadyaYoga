import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function UpdateUser () {
    const {id} = useParams()
    const [FirstName, setfName] = useState()
    const [LastName, setlName] = useState()
    const [Email, setEmail] = useState()
    const [Phone, setPhone] = useState()
    const [Message, setMessage] = useState()
    const [Comments, setComments] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {console.log(result)
            setfName(result.data.FirstName)
            setlName(result.data.LastName)
            setEmail(result.data.Email)
            setPhone(result.data.Phone)
            setMessage(result.data.Message)
            setComments(result.data.Comments)
        })
        .catch(err => console.log(err))
    }, [])
    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id, {FirstName, LastName, Email, Phone, Message, Comments})
        .then(result => {
            console.log(result)
            navigate('/users')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h3 className="text-center text-black mt-4 mb-4">
                <span>Update Contact!</span>                
            </h3>
            <p className="text-muted">Check all details are correct before updating</p>           
            <Form className="contact-form pb-4" md={{ span: 4, offset: 6 }} onSubmit={Update}>    
                <Form.Group className="mb-4" controlId="formBasicEmail">            
                    <Form.Control
                        type="text" 
                        placeholder="First name" 
                        value={FirstName}
                        onChange={(e) => setfName(e.target.value)} 
                        required />            
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">            
                    <Form.Control 
                        type="text" 
                        placeholder="Last name" 
                        value={LastName}
                        onChange={(e) => setlName(e.target.value)} 
                        required />                
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">              
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required />
                    <Form.Text className="text-muted" text-align="left">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPhone">                
                    <Form.Control 
                        type="number" 
                        placeholder="Phone " 
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)} />
                </Form.Group>        
                <Form.Group className="mb-4" controlId="formBasicMessage">                
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Message" 
                        value={Message}
                        onChange={(e) => setMessage(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicMessage">                
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Comments" 
                        value={Comments}
                        onChange={(e) => setComments(e.target.value)} />
                </Form.Group>
                <Button type="submit" variant="outline-dark" className="pb-2">
                    Submit
                </Button>
            </Form>       
        </div>
    )
}
export default UpdateUser;