import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Person() {

    const [person, setPerson] = useState([]);

    useEffect(() => {
        axios.get('https://hdliveshow.xyz/app')
        .then(response => {
            console.log(response.data);
            setPerson(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            {
                person.map((item, key) => {
                    return <div key={key}>
                        <h1>Name: {item.name}</h1>
                        <h2>Title: {item.title}</h2>
                    </div>
                })
            }
        </div>
    )
}

export default Person
