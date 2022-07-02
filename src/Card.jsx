import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img.png";



const Card = (props) =>{
 return(
  <>
  
      <div className="col-md-4 col-10 mx-auto">
      <div class="card">
       <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc}/>
     <div class="card-body">
        <h5 class="card-title font-weight-bold">{props.title}</h5>
           <p class="card-text">
          {props.content}
           </p>
           <NavLink to="./Contact" class="btn btn-primary">
            Contact Me
             </NavLink>
            </div>
            </div>
             </div>

  
     
  </>
 );

};

export default Card;