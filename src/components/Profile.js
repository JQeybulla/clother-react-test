import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import './profile.css'

function Profile(props) {
    const [email, setEmail] = useState(null);
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [age, setAge] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token')
        const headers = {
            'Authorization': `Token ${token}`
        }
        axios.get('http://159.89.98.254:1337/dj-rest-auth/user-detail/', {headers})
            .then(res=>{
                // console.log(res.data.email);
                setEmail(res.data.email);
                setWeight(res.data.weight);
                setHeight(res.data.height);
                setAge(res.data.age);
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])
    return (
        <div className="datas">
            <div>Your Email: <span>{email}</span></div>
            <div>Your Age: <span>{age}</span> </div>
            <div>Your Weight: <span>{weight}</span> kg</div>
            <div>Your Height: <span>{height}</span> sm </div>
        </div>
    );
}

export default Profile;