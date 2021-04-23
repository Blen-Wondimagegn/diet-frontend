import React from "react";
import { connect } from "react-redux";
import { deleteDiet } from "../actions/deleteDiet";
// import Likes from "../components/Likes";

const DietItem = ({ diet, deleteDiet }) => {
  return (
    // <div class="row">
    //     <div class="col-sm-6">
    //       <div class="card">
    //         <div class="card-body">
    //           <h5 class="card-title">Special title treatment</h5>
    //           <p class="card-text">
    //             With supporting text below as a natural lead-in to additional
    //             content.
    //           </p>
    //           <a href="#" class="btn btn-primary">
    //             Go somewhere
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div>

    <div class="col-sm-6">
      <div className="card">
        <div class="card-body">
          <h2 className="center ">Diet Reviews </h2>
          <h5 class="card-title">My Name is {diet.name}</h5>
          <br />
          <p class="card-text">
            I am a {diet.age} years old {diet.gender} {diet.height}, tall.
            <br />
            The type of Diet I follwed is called {diet.diet_type} <br />
            My start weight was {diet.start_weight} lbs. <br />I lost{" "}
            {diet.lost_weight} lbs with in {diet.duration}.<br />
          </p>
          <button onClick={() => deleteDiet(diet.id)}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteDiet })(DietItem);
