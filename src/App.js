import React from 'react';
import './App.css'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Board from './Board';


class App extends React.Component {
	render() {
		return (
			<div className="app Grid">
			    <Navbar />
				<Sidebar />
				<Board />				
			</div>
		);
	}
}

export default App;


