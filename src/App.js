import React, { Component } from "react";
import Ecomm from "./components/ecomm_and_testing/Ecomm";
import Crypto from "./components/Crypto/Crypto";
import Temp from "./components/ecomm_and_testing/Temp";
import Gallery from "./components/Gallery/Main";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GRecaptchav3 from "./components/g_recap_v3";
import GRecaptchav2 from "./components/g_recap_v2";

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
									<Link to="/recapv3">Google Recaptcha v3</Link>
								</li>
								<li>
									<Link to="/recapv2">Google Recaptcha v2</Link>
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
							<Route path="/recapv3">
								<GRecaptchav3 />
							</Route>
							<Route path="/recapv2">
								<GRecaptchav2 />
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
