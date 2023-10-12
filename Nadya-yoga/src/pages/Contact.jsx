import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const [FirstName, setfName] = useState()
    const [LastName, setlName] = useState()
    const [Email, setEmail] = useState()
    const [Phone, setPhone] = useState()
    const [Message, setMessage] = useState()

    const navigate = useNavigate()

    const handleContact = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/contact", {FirstName, LastName, Email, Phone, Message})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
      <h3 className="text-center text-black mt-4 mb-4 contact-title">
        <span>I am so excited you could join us!</span>
      </h3>
      <p>Receive your free meditation for download upon joining my mailing list!</p> 
      <p>Stay up-to-date on upcoming events, news and  inspiration to support you in your yoga journey. </p>
        
    <Form className="contact-form pb-4" md={{ span: 4, offset: 6 }} onSubmit={handleContact}>
        
      
      <Form.Group className="mb-4" controlId="formBasicEmail">            
        <Form.Control type="text" placeholder="First name" onChange={(e) => setfName(e.target.value)} required />            
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">            
        <Form.Control type="text" placeholder="Last name" onChange={(e) => setlName(e.target.value)} required />
            
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicEmail">
            
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
            <Form.Text className="text-muted" text-align="left">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPhone">
            
            <Form.Control type="number" placeholder="Phone " onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>        
        <Form.Group className="mb-4" controlId="formBasicMessage">
            
            <Form.Control as="textarea" rows={3} placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
        </Form.Group>
        <Button type="submit">
            Submit
        </Button>
    </Form>
    </div>
  );
}
