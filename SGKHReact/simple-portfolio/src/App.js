import React from 'react'
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';




const App = () => {

  const greeting = "Hello React!";
  
  
  return (
    <div>
			<Router>
				<Navbar />
				<h1 className="greeting">{greeting}</h1>
				<p>React is a Javascript library for building user interfaces</p>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/projects" element={<Projects />} />
					<Route path="/about" element={<About />}/>
				</Routes>
			</Router>

		</div>
  );
};

export default App;
