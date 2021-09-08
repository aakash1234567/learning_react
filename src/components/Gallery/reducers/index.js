import { combineReducers } from "redux";
import Login from "./login";
import Users from "./users";

const Reducer = combineReducers({
	Login,
	Users,
});

export default Reducer;
