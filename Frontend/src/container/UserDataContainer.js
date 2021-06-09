import React, { useEffect, useState } from 'react'
import './UserDataContainer.css';

function UserDataContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/v1/data', {
            method: 'GET',
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then((result) => {
            return result.json();
        })
        .then(result => {
            setData(result.result);
            console.log(result.result)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>S. No</th>
                        <th>First Name</th>
                        <th>Last Email</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Zipcode</th>
                        <th>Address</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((list, index) => {
                            return  (
                                <tr>
                                    <td>{index}</td>
                                    <td>{list.firstName}</td>
                                    <td>{list.lastName}</td>
                                    <td>{list.email}</td>
                                    <td>{list.phone}</td>
                                    <td>{list.zipcode}</td>
                                    <td>{list.address}</td>
                                    <td>{list.message}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserDataContainer
