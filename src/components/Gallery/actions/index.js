export const loginReducer = (name, password, users) => {
	console.log(users, "acction");
	return {
		type: "LOG_IN",
		payload: {
			name,
			password,
			users,
		},
	};
};
export const logoutReducer = (name) => {
	return {
		type: "LOG_OUT",
		payload: {
			name,
		},
	};
};
export const fileReducer = (name, files) => {
	return {
		type: "ADD_REM_FILE",
		payload: {
			name,
			files,
		},
	};
};
export const adduserReducer = (name, password) => {
	return {
		type: "ADD_USER",
		payload: {
			name,
			password,
		},
	};
};
