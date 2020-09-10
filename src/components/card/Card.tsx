import React, { useCallback } from "react";
import { Draggable } from "react-beautiful-dnd";
import "./style.scss";

import CardThumb from "./CardThumb";
import AvatarList from "components/avatar/AvatarList";

import { ICardProps } from "interfaces/IProps";
import { dummyAvatar } from "seeds";
function TrelloCard({
	title,
	description,
	id,
	index,
	thumb,
	onEditCard,
}: ICardProps) {
	const handleEditCard = useCallback(() => {
		onEditCard(id);
	}, []);
	return (
		<Draggable draggableId={String(id)} index={index}>
			{(provided) => (
				<div
					className="card"
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}>
					<div className="card__inner">
						{thumb && <CardThumb url={thumb.url} alt={thumb.alt} />}
						<div className="card__labels">
							<div
								style={{ backgroundColor: "red" }}
								className="card-label"></div>
							<div
								style={{ backgroundColor: "blue" }}
								className="card-label"></div>
							<div
								style={{ backgroundColor: "yellow" }}
								className="card-label"></div>
						</div>
						<h2 className="card__title d-flex justify-content-between">
							{title}{" "}
							<span
								className="card__edit"
								onClick={handleEditCard}>
								Edit
							</span>
						</h2>
						<div className="card__content post">
							<p>{description}</p>
						</div>
						<div className="card__footer d-flex align-items-center justify-content-between">
							<div className="card__footer__left d-flex align-items-center">
								<AvatarList
									size="small"
									number={30}
									images={[
										dummyAvatar,
										dummyAvatar,
										dummyAvatar,
									]}
								/>
							</div>
							<div className="card__footer__right d-flex align-items-center justify-content-between">
								<div className="trello-icon comment d-flex align-items-center card__footer__right__item">
									<i className="icon-message-square-outline"></i>
									76
								</div>
								<div className="trello-icon wishlist d-flex align-items-center card__footer__right__item">
									<i className="icon-heart-outline"></i>
									32
								</div>
								<div className="trello-icon file-attach d-flex align-items-center card__footer__right__item">
									<i className="icon-attach-outline"></i>
									32
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
}

export default React.memo(TrelloCard);
