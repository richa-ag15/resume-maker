import React, { useRef } from 'react'
import './temp3.css'
import ReactToPrint from 'react-to-print';

const Temp3 = (props) => {

    const componentRef = useRef();
    return (
        <div>
            <div ref={componentRef}>
                <ReactToPrint
                    trigger={() => <button variant="warning">Print this out!</button>}
                    content={() => componentRef.current}
                />

                <body id="top">
                    <div id="cv" className="instaFade">
                        <div className="mainDetails">

                            <div id="name">
                                <h2 className="quickFade delayTwo">{props.nam}</h2>
                                <br />
                                <h2 className="quickFade delayTwo">{props.last}</h2>
                                <br />
                                <ul>
                                    <li>address: <a href="mailto:joe@bloggs.com" target="_blank">{props.add}/{props.city}/{props.state}</a></li>

                                </ul>
                                <br />
                                <br />

                            </div>

                            <div id="contactDetails" className="quickFade delayFour">
                                <ul>
                                    <li>e: <a href="mailto:joe@bloggs.com" target="_blank">{props.mail}</a></li>
                                    <li>linkdin :<a href="http://www.bloggs.com">{props.linkd}</a></li>
                                    <li>github:<a href="http://www.bloggs.com">{props.git}</a></li>
                                    <li>m: {props.number}</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>

                        <div id="mainArea" className="quickFade delayFive">
                            <section>
                                <article>
                                    <div className="sectionTitle">
                                        <h1>Personal Profile</h1>
                                    </div>

                                    <div className="sectionContent">
                                        <p>{props.pro}</p>
                                    </div>
                                </article>
                                <div className="clear"></div>
                            </section>


                            <section>
                                <div className="sectionTitle">
                                    <h1>Work Experience</h1>
                                </div>

                                <div className="sectionContent">
                                    <article>
                                        <h2>{props.work1}</h2>
                                        <p className="subDetails">{props.start1}</p>
                                        <p className="subDetails">{props.end1}</p>
                                    </article>

                                    <article>
                                        <h2>{props.work2}</h2>
                                        <p className="subDetails">{props.start2}</p>
                                        <p className="subDetails">{props.end2}</p>
                                    </article>


                                </div>
                                <div className="clear"></div>
                            </section>


                            <section>
                                <div className="sectionTitle">
                                    <h1>Key Skills</h1>
                                </div>

                                <div className="sectionContent">
                                    <ul className="keySkills">
                                        <li>{props.skill1}</li>
                                        <li>{props.skill2}</li>
                                        <li>{props.skill3}</li>
                                        <li>{props.skill4}</li>
                                        <li>{props.skill5}</li>
                                        <li>{props.skill6}</li>

                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </section>


                            <section>
                                <div className="sectionTitle">
                                    <h1>Education</h1>
                                </div>

                                <div className="sectionContent">
                                    <article>
                                        <h2>primary:{props.prim}</h2>
                                        <p className="subDetails">boards:{props.boardp}</p>
                                        <p>{props.primp}</p>
                                    </article>

                                    <article>
                                        <h2>Secondary:{props.sec}</h2>
                                        <p className="subDetails">boards:{props.boards}</p>
                                        <p>{props.secp}</p>
                                    </article>
                                    <article>
                                        <h2>Graduation:{props.grad}</h2>
                                        <p className="subDetails">univercvity:{props.uni}</p>
                                        <p>{props.gradp}</p>
                                    </article>
                                    <article>
                                        <h2> Post Graduation:{props.post}</h2>
                                        <p className="subDetails">univercvity:{props.postu}</p>
                                        <p>{props.postp}</p>
                                    </article>
                                </div>
                                <div className="clear"></div>
                            </section>
                            <section>
                                <div className="sectionTitle">
                                    <h1>Achievements</h1>
                                </div>

                                <div className="sectionContent">
                                    <ul className="keySkills">
                                        <li>{props.award}</li>


                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </section>
                            <section>
                                <div className="sectionTitle">
                                    <h1>Hobbies</h1>
                                </div>

                                <div className="sectionContent">
                                    <ul className="keySkills">
                                        <li>{props.hobbies1}</li>
                                        <li>{props.hobbies2}</li>
                                        <li>{props.hobbies3}</li>
                                        <li>{props.hobbies4}</li>
                                        <li>{props.hobbies5}</li>


                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </section>

                        </div>
                    </div>

                </body>
            </div>
            <div />
        </div>
    )
}
export default Temp3;
