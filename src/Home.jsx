import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import { NavLink } from "react-router-dom";
import web from "../src/images/img.png"
import "./index.css"
import Common from "./Common";


const Home = () =>{
 return(
  <>
  <Common
   name="Your Wedding, Your Way" 
   imgsrc={web} 
   visit="/service" 
   btname="Get Started"/>
  </>
 );

};

export default Home;