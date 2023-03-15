import React from "react";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <form autoComplete="off">
        <input type = "text" name="todos" id="todos" required placeholder="What needs to be done?"/>
        <button type="submit"> Create </button>
      </form>
      <ul>
        <li>
          <label htmlFor="" >
            <input type="checkbox" id=""/>
            Coding
          </label>
          <button>Edit</button>
        </li>
      </ul>

      <ul>
        <li>
          <label htmlFor="" className="active">
            <input type="checkbox" id=""/>
            Coding
          </label>
          <button>Edit</button>
        </li>
      </ul>

      <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all"/>
          All
        </label>
        <p>You have 0 to do</p>
        <button id="delete">Delete</button>
      </div>
    </div>
  );
}

export default App;
