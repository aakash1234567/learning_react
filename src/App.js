import React, { Component } from "react";
import Ecomm from "./components/ecomm_and_testing/Ecomm";
import Crypto from "./components/Crypto/Crypto";
import Temp from "./components/ecomm_and_testing/Temp";
import Gallery from "./components/Gallery/Main";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GRecaptcha from "./components/g_recap";

class App extends Component {
	render() {
		return (
			<>
				<Router>
					<div>
						<h1>Choose From </h1>
						<nav>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/ecom">E-Commerce</Link>
								</li>
								<li>
									<Link to="/crypto">Crypto</Link>
								</li>
								<li>
									<Link to="/temp">Testing</Link>
								</li>
								<li>
									<Link to="/gallery">Gallery</Link>
								</li>
								<li>
									<Link to="/recap">Google Recaptcha</Link>
								</li>
							</ul>
						</nav>
						{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
						<Switch>
							<Route path="/ecom">
								<Ecomm />
							</Route>
							<Route path="/crypto">
								<Crypto />
							</Route>
							<Route path="/temp">
								<Temp />
							</Route>
							<Route path="/gallery">
								<Gallery />
							</Route>
							<Route path="/recap">
								<GRecaptcha />
							</Route>
							<Route path="/"></Route>
						</Switch>
					</div>
				</Router>
			</>
		);
	}
}

export default App;
