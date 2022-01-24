import { Form, Button, Col, Row } from "react-bootstrap"
// import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
// import { propTypes } from "react-bootstrap/esm/Image";
// import Calendar from 'react-calendar';



function Home({firstname, email, phone}) {
  console.log(email);
  console.log(phone);

  const [allData, setAllData] = useState({
    name: firstname,
    lastname: '',
    email: email,
    phone: phone,
    profile: '',
    github: '',
    linkdin: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    primary: '',
    secondary: '',
    boardp: '',
    boards: '',
    percentagep: '',
    percentages: '',
    graduation: '',
    univercity: '',
    graduationp: '',
    postgraduation: '',
    postunivercity: '',
    postgraduationp: '',
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    skill5: '',
    skill6: '',
    work1: '',
    start1: '',
    end1: '',
    work2: '',
    start2: '',
    end2: '',
    awards: '',
    hobbie1: '',
    hobbie2: '',
    hobbie3: '',
    hobbie4: '',
    hobbie5: ''

  })


  const handlshow = (e) => {
    const { name, value } = e.target

    setAllData(presstate => ({
      ...presstate,
      [name]: value
    }))
  }

  const showData = () => {
    localStorage.setItem('allData', JSON.stringify(allData))
  }

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
              <Form.Control type="text" placeholder="Enter name" name='name' value={allData.name} onChange={handlshow} />
            </Form.Group>
            <Form.Group as={Col} controlId="form.Name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter lastname" name='lastname' value={allData.lastname} onChange={handlshow} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="form.Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name='email' value={allData.email} onChange={handlshow} />
            </Form.Group>
            <Form.Group as={Col} controlId="form.Name">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control label='Phone number input' id='typePhone' type='tel' name='phone' value={allData.phone} onChange={handlshow} />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="form.Name">
            <Form.Label>profile</Form.Label>
            <Form.Control type="text" placeholder="Enter profile name" name='profile' value={allData.profile} onChange={handlshow} />
          </Form.Group>
          <Form.Group as={Col} controlId="form.Name">
            <Form.Label>GitHub Link</Form.Label>
            <Form.Control type="text" placeholder="" name='github' value={allData.github} onChange={handlshow} />
          </Form.Group>
          <Form.Group as={Col} controlId="form.Name">
            <Form.Label>Linkdin Link</Form.Label>
            <Form.Control type="text" placeholder="" name='linkdin' value={allData.linkdin} onChange={handlshow} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" name='address' value={allData.address} onChange={handlshow} />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control name='city' value={allData.city} onChange={handlshow} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>State</Form.Label>
              <Form.Control name='state' value={allData.state} onChange={handlshow} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control name='zip' value={allData.zip} onChange={handlshow} />
            </Form.Group>
          </Row>

          {/* educational */}

          <h3 style={{ display: "flex", justifyContent: "center", color: "#d6b600" }}>EDUCATION</h3>
          <hr style={{ backgroundColor: "#d6b600", width: "100%" }} />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Institute/Primary</Form.Label>
              <Form.Control type="text" placeholder="institute name" name='primary' value={allData.primary} onChange={handlshow} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Board</Form.Label>
              <Form.Control name='secondary' value={allData.secondary} onChange={handlshow} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Percentage</Form.Label>
              <Form.Control type="text" placeholder="%" name='boardp' value={allData.boardp} onChange={handlshow} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Institute/Secondary</Form.Label>
              <Form.Control type="text" placeholder="institute name" name='boards' value={allData.boards} onChange={handlshow} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Board</Form.Label>
              <Form.Control name='percentagep' value={allData.percentagep} onChange={handlshow} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Percentage</Form.Label>
              <Form.Control type="text" placeholder="%" name='percentages' value={allData.percentages} onChange={handlshow} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Graduation</Form.Label>
              <Form.Control type="text" placeholder="institute name" name='graduation' value={allData.graduation} onChange={handlshow} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Post Graduation</Form.Label>
              <Form.Control type="text" placeholder="institute name" name='postgraduation' value={allData.postgraduation} onChange={handlshow} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Univercity Name</Form.Label>
              <Form.Control type="text" placeholder="name" name='univercity' value={allData.univercity} onChange={handlshow} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Univercity Name</Form.Label>
              <Form.Control type="text" placeholder="name" name='postunivercity' value={allData.postunivercity} onChange={handlshow} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Percentage In Graduation</Form.Label>
              <Form.Control type="text" placeholder="%" name='graduationp' value={allData.graduationp} onChange={handlshow} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Percentage In Post Graduation</Form.Label>
              <Form.Control type="text" placeholder="%" name='postgraduationp' value={allData.postgraduationp} onChange={handlshow} />
            </Form.Group>
          </Row>

          {/* skills */}

          <h3 style={{ display: "flex", justifyContent: "center", color: "#d6b600" }}>SKILLS</h3>
          <hr style={{ backgroundColor: "#d6b600", width: "100%" }} />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="1." name='skill1' value={allData.skill1} onChange={handlshow} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="2." name='skill2' value={allData.skill2} onChange={handlshow} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="3." name='skill3' value={allData.skill3} onChange={handlshow} />
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="4." name='skill4' value={allData.skill4} onChange={handlshow} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="5." name='skill5' value={allData.skill5} onChange={handlshow} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="6." name='skill6' value={allData.skill6} onChange={handlshow} />
            </Form.Group>

          </Row>

          {/* work experience */}

          <h3 style={{ display: "flex", justifyContent: "center", color: "#d6b600" }}>WORK EXPERIENCE</h3>
          <hr style={{ backgroundColor: "#d6b600", width: "100%" }} />

          <Row className="mb-3">
            <Col>
              <Form.Group as={Col} controlId="formGridCity">
                {/* <Form.Label></Form.Label> */}
                <Form.Control type="text" placeholder=" 1. Company Name " name='work1' value={allData.work1} onChange={handlshow} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip"></Form.Group>
              <p>Starting Date</p>
              <input type='date' name='start1' value={allData.start1} onChange={handlshow} />
              <p>Ending Date</p>
              <input type='date' name='end1' value={allData.end1} onChange={handlshow} />
            </Col>

            <Col>
              <Form.Group as={Col} controlId="formGridZip"></Form.Group>
              <Form.Control type="text" placeholder="2. Company Name" name='work2' value={allData.work2} onChange={handlshow} />
              <p>Starting Date</p>
              <input type='date' name='start2' value={allData.start2} onChange={handlshow} />
              <p>Ending Date</p>
              <input type='date' name='end2' value={allData.end2} onChange={handlshow} />
            </Col>
          </Row>

          {/* achivements */}


          <h3 style={{ display: "flex", justifyContent: "center", color: "#d6b600" }}>ACHIVEMENTS</h3>
          <hr style={{ backgroundColor: "#d6b600", width: "100%" }} />

          <Form.Group controlId="form.Textarea">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={3} name='awards' value={allData.awards} onChange={handlshow} />
          </Form.Group>


          <h3 style={{ display: "flex", justifyContent: "center", color: "#d6b600" }}>HOBBIES</h3>
          <hr style={{ backgroundColor: "#d6b600", width: "100%" }} />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="1." name='hobbie1' value={allData.hobbie1} onChange={handlshow} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="2." name='hobbie2' value={allData.hobbie2} onChange={handlshow} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="3." name='hobbie3' value={allData.hobbie3} onChange={handlshow} />
            </Form.Group>



            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="4." name='hobbie4' value={allData.hobbie4} onChange={handlshow} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="5." name='hobbie5' value={allData.hobbie5} onChange={handlshow} />
            </Form.Group>



          </Row>


          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="All information is relevent" />
          </Form.Group>


          <div class="text-center">
            <Link to='/view'>

              {/* <Button variant="warning" type="submit" onClick={()=>showData(name, lastname, email, phone, profile, github, linkdin, address, city, state, zip, primary, secondary, boardp, boards, percentagep, percentages, graduation, univercity, graduationp, postgraduation, postunivercity, postgraduationp, skill1, skill2, skill3, skill4, skill5, skill6,work1,work2, start1, start2, end1, end2, hobbie1, hobbie2, hobbie3, hobbie4, hobbie5,awards)}>
              Show Templates
            </Button> */}

              <Button variant="warning" type="submit" onClick={() => showData()}>
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