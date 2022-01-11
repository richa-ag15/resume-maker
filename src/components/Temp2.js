import React, { useRef } from 'react'
import './temp2.css'
import ReactToPrint from 'react-to-print';

const Temp2 = (props) => {

    const componentRef = useRef();


    return (
        <>
            <div >
                <ReactToPrint
                    trigger={() => <button variant="warning">Print this out!</button>}
                    content={() => componentRef.current}
                />
                <div ref={componentRef} className="container1" style={{border:"2px solid #79A9CE"}}>
                    <div className="header1" style={{ backgroundColor: "#e0ffff" }}>
                        <div className="full-name">
                            <span className="first-name">{props.nam}</span>
                            <span className="last-name">{props.last}</span>
                        </div>
                        <div className="contact-info">
                            <span className="email">Email: </span>
                            <span className="email-val">{props.mail}</span>
                            <br />
                            <span className="email">Address: </span>
                            <span className="email-val">{props.add}{props.city}{props.state}</span>
                            <br />
                            <span className="email">Github: </span>
                            <span className="email-val">{props.git}</span>
                            <br />
                            <span className="email">Linkdin: </span>
                            <span className="email-val">{props.linkd}</span>
                            <span className="separator"></span>
                            <span className="phone">Phone: </span>
                            <span className="phone-val">{props.number}</span>
                        </div>
                        <hr className='hr1' />

                    </div>

                    <div className="about">
                        <span className="position">{props.pro} </span>


                    </div>
                    <br />
                    <div className="details">
                        <div className="section">
                            <div className="section__title">Experience</div>
                            <div className="section__list">
                                <div className="section__list-item">
                                    <div className="left">
                                        <div className="name">{props.work1}</div>
                                        <div className="addr">{props.start1}</div>
                                        <div className="duration">{props.end1}</div>
                                    </div>
                                    <div className="right">
                                        <div className="name">{props.work2}</div>
                                        <div className="desc">{props.start2}</div>
                                        <div className="duration">{props.end2}</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="section">
                            <div className="section__title">Education</div>
                            <div className="section__list">
                                <div className="section__list-item">
                                    <div className="left">
                                        <div className="name">Primary</div>
                                        <div className="addr">{props.prim}</div>
                                        <div className="addr">{props.boardp}</div>
                                        <div className="duration">{props.primp}</div>
                                    </div>
                                    <div className="right">
                                        <div className="name">Secondary</div>
                                        <div className="addr">{props.sec}</div>
                                        <div className="addr">{props.boards}</div>
                                        <div className="duration">{props.secp}</div>
                                    </div>
                                </div>
                                <div className="section__list">
                                <div className="section__list-item">
                                    <div className="left">
                                        <div className="name">Graduation</div>
                                        <div className="addr">{props.grad}</div>
                                        <div className="addr">{props.uni}</div>
                                        <div className="duration">{props.gradp}</div>
                                        </div>
                                        <div className="right">
                                            <div className="name">Post Graduation</div>
                                            <div className="addr">{props.post}</div>
                                            <div className="addr">{props.postu}</div>
                                            <div className="duration">{props.postp}</div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <br/>
                            {/* <div className="section">
                                <div className="section__title">Projects</div>
                                <div className="section__list">
                                    <div className="section__list-item">
                                        <div className="name">DSP</div>
                                        <div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
                                    </div>

                                    <div className="section__list-item">
                                        <div className="name">DSP</div>
                                        <div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="section">
                                <div className="section__title">Skills</div>
                                <div className="skills">
                                    <div className="skills__item">
                                        <div className="left"><div className="name">
                                            {props.skill1}
                                        </div></div>
                                        <div className="right">
                                            <input id="ck1" type="checkbox"  />

                                            <label for="ck1"></label>
                                            <input id="ck2" type="checkbox" />

                                            <label for="ck2"></label>
                                            <input id="ck3" type="checkbox" />

                                            <label for="ck3"></label>
                                            <input id="ck4" type="checkbox" />
                                            <label for="ck4"></label>
                                            <input id="ck5" type="checkbox" />
                                            <label for="ck5"></label>

                                        </div>
                                    </div>

                                </div>
                            <div className="skills">
                                <div className="skills__item">
                                    <div className="left"><div className="name">
                                        {props.skill2}</div></div>
                                    <div className="right">
                                        <input id="ck1" type="checkbox"  />

                                        <label for="ck1"></label>
                                        <input id="ck2" type="checkbox" />

                                        <label for="ck2"></label>
                                        <input id="ck3" type="checkbox" />

                                        <label for="ck3"></label>
                                        <input id="ck4" type="checkbox" />
                                        <label for="ck4"></label>
                                        <input id="ck5" type="checkbox" />
                                        <label for="ck5"></label>

                                    </div>
                                </div>
                                </div>
                                <div className="skills__item">
                                    <div className="left"><div className="name">
                                        {props.skill3}</div></div>
                                    <div className="right">
                                        <input id="ck1" type="checkbox" />

                                        <label for="ck1"></label>
                                        <input id="ck2" type="checkbox" />

                                        <label for="ck2"></label>
                                        <input id="ck3" type="checkbox" />

                                        <label for="ck3"></label>
                                        <input id="ck4" type="checkbox" />
                                        <label for="ck4"></label>
                                        <input id="ck5" type="checkbox" />
                                        <label for="ck5"></label>

                                    </div>
                                </div>
                                <div className="skills__item">
                                    <div className="left"><div className="name">
                                        {props.skill4}</div></div>
                                    <div className="right">
                                        <input id="ck1" type="checkbox" />

                                        <label for="ck1"></label>
                                        <input id="ck2" type="checkbox" />

                                        <label for="ck2"></label>
                                        <input id="ck3" type="checkbox" />

                                        <label for="ck3"></label>
                                        <input id="ck4" type="checkbox" />
                                        <label for="ck4"></label>
                                        <input id="ck5" type="checkbox" />
                                        <label for="ck5"></label>

                                    </div>
                                </div>
                                <div className="skills__item">
                                    <div className="left"><div className="name">
                                        {props.skill5}</div></div>
                                    <div className="right">
                                        <input id="ck1" type="checkbox" />

                                        <label for="ck1"></label>
                                        <input id="ck2" type="checkbox" />

                                        <label for="ck2"></label>
                                        <input id="ck3" type="checkbox" />

                                        <label for="ck3"></label>
                                        <input id="ck4" type="checkbox" />
                                        <label for="ck4"></label>
                                        <input id="ck5" type="checkbox" />
                                        <label for="ck5"></label>

                                    </div>
                                </div>
                                <div className="skills__item">
                                    <div className="left"><div className="name">
                                        {props.skill6}</div></div>
                                    <div className="right">
                                        <input id="ck1" type="checkbox" />

                                        <label for="ck1"></label>
                                        <input id="ck2" type="checkbox"  />

                                        <label for="ck2"></label>
                                        <input id="ck3" type="checkbox" />

                                        <label for="ck3"></label>
                                        <input id="ck4" type="checkbox" />
                                        <label for="ck4"></label>
                                        <input id="ck5" type="checkbox" />
                                        <label for="ck5"></label>

                                    </div>
                                </div>
                                

                            </div>
                            <div className="section">
                                <div className="section__title">
                                    Achievements
                                </div>
                                <div className="section__list">
                                    <div className="section__list-item">
                                       {props.award}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="section">
                                <div className="section__title">
                                    Interests
                                </div>
                                <div className="section__list">
                                    <div className="section__list-item">
                                       {props.hobbies1} {props.hobbies2} {props.hobbies3} {props.hobbies4} {props.hobbies5}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Temp2;
