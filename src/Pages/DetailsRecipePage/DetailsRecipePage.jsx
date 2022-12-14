import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const DetailsRecipePage = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [meal, setMeal] = useState();

  useEffect(() => {
    fetch(`http://localhost:9000/mealPrep/${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data));
  }, []);

  const deleteRecipe = (id) => {
    axios.delete(`http://localhost:9000/mealPrep/${id}`).then((res) => {
      navigate("/mealPrep");
    });
  };

  return (
    <div className="mx-5">
      <br></br>
      <a className="btn btn-outline-primary" href="/mealPrep">
        Go Back
      </a>
      <br></br>
      <br></br>
      <h1 className="text-center">{meal?.mealName}</h1>
      <br></br>
      <img
        className="img-fluid rounded mx-auto d-block"
        src={meal?.image}
        alt="something"
      ></img>
      <br></br> <br></br>
      <h2>About:</h2>
      {meal?.notes}
      <br></br>
      <br></br>
      <ul>
        <h2>Ingredients:</h2>
        {meal?.ingredients.map((item, index) => {
          return (
            <li key={index} className="col-sm">
              {" "}
              {item}{" "}
            </li>
          );
        })}
      </ul>
      <br></br>
      <div className="row">
        <ol>
          <h2>Instructions:</h2>
          {meal?.instructions.map((item, index) => {
            return (
              <li key={index} className="col-sm">
                {" "}
                {item}{" "}
              </li>
            );
          })}
        </ol>
      </div>
      <br></br>
      <hr></hr>
      <div className="jumbotron">
        <h2>Nutrition Facts:</h2>
        <br></br>
        <p>Protein: {meal?.protein}g</p>
        <p>Fat: {meal?.fat}g</p>
        <p>Carbs: {meal?.carbs}g</p>
        <p>Total Calories: {meal?.calories} kcal</p>
      </div>
      <br></br>
      <h6>Created By: {meal?.owner?.name}</h6>
      <br></br>
      <br></br>
      <form action="/mealPrep/{ meal._id }" method="POST">
        <textarea
          type="text"
          name="text"
          className="form-control"
          id="floatingTextarea2"
        ></textarea>
        <br></br>
        <button type="submit" className="btn btn-outline-primary">
          ADD COMMENT
        </button>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <form action="/mealPrep/{ meal._id }/edit">
        <input
          className="btn btn-outline-primary"
          type="submit"
          value="EDIT MEAL INFO"
        />
      </form>
      <br></br>
      <form action="/mealPrep/{ meal._id }/editMealPhoto">
        <input
          className="btn btn-outline-primary"
          type="submit"
          value="EDIT MEAL PHOTO"
        />
      </form>
      <br></br>
      <button
        onClick={() => deleteRecipe(meal?._id)}
        className="btn btn-outline-primary"
        type="submit"
      >
        DELETE MEAL
      </button>
      <br></br>
    </div>
  );
};

export default DetailsRecipePage;
