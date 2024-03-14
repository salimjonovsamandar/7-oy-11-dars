import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";

const defaultState = {
  todos: [],
};

function todoReducer(state = defaultState, actions) {
  if (actions.type == "ADD_TODO") {
    let copied = JSON.parse(JSON.stringify(state.todos));
    copied.push(actions.payload);
    return { ...state, todos: copied };
  } else if (actions.type == "REMOVE_TODO") {
    let copied = JSON.parse(JSON.stringify(state.todos));
    copied = copied.filter((el) => {
      return el.id != actions.payload;
    });

    return { ...state, todos: copied };
  } else {
    return state;
  }
}

export const store = createStore(todoReducer, composeWithDevTools());
