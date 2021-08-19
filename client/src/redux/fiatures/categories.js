const initialState = {
  items: [],
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case "load/categories/fulfilled":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state
  }
};

export default categories

export const loadCategories = () => {
  return async (dispatch) => {
    const res = await fetch("/category1");
    const json = await res.json();

    dispatch({ type: "load/categories/fulfilled", payload: json });
  };
};
