import { IListState } from "interfaces/IState";
import keys from "store/actions/actionTypeKey";
import actionTypes from "store/actions/actionTypes";
import { doCreateList, generateList } from "firebase-config/db";

let listID = 2;
let cardID = 6;
const initState: Array<IListState> = [
	{
		title: "Last Episode",
		id: "list-0",
		order: 1,
		cards: [
			{
				id: "0",
				title: "Card Content",
				order: 1,
				description:
					"Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
				thumb: {
					url: "https://via.placeholder.com/322x170",
					alt: "text",
				},
			},
			{
				id: "1",
				title: "Card Content",
				order: 2,
				description:
					"Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
			},
			{
				id: "2",
				title: "Card Content",
				order: 3,
				description:
					"Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
				thumb: {
					url: "https://via.placeholder.com/322x170",
					alt: "text",
				},
			},
		],
	},

	{
		title: "Last Episode 2",
		id: "list-1",
		order: 2,
		cards: [
			{
				id: "3",
				title: "Card Content",
				order: 1,
				description:
					"Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
			},
			{
				id: "4",
				title: "Card Content",
				order: 2,
				description:
					"Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
			},
			{
				id: "5",
				title: "Card Content",
				order: 3,
				description:
					"Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
			},
		],
	},
];

const listReducer = (
	state: Array<IListState> = initState,
	action: actionTypes,
) => {
	switch (action.type) {
		case keys.GET_LISTS_SUCCESS: {
			const { lists } = action.payload;

			return [...lists];
		}
		case keys.ADD_LIST_SUCCESS: {
			const { list } = action.payload;
			return [...state, list];
		}
		case keys.ADD_CARD_SUCCESS: {
			const { card, listID } = action.payload;
			const newState = state.map((list) => {
				if (list.id === listID) {
					return {
						...list,
						cards: [...(list.cards || []), card],
					};
				} else {
					return list;
				}
			});
			return newState;
		}

		case keys.DRAG_HAPPENED: {
			const { dragInfo } = action.payload;
			const newState = [...state];
			console.log(newState, dragInfo.type);
			// dragging lists around
			if (dragInfo.type === "list") {
				const list = newState.splice(dragInfo.droppableIndexStart, 1);
				newState.splice(dragInfo.droppableIndexEnd, 0, ...list);
			}

			// in the same list
			if (dragInfo.droppableIdStart === dragInfo.droppableIdEnd) {
				const list = newState.find(
					(list) => dragInfo.droppableIdStart === list.id,
				);
				const card =
					list?.cards.splice(dragInfo.droppableIndexStart, 1) || [];
				list?.cards.splice(dragInfo.droppableIndexEnd, 0, ...card);
			}
			// other list
			if (dragInfo.droppableIdStart !== dragInfo.droppableIdEnd) {
				const listStart = newState.find(
					(list) => dragInfo.droppableIdStart === list.id,
				);
				const card =
					listStart?.cards.splice(dragInfo.droppableIndexStart, 1) ||
					[];
				const listEnd = newState.find(
					(list) => dragInfo.droppableIdEnd === list.id,
				);

				listEnd?.cards.splice(dragInfo.droppableIndexEnd, 0, ...card);
			}
			return newState;
		}
		default:
			return state;
	}
};

export const listSelector = {
	getListById: (state: any, listID: string) =>
		state.lists.find((list: IListState) => list.id === listID),
};

export default listReducer;
