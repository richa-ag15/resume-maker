import React, {useState} from 'react';
import { Modal, Button } from "react-bootstrap"
const Forgot = (props) => {

    const [email, setemail] = useState("")
    const [passward, setpassward] = useState("")

    const editPass = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "passward": passward
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/editAd", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result === 'Successfully'){
                    alert('changed')
                }else{
                   alert("email is not matched")
                }
                
            })
            .catch(error => console.log('error', error));
    }
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ backgroundColor: "yellow" }}>
                        Reset Password
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4> Registered Email Address</h4>
                    <form className='register-form' id="register-form">
                        <div className='form-group'>
                            <label htmlFor='name'><i class="zmdi zmdi-email material-icons-name"></i></label>
                            <input type="name" name="firstname" id="firstname" placeholder='Your Name' onChange={(e)=>setemail(e.target.value)} />

                        </div>
                        <h4>Enter New Passward</h4>
                        <div className='form-group'>
                            <label htmlFor='name'><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="name" name="lastname" id="lastname" placeholder='Your Last Name'  onChange={(e)=>setpassward(e.target.value)} />

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button  onClick={() => {
                         editPass()
                    }}>save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Forgot;
