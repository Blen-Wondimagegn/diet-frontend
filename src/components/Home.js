import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Welcome to HEALTHY MEALS!</h5>
            <p class="card-text">
              Diet is established among the most important influences on health
              in modern societies. Injudicious diet figures among the leading
              causes of premature death and chronic disease. Optimal eating is
              associated with increased life expectancy, dramatic reduction in
              lifetime risk of all chronic disease, and amelioration of gene
              expression. In this context, claims abound for the competitive
              merits of various diets relative to one another.
            </p>
            <a href="/diets" class="btn btn-secondary">
              Check Out What others are doing?
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Here are some of the Reviews and More! </h5>
            <p class="card-text">
              One of very good thing I did not expected to change, my “mojo” is
              back to levels like it was back when I was 18 years old. It even
              more adds to self esteem, family life and overall feeling. -
              Vigants Lesausks
            </p>
            <p>
              My fitness app for over 4 months now and I have lost 38 pounds and
              feel better than ever!!! Still have 6 more pounds to lose before I
              hit my goal but I feel absolutely amazing. - Karol Refati
            </p>
            <a href="/diets/new" class="btn btn-secondary">
              Add Your Experience
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
