import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RecipeIndexPage = () => {
  const [allMeals, setAllMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/mealPrep")
      .then((res) => res.json())
      .then((data) => setAllMeals(data));
  }, []);

  console.log(allMeals);

  return (
    <div className="mx-5">
      <br></br>

      <a className="btn btn-outline-primary" href="/logout">
        SIGN OUT
      </a>

      <h3 className="text-right">
        Signed In As:
        {/* <small className="text-muted"> {user.name}</small> */}
      </h3>

      <br></br>
      <br></br>

      <h1>WELCOME TO MEAL PREP APP BY JRK</h1>

      <br></br>
      <br></br>

      <table className="table table-striped" id="sortable">
        <thead>
          <tr>
            <th>Meal Name</th>
            <th>Protein</th>
            <th>Fat</th>
            <th>Carbs</th>
            <th>Calories</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          {allMeals?.map((mealPrep, i) => {
            return (
              <tr key={i}>
                <td>
                  <Link to={`/mealPrep/${mealPrep._id}`}>
                    {" "}
                    {mealPrep.mealName}
                  </Link>
                </td>
                <td> {mealPrep.protein}g</td>
                <td> {mealPrep.fat}g</td>
                <td> {mealPrep.carbs}g</td>
                <td> {mealPrep.calories} kcal</td>
                <td> {mealPrep.owner?.name} </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <br></br>

      <a
        className="btn btn-outline-primary col text-center"
        href="/mealPrep/new"
      >
        POST A NEW MEAL PREP
      </a>
    </div>
  );
};

export default RecipeIndexPage;
