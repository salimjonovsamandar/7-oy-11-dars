import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const todoRef = useRef();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function handleAdd(e) {
    e.preventDefault();
    const todoItem = {
      id: Date.now(),
      name: todoRef.current.value,
    };
    dispatch({ type: "ADD_TODO", payload: todoItem });
    todoRef.current.value = "";
  }
  function handleDelete(id) {
    dispatch({ type: "REMOVE_TODO", payload: id });
  }

  return (
    <div className="contain">
      <form className="Form">
        <input
          className="input"
          ref={todoRef}
          type="text"
          placeholder="Enter..."
        />
        <button onClick={handleAdd} className="button">
          ADD
        </button>
      </form>
      <div className="item">
        {todos.map((el, index) => {
          return (
            <div key={index} className="wrapper">
              <h3>{el.name}</h3>
              <button
                onClick={() => {
                  handleDelete(el.id);
                }}
                className="btn"
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
