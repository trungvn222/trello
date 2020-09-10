import { Action } from "redux";
import keys from "store/actions/actionTypeKey";
import { IDragInfo, IListState, ICardState } from "interfaces/IState";

export interface IGetLists extends Action {
	readonly type: keys.GET_LISTS;
}
export interface IGetListsSuccess extends Action {
	readonly type: keys.GET_LISTS_SUCCESS;
	payload: {
		lists: Array<IListState>;
	};
}

export interface IAddListAction extends Action {
	readonly type: keys.ADD_LIST;
	payload: {
		title: string;
		order: number;
	};
}

export interface IAddListSucessAction extends Action {
	readonly type: keys.ADD_LIST_SUCCESS;
	payload: {
		list: IListState;
	};
}

export interface IAddCardAction extends Action {
	readonly type: keys.ADD_CARD;
	payload: {
		title: string;
		listID: string;
		order: number;
		description: string;
	};
}

export interface IAddCardSuccessAction extends Action {
	readonly type: keys.ADD_CARD_SUCCESS;
	payload: {
		card: ICardState;
		listID: string;
	};
}

export interface ISort extends Action {
	readonly type: keys.DRAG_HAPPENED;
	payload: {
		dragInfo: IDragInfo;
	};
}
