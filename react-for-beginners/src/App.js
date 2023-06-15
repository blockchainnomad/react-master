import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    console.log(toDos);
  };
  const deleteBtn = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteBtn(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
