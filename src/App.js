import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/counter";

function App() {
  const [likes, setLikes] = useState(0);
  function increment() {
    setLikes(likes + 1);
  }
  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div className="App">
      <ClassCounter/>
    </div>
  );
}

export default App;
