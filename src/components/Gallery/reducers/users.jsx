const add_user = (state, payload) => {
	const { name, password } = payload;
	const temp = state;
	temp.push({ name, password, files: [] });
	console.log(temp, "temp");
	return temp;
};
const add_rem_file = (state, payload) => {
	const files = payload.files;
	const temp = state.map((u) => {
		if (u.name === payload.name) {
			return { ...u, files: files };
		} else {
			return u;
		}
	});
	return temp;
};

const Users = (
	state = [{ name: "aakash", password: "aakash", files: [] }],
	action
) => {
	switch (action.type) {
		case "ADD_USER":
			return add_user(state, action.payload);
		case "ADD_REM_FILE":
			return add_rem_file(state, action.payload);
		default:
			return state;
	}
};

export default Users;
