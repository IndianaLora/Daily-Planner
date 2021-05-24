import "./App.css";
import Quotes from "./Quotes";

function App() {
  const clickHandler = () => {
    return alert("What's up!");
  };
  return (
    <div className="App">
      <h1>Hello world!!</h1>
      <button onClick={clickHandler}>Click me ☻</button>
      <Quotes />
    </div>
  );
}

export default App;
