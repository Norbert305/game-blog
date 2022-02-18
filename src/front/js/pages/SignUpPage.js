import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";




export const SignUpPage =() => {


return (
    <div className="signUp">
    <div className="row">
        <div className="col-4"></div>
    <div className="col-4 middle">
    <form>
        <h1 className="text-center letter-shadow" style={{color: "wheat"}}>Sign Up</h1>
    <div className="mb-3">
    <label for="exampleInputName1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputNumber" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="exampleInputPhoneNumber1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputNumber" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputAddress1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div className="col-4"></div>
</div>
</div>
</div>
)







}