export interface IImageState {
	url: string;
	alt: string;
	width?: number;
	height?: number;
}

export interface ICardState {
	id: string;
	order: number;
	title: string;
	description: string;
	thumb?: IImageState;
}

export interface IListState {
	title: string;
	id: string;
	order: number;
	cards: Array<ICardState>;
}

export interface IDragInfo {
	droppableIdStart: string;
	droppableIdEnd: string;
	droppableIndexStart: number;
	droppableIndexEnd: number;
	draggableId: string;
	type: string;
}
