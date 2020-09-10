export interface IImageProps {
	url: string;
	alt?: string;
	width?: number;
	height?: number;
}

export interface IAvatarListProps {
	size: "small" | "medium";
	number: number;
	images: Array<IImageProps>;
}

export interface IAddNewCardProps {
	title: string;
	onAddContent(title: string, content: string): void;
}

export interface IAddNewListProps {
	title: string;
	order: number;
	onAddContent(title: string, order: number): void;
}

export interface IAvatarProps {
	image: IImageProps;
	size: "small" | "medium";
}

export interface IAvatarListProps {
	size: "small" | "medium";
	number: number;
	images: Array<IImageProps>;
}

export interface ICardProps {
	id: string;
	title: string;
	description?: string;
	index: number;
	thumb?: IImageProps;
	onEditCard(id: string): void;
}

export interface ICardFormProps {
	onAddContent(title: string, content: string): void;
	onCancel(): void;
	title?: string;
	description?: string;
}
export interface IListFormProps {
	onAddContent(title: string): void;
	onCancel(): void;
	title?: string;
}

export interface ICardEditFormProps extends ICardFormProps {
	onRemoveCard(): void;
}

export interface IListProps {
	title?: string;
	cards: [];
	listID: string;
	index: number;
	onEditCard(listID: string, cardID: string): void;
	onAddCard(title: string, content: string, listID: string): void;
}
