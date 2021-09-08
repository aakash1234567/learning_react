import React, { useState, useEffect } from "react";
import Spider from "./Spider";
import { useSelector, useDispatch } from "react-redux";
import { loginReducer, adduserReducer } from "./actions";

const LoginPage = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginReducer(name, password, users));
	};
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const auth = useSelector((store) => store.Login);
	const users = useSelector((store) => store.Users);
	console.log(users);
	const dispatch = useDispatch();
	const handleRegister = (e) => {
		console.log("DSa");
		dispatch(adduserReducer(name, password));
	};
	return (
		<>
			<div
				style={{
					height: "fit-content",
					width: "30%",
					backgroundColor: "white",
					margin: "5% auto",
					position: "relative",
				}}
				id="form"
			>
				<form onSubmit={(e) => handleSubmit(e)}>
					<Spider />
					<div style={{ margin: "5%" }}>
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							aria-describedby="nameHelp"
							style={{ width: "80%" }}
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<div id="nameHelp" className="form-text">
							We'll never share your name with anyone else.
						</div>
					</div>
					<div style={{ margin: "5%" }}>
						<label htmlFor="Password" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="Password"
							style={{ width: "80%" }}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary"
						style={{ margin: "5%" }}
					>
						{" "}
						Submit
					</button>
				</form>
				<button
					className="btn btn-secondary"
					type="submit"
					onClick={(e) => handleRegister(e)}
				>
					Register
				</button>
			</div>
			;
		</>
	);
};

export default LoginPage;
