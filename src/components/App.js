import React , {useState} from "react";
import "../styles/App.css";

const App = () => {
  const [text , setText] = useState(true);
  const handleClick = () => {
    setText(!text)
  }
  return (
    <div id="main">
      {text ? 
      <div id="welcome-div">
        <h1>Welcome to Newton School!!</h1>
      </div> :
      <div id="about-div">
        <h1>
          Newton School is a neo-university providing highly immersive tech
          learning to millions of students, to tap into new-age tech
          opportunities.
        </h1>
      </div>}
      <button id="toggle" onClick = {()=>handleClick()}>Toggle</button>
    </div>
  );
};

export default App;
