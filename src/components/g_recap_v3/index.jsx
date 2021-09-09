import React, { useEffect, useState } from "react";
// 6LczalUcAAAAADt4ezza19fe9poIivtHAXQuh_Yo
const GRecaptcha = () => {
	const SITE_KEY = "6LczalUcAAAAADt4ezza19fe9poIivtHAXQuh_Yo";
	const [recap, setRecap] = useState(false);
	const [result, setResult] = useState("None");
	useEffect(() => {
		const loadScriptByURL = (id, url, callback) => {
			const isScriptExist = document.getElementById(id);

			if (!isScriptExist) {
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.src = url;
				script.id = id;
				script.onload = function () {
					if (callback) callback();
				};
				document.body.appendChild(script);
			}

			if (isScriptExist && callback) callback();
		};

		// load the script by passing the URL
		loadScriptByURL(
			"recaptcha-key",
			`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
			function () {
				console.log("Script loaded!");
				setRecap(true);
			}
		);
	}, []);
	if (recap) {
		window.grecaptcha.ready(() => {
			window.grecaptcha
				.execute(SITE_KEY, { action: "submit" })
				.then((token) => {
					submitData(token);
				});
		});
		setRecap(false);
	}

	const submitData = (token) => {
		// call a backend API to verify reCAPTCHA response
		console.log("submitting");
		fetch("http://localhost:8080/test", {
			method: "POST",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"g-recaptcha-response": token,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setResult(res);
			});
	};

	return (
		<>
			<h1>Recaptcha</h1>
			{result.success ? <h3>Success</h3> : <h3>Failed</h3>}
			{result.score}
		</>
	);
};

export default GRecaptcha;
