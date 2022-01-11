import { Form, Button, Col, Row } from "react-bootstrap"
import DatePicker from "react-datepicker";
import {Link} from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Calendar from 'react-calendar';



function Home({showData}) {
  const [value, onChange] = useState();
  // personal
  const [name, setName] = useState('');
  const [lastname, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  const [profile, setprofile] = useState('');
  const [github, setgit] = useState('');
  const [linkdin, setlinkdin] = useState('');
  const [address, setaddress] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [zip, setzip] = useState('');


  // educational

  const [primary, setprimary] = useState('');
  const [secondary, setsecondary] = useState('');
  const [boardp, setboardp] = useState('');
  const [boards, setboards] = useState('');
  const [percentagep, setpercentagep] = useState('');
  const [percentages, setpercentages] = useState('');
  const [graduation, setgraduation] = useState('');
  const [univercity, setunivercity] = useState('');
  const [graduationp, setgraduationp] = useState('');
  const [postgraduation, setpostgraduation] = useState('');
  const [postunivercity, setpostunivercity] = useState('');
  const [postgraduationp, setpostgraduationp] = useState('');

  // skills
  const [skill1, setskill1] = useState('');
  const [skill2, setskill2] = useState('');
  const [skill3, setskill3] = useState('');
  const [skill4, setskill4] = useState('');
  const [skill5, setskill5] = useState('');
  const [skill6, setskill6] = useState('');

  // work experience
  const [work1, setwork1] = useState('');

  const [start1, setstart1] = useState('');
  const [end1, setend1] = useState('');
  const [work2, setwork2] = useState('');
  const [start2, setstart2] = useState('');
  const [end2, setend2] = useState('');

  // achievments
  const [awards, setawards] = useState('');

  // hobbies
  const [hobbie1, sethobbie1] = useState('');
  const [hobbie2, sethobbie2] = useState('');
  const [hobbie3, sethobbie3] = useState('');
  const [hobbie4, sethobbie4] = useState('');
  const [hobbie5, sethobbie5] = useState('');



  
  return (
    <>
      <div style={{ width: "400px", border: "2px solid black", height: "60px", display: "flex", justifyContent: "center", margin: "auto", marginTop: "40px", backgroundColor: "#d6b600" }}>
        <h2 style={{ padding: "10px" }}>YOUR DETAILS</h2>
      </div>
      <div style={{
        display: "flex", justifyContent: "center", marginTop: "2rem", flexDirection: "column", marginLeft: "10vw", marginRight: "10vw"
        , border: "2px solid #d6b600", backgroundColor: "white", padding: "10px"
      }}>
        <h3 style={{ display: "flex", justifyContent: "center", color: "#d6b600" }}>PERSONAL INFORMATION</h3>
        <hr style={{ backgroundColor: "#d6b600", width: "100%" }} />
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="form.Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="form.Name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter lastname" onChange={(e) => setlastName(e.target.value)} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="form.Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="form.Name">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control label='Phone number input' id='typePhone' type='tel' onChange={(e) => setphone(e.target.value)} />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="form.Name">
            <Form.Label>profile</Form.Label>
            <Form.Control type="text" placeholder="Enter profile name" onChange={(e) => setprofile(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="form.Name">
            <Form.Label>GitHub Link</Form.Label>
            <Form.Control type="text" placeholder="" onChange={(e) => setgit(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="form.Name">
            <Form.Label>Linkdin Link</Form.Label>
            <Form.Control type="text" placeholder="" onChange={(e) => setlinkdin(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" onChange={(e) => setaddress(e.target.value)} />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control onChange={(e) => setcity(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>State</Form.Label>
              <Form.Control onChange={(e) => setstate(e.target.value)} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control onChange={(e) => setzip(e.target.value)} />
            </Form.Group>
          </Row>

          {/* educational */}

          <h3 style={{ display: "flex", justifyContent: "center", color: "#d6b600" }}>EDUCATION</h3>
          <hr style={{ backgroundColor: "#d6b600", width: "100%" }} />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Institute/Primary</Form.Label>
              <Form.Control type="text" placeholder="institute name" onChange={(e) => setprimary(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Board</Form.Label>
              <Form.Control onChange={(e) => setboardp(e.target.value)} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Percentage</Form.Label>
              <Form.Control type="text" placeholder="%" onChange={(e) => setpercentagep(e.target.value)} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Institute/Secondary</Form.Label>
              <Form.Control type="text" placeholder="institute name" onChange={(e) => setsecondary(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Board</Form.Label>
              <Form.Control onChange={(e) => setboards(e.target.value)} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Percentage</Form.Label>
              <Form.Control type="text" placeholder="%" onChange={(e) => setpercentages(e.target.value)} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Graduation</Form.Label>
              <Form.Control type="text" placeholder="institute name" onChange={(e) => setgraduation(e.target.value)} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Post Graduation</Form.Label>
              <Form.Control type="text" placeholder="institute name" onChange={(e) => setpostgraduation(e.target.value)} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Univercity Name</Form.Label>
              <Form.Control type="text" placeholder="name" onChange={(e) => setunivercity(e.target.value)} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Univercity Name</Form.Label>
              <Form.Control type="text" placeholder="name" onChange={(e) => setpostunivercity(e.target.value)} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Percentage In Graduation</Form.Label>
              <Form.Control type="text" placeholder="%" onChange={(e) => setgraduationp(e.target.value)} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Percentage In Post Graduation</Form.Label>
              <Form.Control type="text" placeholder="%" onChange={(e) => setpostgraduationp(e.target.value)} />
            </Form.Group>
          </Row>

          {/* skills */}

          <h3 style={{ display: "flex", justifyContent: "center", color: "#d6b600" }}>SKILLS</h3>
          <hr style={{ backgroundColor: "#d6b600", width: "100%" }} />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="1." onChange={(e) => setskill1(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="2." onChange={(e) => setskill2(e.target.value)} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="3." onChange={(e) => setskill3(e.target.value)} />
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="4." onChange={(e) => setskill4(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="5." onChange={(e) => setskill5(e.target.value)} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="6." onChange={(e) => setskill6(e.target.value)} />
            </Form.Group>

          </Row>

          {/* work experience */}

          <h3 style={{ display: "flex", justifyContent: "center", color: "#d6b600" }}>WORK EXPERIENCE</h3>
          <hr style={{ backgroundColor: "#d6b600", width: "100%" }} />

          <Row className="mb-3">
            <Col>
            <Form.Group as={Col} controlId="formGridCity">
              {/* <Form.Label></Form.Label> */}
              <Form.Control type="text" placeholder=" 1. Company Name"onChange={(e) => setwork1(e.target.value)} />
            </Form.Group>
              <Form.Group as={Col} controlId="formGridZip"></Form.Group>
              <p>Starting Date</p>
                <input type='date' onChange={(e)=>setstart1(e.target.value)}/>
                <p>Ending Date</p>
                <input type='date' onChange={(e)=>setend1(e.target.value)}/>
            </Col>

            <Col>
              <Form.Group as={Col} controlId="formGridZip"></Form.Group>
              <Form.Control type="text" placeholder="2. Company Name" onChange={(e) => setwork2(e.target.value)} />
              <p>Starting Date</p>
              <input type='date' onChange={(e)=>setstart2(e.target.value)}/>
              <p>Ending Date</p>
              <input type='date' onChange={(e)=>setend2(e.target.value)}/>
            </Col> 
          </Row>

          {/* achivements */}


          <h3 style={{ display: "flex", justifyContent: "center", color: "#d6b600" }}>ACHIVEMENTS</h3>
          <hr style={{ backgroundColor: "#d6b600", width: "100%" }} />

          <Form.Group controlId="form.Textarea">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(e) => setawards(e.target.value)}/>
          </Form.Group>


          <h3 style={{ display: "flex", justifyContent: "center", color: "#d6b600" }}>HOBBIES</h3>
          <hr style={{ backgroundColor: "#d6b600", width: "100%" }} />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="1." onChange={(e) => sethobbie1(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="2." onChange={(e) => sethobbie2(e.target.value)}/>
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="3." onChange={(e) => sethobbie3(e.target.value)}/>
            </Form.Group>



            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="4." onChange={(e) => sethobbie4(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="5." onChange={(e) => sethobbie5(e.target.value)}/>
            </Form.Group>



          </Row>
                         

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="All information is relevent" />
          </Form.Group>


          <div class="text-center">
          <Link to='/view'>

            <Button variant="warning" type="submit" onClick={()=>showData(name, lastname, email, phone, profile, github, linkdin, address, city, state, zip, primary, secondary, boardp, boards, percentagep, percentages, graduation, univercity, graduationp, postgraduation, postunivercity, postgraduationp, skill1, skill2, skill3, skill4, skill5, skill6,work1,work2, start1, start2, end1, end2, hobbie1, hobbie2, hobbie3, hobbie4, hobbie5,awards)}>
              Show Templates
            </Button>
          </Link>
          </div>
        </Form>
        {/* <Temp /> */}
      </div>
    </>
  );
}

export default Home;