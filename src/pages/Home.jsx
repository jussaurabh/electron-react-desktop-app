import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Home page works</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>

				<Link className="App-link" to="/about">
					About page
				</Link>
			</header>
		</div>
	);
};

export default Home;
