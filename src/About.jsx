import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import { NavLink } from "react-router-dom";
import web from "../src/images/photo.png"
import "./index.css"
import Common from "./Common";


const About = () =>{
 return(
  <>
  <Common
   name="Welcome to About Page" 
   imgsrc={web} 
   visit="/contact" 
   btname="Contact Now"/>
  </>
 );

};

export default About;