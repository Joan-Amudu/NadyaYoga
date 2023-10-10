import React from 'react'
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
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
    <Form onSubmit={handleContact}>
        <Row>
        <Col>
          <Form.Control placeholder="First name" onChange={(e) => setfName(e.target.value)} />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" onChange={(e) => setlName(e.target.value)} />
        </Col>
      </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
            
            <Form.Control type="number" placeholder="Phone " onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>        
        <Form.Group className="mb-3" controlId="formBasicMessage">
            
            <Form.Control as="textarea" rows={3} placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  );
}
