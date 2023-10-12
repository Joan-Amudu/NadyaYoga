import React , {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


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
            navigate('/users')
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h3 className="text-center text-black mt-4 mb-4">
        <span>Create a new User!</span>
      </h3>
      
            <div>
            <Form className="contact-form pb-4" md={{ span: 4, offset: 6 }} onSubmit={Submit}>
        
      
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
        </div>
    )
}
export default CreateUser;