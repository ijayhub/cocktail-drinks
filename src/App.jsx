import React from 'react'
// import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import DrinkDetail from './components/DrinkDetail';

const App = () => {
  return (
		<div>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='About' element={<About />}></Route>
				<Route path='/drinks/:id' element={<DrinkDetail/>}></Route>
			</Routes>
		</div>
	);
}

export default App
