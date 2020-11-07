import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Description from "./components/Description" 
import Info from "./components/Info.jsx"
import Contact from "./components/Contact.jsx"
import ABOUT from "./components/ABOUT.jsx"
import Portfolio from "./components/Portfolio/Portfolio"
function App() {

  return (
   
<div>
  <div>
<Nav/>
</div>
<div>
<div>
<Description />
</div>
<div className="line"></div> 
<div>
<Info />
</div>
<div className="line"></div>
<Portfolio />
<div className="line"></div>
<div>
<Contact/>
</div>
<div className="line"></div>
<ABOUT />
<div className="line"></div>
</div>
</div>
  );
}

export default App;

