import React, { useCallback } from "react";
import "./style.scss";
import CardForm from "components/card-form/CardForm";
import { ICardEditFormProps } from "interfaces/IProps";

function CardEditForm({ onRemoveCard, ...rest }: ICardEditFormProps) {
	const handleRemoveCard = useCallback(() => {
		onRemoveCard();
	}, []);
	return (
		<div className="card-form-edit">
			<div onClick={handleRemoveCard} className="card-form-edit__action">
				Remove Card
			</div>
			<CardForm {...rest} />
		</div>
	);
}

export default CardEditForm;
