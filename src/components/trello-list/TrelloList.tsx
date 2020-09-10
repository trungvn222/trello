import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import "./style.scss";
import Card from "components/card/Card";
import AddNewCard from "components/add-new-button/AddNewCard";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { addCard } from "store/actions/actions";
import { IListProps } from "interfaces/IProps";

import { doCreateCard, generateCard, getLists } from "firebase-config/db";

function TrelloList({
	title,
	cards = [],
	listID,
	index,
	onEditCard,
	onAddCard,
}: IListProps) {
	const dispatch = useDispatch();
	const handleAddCart = useCallback(
		(title: string, content: string): void => {
			onAddCard(title, content, listID);
		},
		[],
	);
	const handleEditCard = useCallback(
		(cardID) => {
			onEditCard(listID, cardID);
		},
		[listID],
	);

	const renderCards = useCallback(() => {
		if (!cards.length) {
			return null;
		}
		return cards.map((card: any, index: number) => {
			return (
				<Card
					key={card.id}
					index={index}
					title={card?.title}
					thumb={card?.thumb}
					description={card?.description}
					id={card.id}
					onEditCard={handleEditCard}
				/>
			);
		});
	}, [cards]);

	return (
		<Draggable draggableId={String(listID)} index={index}>
			{(provided) => (
				<div
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					className="trello-list">
					<Droppable droppableId={listID.toString()}>
						{(provided) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}>
								<div className="trello-list__header d-flex align-items-center justify-content-between">
									{title}
									<span className="icon-dots"></span>
								</div>

								{renderCards()}
								{provided.placeholder}
								<AddNewCard
									title="Add new card"
									onAddContent={handleAddCart}
								/>
							</div>
						)}
					</Droppable>
				</div>
			)}
		</Draggable>
	);
}

export default React.memo(TrelloList);
