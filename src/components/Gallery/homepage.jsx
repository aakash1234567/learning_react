import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutReducer, fileReducer } from "./actions";
const HomePage = () => {
	const logged = useSelector((store) => store.Login);
	const users = useSelector((store) => store.Users);
	const temp = users.filter((u) => u.name === logged.name)[0];
	const [file, setFile] = useState("");
	const [files, setFiles] = useState(temp.files);
	console.log(temp.files, "temp");
	// console.log(logged, users, "hehe");
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		let temp = [...files];
		temp.push(file);
		setFiles(temp);
	};
	useEffect(() => {
		console.log(files, "dispatched");
		dispatch(fileReducer(logged.name, files));
	}, [files]);
	const showimg = (ind, file) => {
		const reader = new FileReader();
		reader.onload = function (e) {
			document.getElementById("show").src = e.target.result;
		};
		reader.readAsDataURL(file);
	};
	const delimg = (ind, file) => {
		const temp = files.filter((f) => f.name !== file.name);
		setFiles(temp);
	};
	const handleLogOut = (e) => {
		// dispatch(logoutReducer())
		e.preventDefault();
		// console.log(logged, "dsa");
		// console.log(users);
		dispatch(logoutReducer(logged.name));
	};
	return (
		<>
			<button type="button" onClick={(e) => handleLogOut(e)}>
				{" "}
				Log out
			</button>
			<div className="row row-col">
				<div className="col-8">
					<form onSubmit={(e) => handleSubmit(e)}>
						<label htmlFor="fileup"></label>
						<input
							type="file"
							name=""
							id="fileups"
							onChange={(e) => setFile(e.target.files[0])}
							accept=".jpg, .jpeg, .png"
						/>
						<button type="submit">Upload</button>
					</form>
				</div>
				<div className="col-4">
					{files.map((f, ind) => (
						<div key={ind}>
							<button onClick={() => showimg(ind, f)}>{f.name}</button>
							<button onClick={() => delimg(ind, f)}>x</button>
						</div>
					))}
				</div>
				<div>
					<img src="" id="show" alt="Sorry" height="200px" width="200px" />
				</div>
			</div>
		</>
	);
};

export default HomePage;
