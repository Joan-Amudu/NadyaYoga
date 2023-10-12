import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import Image from 'react-bootstrap/Image';

function Users() {
    const [users, setUsers] = useState([{
        FirstName: "Joan",
        LastName: "Baare",
        Email: "joan.baare@gmail.com",
        Phone: 123456789,
        Message: "Do you offer 1 to 1 private classes?"
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
        <div>
            <h3>Welcome to the Admin Dashboard</h3>
            <Image src="/Admin.jpeg" fluid />
           <div>
            <Link type="button" to="/create">Create new Contact</Link>
                <table className="table">
                    <thead>
                        <tr>                    
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Message</th>
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
                                <td>
                                <Link to={`/update/${user._id}`}>Update</Link>
                                    <button onClick={(e) => handleDelete(user._id)}>Delete</button>
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