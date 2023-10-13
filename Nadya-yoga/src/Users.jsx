import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Users() {
    const [users, setUsers] = useState([{
        FirstName: "Joan",
        LastName: "Baare",
        Email: "joan.baare@gmail.com",
        Phone: 123456789,
        Message: "Do you offer 1 to 1 private classes?",
        Commets: "Email Yoga Retreat Details"
    }])
    useEffect(() => {
        axios.get('http://localhost:3001/Users')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(error => console.log(error))
    }
    
    return (
        <div className="mt-4 mb-4">
            <h3 className="mt-4 mb-4"><span>Admin Dashboard</span></h3>
            <Link to="/create" className="mt-4 mb-4 justify-content-right"><Button variant="outline-dark" className="pb-2">Create new Contact</Button></Link>
            
            <div className="mt-4 mb-4">
                <Image src="/Admin.jpeg" fluid />
                <h5 className="mt-4 mb-4">Mailing List</h5>
            
                <table className="mt-4 table">
                    <thead>
                        <tr>                    
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Message</th>
                            <th scope="col">Comments</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                    {
                        users.map((user) => {
                            return <tr>                    
                                <td>{user.FirstName}</td>
                                <td>{user.LastName}</td>
                                <td>{user.Email}</td>
                                <td>{user.Phone}</td>
                                <td>{user.Message}</td>
                                <td>{user.Comments}</td>
                                <td>
                                <Link to={`/update/${user._id}`}><Button className="pb-2" variant="outline-dark">Update</Button></Link>
                                    <Button variant="outline-dark" className="pb-2" onClick={(e) => handleDelete(user._id)}>Delete</Button>
                                </td>                           
                            </tr>
                        })  
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Users;