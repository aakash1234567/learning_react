import React, { useEffect, useState } from "react";
const GRecaptcha = () => {
	const SITE_KEY = "6LeLv1UcAAAAAJ6rMQ_f_MRZCta1fzQsbnecqEoX";
	const [recap, setRecap] = useState(false);
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
			`https://www.google.com/recaptcha/api.js?render=explicit`,
			function () {
				console.log("Script loaded!");
				setRecap(true);
			}
		);
	}, []);
	if (recap) {
		const check = () => {
			console.log("ok");
			const token = window.grecaptcha.getResponse();
			console.log(token);
		};
		window.grecaptcha.ready(() => {
			window.grecaptcha.render("gcap", {
				sitekey: SITE_KEY,
				callback: check,
				theme: "dark",
			});
		});
		setRecap(false);
	}
	return (
		<>
			<h1>Recaptcha</h1>
			<div id="gcap"></div>
		</>
	);
};

export default GRecaptcha;

// 6LeLv1UcAAAAAJ6rMQ_f_MRZCta1fzQsbnecqEoX
// 6LeLv1UcAAAAAK2Qo5bpEM3fVHefgdVHef7IIrDQ
