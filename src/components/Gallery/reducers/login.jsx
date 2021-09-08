const check_cred = (state, payload) => {
	const { name, password, users } = payload;
	const temp = users.filter((u) => u.name === name)[0];
	console.log(temp, "here");
	if (name === temp.name && password === temp.password)
		return { name, password, login: true };
	else return { name, password, login: false };
};

const authLogin = (state = { login: "None" }, action) => {
	switch (action.type) {
		case "LOG_IN":
			return check_cred(state, action.payload);
		case "LOG_OUT":
			return { name: "None", password: "None", login: "None" };
		default:
			return state;
	}
};

export default authLogin;
