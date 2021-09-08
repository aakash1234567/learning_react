import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import HomePage from "./homepage";
import LoginPage from "./loginpage";
const Gallery = () => {
	const auth = useSelector((store) => store.Login);
	let history = useHistory();

	useEffect(() => {
		if (auth.login === true) {
			console.log(auth);
			// history.push("./loginpage");
		} else if (auth.login === false) {
			console.log("false");
			alert("Enter correct Credentials");
		}
	}, [auth]);
	return (
		<>
			<div
				style={{
					backgroundColor: "lightblue",
					height: "100%",
					width: "100%",
					position: "absolute",
				}}
			>
				{auth.login === true ? <HomePage /> : <LoginPage />}
			</div>
		</>
	);
};

export default Gallery;
