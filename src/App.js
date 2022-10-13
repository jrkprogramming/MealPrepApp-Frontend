import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { gapi } from "gapi-script";
import { useEffect } from "react";

import LoginPage from "./Pages/LoginPage/LoginPage";
import RecipeIndexPage from "./Pages/IndexRecipePage/IndexRecipePage";
import DetailsRecipePage from "./Pages/DetailsRecipePage/DetailsRecipePage";
import NewRecipePage from "./Pages/NewRecipePage/NewRecipePage";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "8383221493-ekdghn5ufj7hghm92nkh2u6qh4op1ej1.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mealPrep" element={<RecipeIndexPage />} />
        <Route path="/mealPrep/new" element={<NewRecipePage />} />
        <Route path="/mealPrep/:id" element={<DetailsRecipePage />} />
      </Routes>
    </div>
  );
}

export default App;
