import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import recipes from "./fiatures/recipes";
import categories from "./fiatures/categories"

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = createStore(combineReducers({ recipes, categories }), applyMiddleware(thunk, logger));
