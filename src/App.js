import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RecipeIndexPage from "./Pages/IndexRecipePage/IndexRecipePage";
import DetailsRecipePage from "./Pages/DetailsRecipePage/DetailsRecipePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={LoginPage} />
        <Route path="/mealPrep" element={<RecipeIndexPage />} />
        <Route path="/mealPrep/:id" element={<DetailsRecipePage />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
