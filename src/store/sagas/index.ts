import { all } from "redux-saga/effects";
import listsSaga from "./lists";

export default function* rootSaga() {
	yield all([listsSaga()]);
}
