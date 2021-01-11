import React, { Component } from "react";
import { Link } from "react-router-dom";

class ThankYou extends Component {
render() {
  return (
    <div className="col-md-6 mx-auto mt-5">
    <h1 className="header-h1 text-center my-4">Thank You Please Wait For Your Badge</h1>
    
    <Link
          to="/RegisterVisitor"
          className="btn btn-lg btn-outline-success mr-2 btn-landing"
        >
          LogIn
        </Link> 

        
        <Link
          to="/SignoutVisitor"
          className="btn btn-outline-info btn-lg  mr-2 btn-landing"
        >
          LogOut
        </Link>
    
    
    
    
    
    </div>
  );


  



}
}
export default ThankYou;