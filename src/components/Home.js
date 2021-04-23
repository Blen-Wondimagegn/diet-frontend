import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Do you want to change your life Style?</h5>
            <p class="card-text">
              Welcome to HEALTHY MEALS! Diet is established among the most
              important influences on health in modern societies. Injudicious
              diet figures among the leading causes of premature death and
              chronic disease. Optimal eating is associated with increased life
              expectancy, dramatic reduction in lifetime risk of all chronic
              disease, and amelioration of gene expression. In this context,
              claims abound for the competitive merits of various diets relative
              to one another.
            </p>
            <a href="#" class="btn btn-primary">
              Check Out What others are doing?
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Add Your Experience
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
