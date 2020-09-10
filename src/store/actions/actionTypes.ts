import {
	IAddCardAction,
	ISort,
	IAddListAction,
	IAddCardSuccessAction,
	IAddListSucessAction,
	IGetListsSuccess,
	IGetLists,
} from "interfaces/IActions";

type actionTypes =
	| IGetLists
	| IGetListsSuccess
	| IAddCardAction
	| ISort
	| IAddListAction
	| IAddCardSuccessAction
	| IAddListSucessAction;

export default actionTypes;
