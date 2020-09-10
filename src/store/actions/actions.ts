import keys from "store/actions/actionTypeKey";
import {
	IAddListAction,
	IAddCardAction,
	ISort,
	IGetLists,
	IGetListsSuccess,
	IAddCardSuccessAction,
	IAddListSucessAction,
} from "interfaces/IActions";
import { IDragInfo, IListState, ICardState } from "interfaces/IState";

export const getLists = (): IGetLists => {
	return {
		type: keys.GET_LISTS,
	};
};

export const getListsSuccess = (lists: Array<IListState>): IGetListsSuccess => {
	return {
		type: keys.GET_LISTS_SUCCESS,
		payload: {
			lists,
		},
	};
};

export const addList = (title: string, order: number): IAddListAction => {
	return {
		type: keys.ADD_LIST,
		payload: {
			title,
			order,
		},
	};
};

export const addListSuccess = (list: IListState): IAddListSucessAction => {
	return {
		type: keys.ADD_LIST_SUCCESS,
		payload: {
			list,
		},
	};
};

export const addCard = (
	listID: string,
	title: string,
	description: string,
	order: number,
): IAddCardAction => {
	return {
		type: keys.ADD_CARD,
		payload: {
			title,
			listID,
			description,
			order,
		},
	};
};

export const addCardSuccess = (
	listID: string,
	card: ICardState,
): IAddCardSuccessAction => {
	return {
		type: keys.ADD_CARD_SUCCESS,
		payload: {
			listID,
			card,
		},
	};
};

export const sort = (dragInfo: IDragInfo): ISort => {
	return {
		type: keys.DRAG_HAPPENED,
		payload: {
			dragInfo,
		},
	};
};
