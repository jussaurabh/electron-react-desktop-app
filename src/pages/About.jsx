import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="App">
			<header className="App-header" style={{ backgroundColor: "white" }}>
				<img src={logo} className="App-logo" alt="logo" />
				<p style={{ color: "black" }}>About page works</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>

				<Link className="App-link" to="/">
					Home page
				</Link>
			</header>
		</div>
	);
};

export default About;
