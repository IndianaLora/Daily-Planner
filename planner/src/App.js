import "./App.css";
import Quotes from "./components/Quotes";
import TodoList from "./components/TodoList";
function App() {
  const clickHandler = () => {
    return alert("What's up!");
  };
  return (
    <div className="App">
      <h1>Hello world!!</h1>
     
      <Quotes />
      <TodoList />
      <button onClick={clickHandler}>Click me ☻</button>
    </div>
  );
}

export default App;
