import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { IAddListAction, IAddCardAction } from "interfaces/IActions";
import {
	getListsSuccess,
	addCardSuccess,
	addListSuccess,
} from "store/actions/actions";
import actionTypeKey from "store/actions/actionTypeKey";
import {
	doCreateList,
	generateList,
	getLists,
	doCreateCard,
	generateCard,
} from "firebase-config/db";

function* addList(action: IAddListAction) {
	const { title = "", order } = action.payload;
	const list = yield generateList(title, order, []);
	try {
		doCreateList(list);
		yield put(addListSuccess(list));
	} catch (e) {
		console.log("error");
	}
}
function* lists() {
	const lists = yield getLists();
	try {
		yield put(getListsSuccess(lists));
	} catch (e) {
		console.log("error");
	}
}

function* addCard(action: IAddCardAction) {
	const { title = "", description = "", order, listID } = action.payload;
	const card = generateCard(title, description, order);
	try {
		yield doCreateCard(listID, card);
		yield put(addCardSuccess(listID, card));
	} catch (e) {
		console.log("error");
	}
}

export default function* saga() {
	yield takeEvery(actionTypeKey.ADD_LIST, addList);
	yield takeLatest(actionTypeKey.GET_LISTS, lists);
	yield takeLatest(actionTypeKey.ADD_CARD, addCard);
}
