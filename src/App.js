import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
	return (
		<Fragment>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
		</Fragment>
	);
}

export default App;
