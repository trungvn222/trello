import { combineReducers } from "redux";
import listReducer from "store/reducers/listReducer";

export interface IRootState {
	lists: [];
}
export default combineReducers({
	lists: listReducer,
});
