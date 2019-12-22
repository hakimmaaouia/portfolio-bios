import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Description from "./components/Description" 
import Info from "./components/Info.jsx"
function App() {
  const info =  {name: "John", age: 31, city: "New York"}
  return (
   
<div>
  <div>
<Nav info={info} />
</div>
<div>
<Description />
</div>
<div className="line"></div>
<div>
<Info />
</div>
<div className="line"></div>

</div>
  );
}

export default App;

