import React from "react";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import RecipeIndex from "./Recipes/RecipeIndex";
import CategoryRecipes from "./pages/CategoryRecipes";
import Admin from "./pages/Admin";

function Routes() {
  return (
    <Switch>
      <Route path="/category/:id/recipe">
        <CategoryRecipes />
      </Route>
      <Route path="/recipes">
        <Admin />
      </Route>
      <Route path="/">
        <RecipeIndex />
      </Route>
    </Switch>
  );
}

export default Routes;
