import React, { useRef } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import ReactToPrint from 'react-to-print';


import "../App.css"





const Templates = (props) => {
    const componentRef = useRef();
console.log(props.end1);
    return (
        <div>




            <ReactToPrint
                trigger={() => <button variant="warning">Print this out!</button>}
                content={() => componentRef.current}
            />





            <div id="inner-nav">

                <div ref={componentRef} id="container">


                    <div id="profile">
                        <div id="image">

                            <a href="#"><i class="fas fa-pen stroke-transparent"></i></a>
                        </div>
                        <p id="name">{props.nam}<br />{props.last}<br /><span id="email">{props.mail}</span></p>
                        <hr width="100%" />

                        <h5>Profile</h5>
                        <p id="designation">{props.pro}<br /><span id="college"></span></p>
                        <h5>Phone</h5>
                        <p id="designation">{props.number}<br /><span id="college"></span></p>

                        <div id="social-links"><a href="#"></a><a><i class="fab fa-linkedin-in stroke-transparent"></i></a><a href="#"><br /><a href="#">{props.git}</a></a>
                        <br></br>
                        <a><i class="fab fa-github stroke-transparent"></i></a>{props.linkd}</div>

                        <a id="edit-intro" href="#"><i class="fas fa-pen-alt blue"></i>&nbsp;&nbsp;</a>
                        <h5>Address</h5>
                        <p id="designation">{props.add}<br /><span id="college"></span></p>
                        <p id="designation">{props.city}<br /><span id="college"></span></p>
                        <p id="designation">{props.state}<br /><span id="college"></span></p>
                        
                        <hr width="100%" />





                        {/* about */}
                        <div id="about">
                            <p style={{ display: 'inline' }} >Skills</p>
                            <a href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a>
                        </div>
                        <p id="year-graduation">{props.skill1}</p>
                        <p id="year-graduation">{props.skill2}</p>
                        <p id="year-graduation">{props.skill3}</p>
                        <p id="year-graduation">{props.skill4}</p>
                        <p id="year-graduation">{props.skill5}</p>
                        <p id="year-graduation">{props.skill6}</p>

                        <hr width="100%" />
                        <div id="about">
                            <p style={{ display: 'inline' }} >Hobbies</p>
                            <a href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a>
                        </div>
                        <p id="year-graduation">{props.hobbies1}</p>
                        <p id="year-graduation">{props.hobbies2}</p>
                        <p id="year-graduation">{props.hobbies3}</p>
                        <p id="year-graduation">{props.hobbies4}</p>
                        <p id="year-graduation">{props.hobbies5}</p>
                    </div>
                    <div id="info-cards">

                        <div class="card">
                            <p><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Work Experience</p>
                            <ul>
                                <li><p class="tags">Company Name<br /><span>{props.work1}|<span>{props.start1} --{props.end1}</span></span></p>
                                    <a class="edit" href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a></li>
                                    <li><p class="tags">Company Name<br /><span>{props.work2}|<span>{props.start2} --{props.end2}</span></span></p>
                                    <a class="edit" href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a></li>
                                
                            </ul>
                            {/* <a href="#">+ Add workshops attended</a> */}
                        </div>
                        <div class="card">
                            <p><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Education</p>
                            <ul>
                                <li><p class="tags">Primary Education<br />
                                    <span style={{ display: "flex" }}><h6> Institute Name: </h6>{props.prim} </span>
                                    <span style={{ display: "flex" }}><h6> Board: </h6>{props.boardp} </span>
                                    <span style={{ display: "flex" }}><h6> Percentage: </h6>{props.primp} </span>
                                </p>
                                    <a class="edit" href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a></li>
                                <li><p class="tags">Secondary Education<br />
                                    <span style={{ display: "flex" }}><h6> Institute Name: </h6>{props.sec} </span>
                                    <span style={{ display: "flex" }}><h6> Board: </h6>{props.boards} </span>
                                    <span style={{ display: "flex" }}><h6> Percentage: </h6>{props.secp} </span>
                                </p>
                                    <a class="edit" href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a></li>
                                <li><p class="tags">Graduation<br />
                                    <span style={{ display: "flex" }}><h6> Institute Name: </h6>{props.grad} </span>
                                    <span style={{ display: "flex" }}><h6> University Name: </h6>{props.uni} </span>
                                    <span style={{ display: "flex" }}><h6> Percentage In Graduation: </h6>{props.gradp} </span>
                                </p>
                                    <a class="edit" href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a></li>
                                <li><p class="tags">Post Graduation<br />
                                    <span style={{ display: "flex" }}><h6> Institute Name: </h6>{props.post} </span>
                                    <span style={{ display: "flex" }}><h6> University Name: </h6>{props.postu} </span>
                                    <span style={{ display: "flex" }}><h6> Percentage In Graduation: </h6>{props.postp} </span>
                                </p>
                                    <a class="edit" href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a></li>
                            </ul>
                            {/* <a href="#">+ Add workshops attended</a> */}
                        </div>
                        <div class="card">
                            <p><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Achievements</p>
                            {/* <a href="#">+ Add work experience, including contracts and internships</a> */}
                            <span>{props.award}</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Templates
