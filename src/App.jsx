import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; //importing css for navbar from bootstarp
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; //importing js from bootstarp just to use dropdown in Navbar as to use that we have to import ths js
import { Switch,Route, Redirect } from "react-router-dom";
import Footer from "./Footer"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";

//14:52
const App = () =>{
 return(
  <>
  <Navbar/>
  <Switch>
     <Route exact  path="/" component={Home}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/Service" component={Service}/>
     <Route exact path="/Contact" component={Contact}/>
     <Redirect to="/"/>
  </Switch>
  <Footer/>
    
  </>
 );

};

export default App;