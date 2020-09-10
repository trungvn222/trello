import { db } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import { IListState, ICardState, IImageState } from "interfaces/IState";
const listsRef = db.ref("lists");

export const generateList = (
	title: string,
	order: number,
	cards: Array<ICardState>,
): IListState => {
	return {
		id: uuidv4(),
		title,
		order,
		cards,
	};
};

export const generateCard = (
	title: string,
	description: string,
	order: number,
	thumb: IImageState = {} as IImageState,
): ICardState => {
	return {
		id: uuidv4(),
		title,
		description,
		order,
		thumb: thumb,
	};
};

export const getLists = async () => {
	const res = await db.ref("lists").orderByChild("order").once("value");
	let items: any = [];
	res.forEach(function (childSnapshot) {
		// key will be "ada" the first time and "alan" the second time
		const key = childSnapshot.key;
		// childData will be the actual contents of the child
		const childData = childSnapshot.val();
		let cards = [];
		if (childData.cards) {
			for (const property in childData.cards) {
				cards.push(childData.cards[property]);
			}
		}
		childData.cards = cards;
		items.push(childData);
	});

	return items;
};

export const doCreateList = async (list: IListState) => {
	const res = await listsRef.child(list.id).set(list);
	return list;
};

export const doCreateCard = async (listID: string, card: ICardState) => {
	console.log(listID);
	await db.ref(`lists/${listID}/cards`).push(card);
	return card;
};
