import React, { useEffect, useState } from "react";

import axios from "axios";

const NewRecipePage = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:9000/mealPrep`, formData).then((res) => {
      setFormData({
        mealName: "",
        image: "",
        cloudinary_id: "",
        notes: "",
        ingredients: [""],
        instructions: [""],
        protein: 0,
        fat: 0,
        carbs: 0,
        calories: 0,
      });
    });
  };

  return (
    <div class="mx-5">
      <br></br>

      <a class="btn btn-outline-primary" href="/mealPrep">
        Go Back
      </a>

      <br></br>
      <br></br>

      <h1>Add a Meal Prep</h1>

      <form onSubmit={handleSubmit}>
        <br></br>
        <br></br>
        <input
          class="form-control form-control-lg"
          type="text"
          name="mealName"
          value={formData.mealName}
          onChange={handleChange}
          placeholder="Meal Name"
          aria-label=".form-control-lg example"
        ></input>
        <br></br>
        <br></br>
        <div>
          <label for="formFileLg" class="form-label">
            Please include a photo of your meal prep!
          </label>
          <input
            class="form-control form-control-lg"
            id="formFileLg"
            type="file"
            name="image"
            value={formData.image}
            onChange={handleChange}
          ></input>
        </div>
        <br></br>
        <br></br>
        <div class="form-floating">
          <label for="floatingTextarea">About:</label>
          <textarea
            class="form-control"
            placeholder="Write a description of your meal here."
            id="floatingTextarea"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>
        <br></br>
        <br></br>
        <div class="ingredients">
          <div class="form-floating mb-3">
            <label for="floatingInput">Ingredients:</label>
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Add 1 ingredient. To add another, click the 'ADD ANOTHER INGREDIENT' button."
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
            ></input>
            <br></br>
          </div>
        </div>
        <div>
          <button
            type="button"
            id="ingreButton"
            onClick="AddIngredient()"
            class="btn btn-primary btn-sm"
          >
            ADD ANOTHER INGREDIENT
          </button>
        </div>
        <br></br>
        <br></br>
        <div class="instructions">
          Instructions:
          <br></br>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Write the steps to your recipe. To add another step, click the 'ADD ANOTHER STEP' button."
              id="floatingTextarea2"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              type="text"
            ></textarea>

            <br></br>
          </div>
        </div>
        <div>
          <button
            type="button"
            id="instrucButton"
            onClick="AddInstruction()"
            class="btn btn-primary btn-sm"
          >
            ADD ANOTHER STEP
          </button>
        </div>
        <br></br>
        <br></br>
        Protein:{" "}
        <input
          name="protein"
          value={formData.protein}
          onChange={handleChange}
          type="number"
        ></input>
        g<br></br>
        <br></br>
        Fat:{" "}
        <input
          name="fat"
          value={formData.fat}
          onChange={handleChange}
          type="number"
        ></input>
        g<br></br>
        <br></br>
        Carbs:{" "}
        <input
          name="carbs"
          value={formData.carbs}
          onChange={handleChange}
          type="number"
        ></input>
        g<br></br>
        <br></br>
        Calories:{" "}
        <input
          name="calories"
          value={formData.calories}
          type="number"
        ></input>{" "}
        kcal
        <br></br>
        <br></br>
        <input
          class="btn btn-outline-primary"
          type="submit"
          value="CREATE MEAL"
        ></input>
      </form>
    </div>
  );
};

export default NewRecipePage;
