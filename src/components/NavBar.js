import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    // <nav>
    //   <div className="container dark ">
    //     <NavLink to="/" className="brand-logo ">
    //       <h4> HEALTHY MEALS</h4>{" "}
    //     </NavLink>
    //     <ul className="right">
    //       <li>
    //         <NavLink to="/diets/new">
    //           <h6> Add Your Diet Plan</h6>{" "}
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/diets">
    //           {" "}
    //           <h6> Check Out Diet Plans</h6>
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <h4> HEALTHY MEALS</h4>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/diets/new">
              Add Your Diet Plan
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/diets">
              Check Out Diet Plans
            </a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand" href="">
              <img
                src="src/heart-health-and-diet-1581429841.jpg"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
