import React from 'react'
import { Link } from "react-router-dom";
import temp1 from "./images/temp1.png"
import temp3 from "./images/temp3.png"
import last from "./images/last.png"



function View() {

  return (
    <div>
          <div style={{ width: "400px", border: "2px solid black", height: "60px", display: "flex", justifyContent: "center", margin: "auto", marginTop: "40px", backgroundColor: "#e5b73b" }}>
        <h2 style={{ padding: "10px" }}>CHOOSE TEMPLATE</h2>
      </div>
      <div style={{display: "flex",flexDirection: "row" ,justifyContent:"center",alignItems:"center" , marginTop:"5rem",border:"5px #ffcc33 outset",marginRight:"5rem",marginLeft:"5rem",backgroundColor:"gray"}}>
        <div class="card" style={{ width: "18rem" ,height:"15rem", margin:"6rem",border:"3px #e5b73b solid",overflow:'hidden'}}>
          <img class="card-img-top" src={ temp1} height="100" width="50" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <Link to='/templates'><a href="#" class="btn btn-warning" >TEMPLATE 1</a></Link>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" ,height:"15rem", margin:"6rem",border:"3px #e5b73b solid",overflow:'hidden'}}>
          <img class="card-img-top" src={ temp3 } height="100" width="50" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <Link to='/temp2'><a href="#" class="btn btn-warning">TEMPLATE 2</a></Link>
          </div>

        </div>
        <div class="card" style={{ width: "18rem" ,height:"15rem", margin:"6rem",border:"3px #e5b73b solid",overflow:'hidden'}}>
          <img class="card-img-top" src={last} height="100" width="50" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <Link to='/temp3'><a href="#" class="btn btn-warning" >TEMPLATE 3</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View;
