import React, { useEffect } from "react";
const GRecaptcha = () => {
	const SITE_KEY = "6LeLv1UcAAAAAJ6rMQ_f_MRZCta1fzQsbnecqEoX";
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
			`https://www.google.com/recaptcha/api.js`,
			function () {
				console.log("Script loaded!");
				// setRecap(true);
			}
		);
	}, []);
	return (
		<>
			<h1>Recaptcha</h1>
			<form action="?" method="POST">
				<div className="g-recaptcha" data-sitekey={SITE_KEY}></div>
				<br />
				<input type="submit" value="Submit" />
			</form>
		</>
	);
};

export default GRecaptcha;
