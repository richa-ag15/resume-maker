import React, { Component, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Registration({userData}) {
    const navigate = useNavigate();

    const [allData, setAllData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        cP:''
    })

    const handlshow = (e) => {
        const { name, value } = e.target;
        setAllData(prastate => (
            {
                ...prastate,
                [name]: value
            }
        ))
    }

    const sendData = () => {
        const {firstname, lastname, email, password, phone, cP } = allData

        if(password === cP ){

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            var raw = JSON.stringify({
                "name": firstname,
                "lastname":lastname,
                "email": email,
                "passward": password,
                "phone":phone
            });
    
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
    
            fetch("http://localhost:3001/res", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if(result === 'Successfully'){
                        alert('add data')
                        navigate('/home');
                        userData(firstname,lastname, email, phone)
                    }else{
                        alert('not add')
                    }
                })
                .catch(error => console.log('error', error));
        }
        else {
            alert('password not matched')
        }
    }

    return (
        <>
            <section className='signup' >
                <div className='container mt-5' style={{ border: "2px #a6e7ff solid", display: "block", width: '800px', boxShadow: '10px 10px 8px #888888' }}>
                    <div className='signup-content' style={{ display: 'flex', alignitem: "center", justifyContent: "center" }}>
                        <div className='signup-form'>
                            <h1 className='form-group' style={{ fontSize: "30px" }}>registration </h1>
                            <form className='register-form' id="register-form">

                                <div className='form-group'>
                                    <label htmlFor='name'><i class="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="name" name="firstname" value={allData.firstname} id="firstname" placeholder='Your Name' onChange={handlshow} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor='name'><i class="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="name" name="lastname" value={allData.lastname} id="lastname" placeholder='Your Last Name' onChange={handlshow} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor='email'><i class="zmdi zmdi-email material-icons-name"></i></label>
                                    <input type="email" name="email" value={allData.email} id="email" placeholder='Your Email' onChange={handlshow} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor='phone'><i class="zmdi zmdi-phone-in-talk material-icons-name"></i></label>
                                    <input type="phone" name="phone" value={allData.phone} id="phone" placeholder='Your Phone' onChange={handlshow} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'><i class="zmdi zmdi-lock material-icons-name"></i></label>
                                    <input type="password" name="password" value={allData.password} id="phone" placeholder='Your password' onChange={handlshow} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor='cpassword'><i class="zmdi zmdi-lock material-icons-name"></i></label>
                                    <input type="password" name="cP" id="cphone" placeholder=' Confirm Your password' onChange={handlshow} />

                                </div>
                                <button type="button" class="btn btn-primary" onClick={() => sendData()}>registration</button>
                                <br />
                                <Link to="/login">
                                <p><a>already have an account</a></p>
                                </Link>
                               


                            </form>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Registration
