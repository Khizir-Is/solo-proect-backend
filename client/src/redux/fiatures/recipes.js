const initialState = {
  loading: false,
  items: [],
  error: null,
  deleting: false,
  adding: false,
  creating: false,
  editing: false,
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case "recipes/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "recipes/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "recipes/load/rejected":
      return {
        loading: false,
        error: action.error,
      };
    case "recipes/category/pending":
      return {
        ...state,
        loading: true,
      };
    case "recipes/category/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "recipes/category/rejected":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "recipes/delete/pending":
      return {
        ...state,
        deleting: true,
      };

    case "recipes/delete/fulfilled":
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
        deleting: false,
      };
    case "recipes/delete/rejected":
      return {
        ...state,
        error: action.payload,
        deleting: false,
      };

    case "recipes/add/pending":
      return {
        ...state,
        adding: true,
      };

    case "recipes/add/fulfilled":
      return {
        ...state,
        adding: false,
        items: [action.payload, ...state.items],
      };

    default:
      return state;
  }
};

export default recipes;

export const fetchRecipesByCategoryId = (id) => {
  return async (dispatch) => {
    dispatch({ type: "recipes/category/pending" });
    try {
      const response = await fetch(`/category/${id}/recipe`);
      const json = await response.json();
      dispatch({ type: "recipes/category/fulfilled", payload: json });
    } catch (e) {
      dispatch({
        type: "recipes/category/rejected",
        error: e.toString(),
      });
    }
  };
};

export const loadAllRecipes = () => {
  return async (dispatch) => {
    dispatch({ type: "recipes/load/pending" });

    try {
      const response = await fetch("/recipes");
      const json = await response.json();

      dispatch({ type: "recipes/load/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "recipes/load/rejected", error: e.toString() });
    }
  };
};

export const deleteRecipes = (id) => {
  return async (dispatch) => {
    dispatch({ type: "recipes/delete/pending" });

    try {
      await fetch(`/recipe/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "recipes/delete/fulfilled", payload: id });
    } catch (e) {
      dispatch({ type: "recipes/delete/rejected", error: e.toString() });
    }
  };
};

export const addRecipes = (data) => {
  return async (dispatch) => {
    dispatch({ type: "recipes/post/pending" });
    try {
      const response = await fetch(`category/${data?.categoryId}/recipe`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          name: data.name,
          calories: data.calories,
          img: data.img,
          description: data.description,
          compound: data.compound,
          categoryId: data.categoryId,
        }),
      });
      const json = await response.json();
      dispatch({ type: "recipes/add/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "recipes/add/rejected", error: e.toString() });
    }
  };
};

// export const loadSingleCategoryId = (id) => {
//   return async (dispatch, useSelector) = {
//     const { category } =
//   }
// }

export const loadSingleRecepById = (id) => {
  return async (dispatch, getState) => {
    const { recipes } = getState();

    if (recipes.items.find((recep) => recep._id === id)) {
      return;
    }
    dispatch({ type: "recipes/fetch-single/pending" });
    try {
      const response = await fetch(`/recipes/${id}`);
      const recep = await response.json();

      dispatch({ type: "recipes/fetch-single/fulfilled", payload: recep });
    } catch (e) {
      dispatch({ type: "recipes/fetch-single/fulfilled", error: e.toString() });
    }
  };
};
