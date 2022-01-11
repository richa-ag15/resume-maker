import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Templates from './components/Templates';
import View from './components/View';
import Temp2 from './components/Temp2';
import Temp3 from './components/Temp3';


function App() {
  const [value, onChange] = useState();
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
  const [work2, setwork2] = useState('');
  const [start1, setstart1] = useState('');
  const [end1, setend1] = useState('');
  const [start2, setstart2] = useState('');
  const [end2, setend2] = useState('');

  // achievments
  const [awards,setawards] = useState('');

  // hobbies
  const [hobbie1, sethobbie1] = useState('');
  const [hobbie2, sethobbie2] = useState('');
  const [hobbie3, sethobbie3] = useState('');
  const [hobbie4, sethobbie4] = useState('');
  const [hobbie5, sethobbie5] = useState('');


  const showData = (name, lastname, email, phone, profile, github, linkdin, address, city, state, zip, primary, secondary, boardp, boards, percentagep, percentages, graduation, univercity, graduationp, postgraduation, postunivercity, postgraduationp, skill1, skill2, skill3, skill4, skill5, skill6,work1,work2, start1, start2, end1, end2, hobbie1, hobbie2, hobbie3, hobbie4, hobbie5,awards) => {
    onChange(value)
    setlastName(lastname)
    setName(name)
    setEmail(email)
    setphone(phone)
    setprofile(profile)
    setgit(github)
    setlinkdin(linkdin)
    setaddress(address)
    setcity(city)
    setstate(state)
    setzip(zip)
    setprimary(primary)
    setsecondary(secondary)
    setboardp(boardp)
    setboards(boards)
    setpercentagep(percentagep)
    setpercentages(percentages)
    setgraduation(graduation)
    setunivercity(univercity)
    setgraduationp(graduationp)
    setpostgraduation(postgraduation)
    setpostunivercity(postunivercity)
    setpostgraduationp(postgraduationp)
    setskill1(skill1)
    setskill2(skill2)
    setskill3(skill3)
    setskill4(skill4)
    setskill5(skill5)
    setwork1(work1)
    setwork2(work2)
    setskill6(skill6)
    setstart1(start1)
    setstart2(start2)
    setend1(end1)
    setend2(end2)
    sethobbie1(hobbie1)
    sethobbie2(hobbie2)
    sethobbie3(hobbie3)
    sethobbie4(hobbie4)
    sethobbie5(hobbie5)
    setawards(awards)
    localStorage.setItem('name',name )
  }
  console.log(name);
  return (
    <>

      <Routes>
        <Route exact path="/" element={<Home showData={showData} />} />
        <Route exact path="/templates" element={<Templates last={lastname} nam={name} mail={email} number={phone} pro={profile} git={github} linkd={linkdin} add={address} city={city} state={state} code={zip} prim={primary} sec={secondary} primp={percentagep} secp={percentages} boardp={boardp} boards={boards} grad={graduation} uni={univercity} gradp={graduationp} post={postgraduation} postu={postunivercity} postp={postgraduationp} skill1={skill1}  skill2={skill2}  skill3={skill3}  skill4={skill4} skill5={skill5} skill6={skill6} work1={work1} work2={work2}  hobbies2={hobbie2} hobbies3={hobbie3} hobbies4={hobbie4} hobbies5={hobbie5} award={awards} start1={start1}  end1={end1} start2={start2}  end2={end2}/>}/>

        <Route exact path="/view" element={<View />} /> 
        <Route exact path="/temp2" element={<Temp2 last={lastname} nam={name} mail={email} number={phone} pro={profile} git={github} linkd={linkdin} add={address} city={city} state={state} code={zip} prim={primary} sec={secondary} primp={percentagep} secp={percentages} boardp={boardp} boards={boards} grad={graduation} uni={univercity} gradp={graduationp} post={postgraduation} postu={postunivercity} postp={postgraduationp} skill1={skill1}  skill2={skill2}  skill3={skill3}  skill4={skill4} skill5={skill5} skill6={skill6} work1={work1} work2={work2}  hobbies2={hobbie2} hobbies3={hobbie3} hobbies4={hobbie4} hobbies5={hobbie5} award={awards} start1={start1}  end1={end1} start2={start2}  end2={end2}/>}/>

        <Route exact path="/temp3" element={<Temp3 last={lastname} nam={name} mail={email} number={phone} pro={profile} git={github} linkd={linkdin} add={address} city={city} state={state} code={zip} prim={primary} sec={secondary} primp={percentagep} secp={percentages} boardp={boardp} boards={boards} grad={graduation} uni={univercity} gradp={graduationp} post={postgraduation} postu={postunivercity} postp={postgraduationp} skill1={skill1}  skill2={skill2}  skill3={skill3}  skill4={skill4} skill5={skill5} skill6={skill6} work1={work1} work2={work2}  hobbies2={hobbie2} hobbies3={hobbie3} hobbies4={hobbie4} hobbies5={hobbie5} award={awards} start1={start1}  end1={end1} start2={start2}  end2={end2}/>} />

      </Routes>
    </>
  );
}

export default App;
