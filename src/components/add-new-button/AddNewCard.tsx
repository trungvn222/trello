import React, { useCallback, useState } from "react";
import "./style.scss";

import CardForm from "components/card-form/CardForm";
import { IAddNewCardProps } from "interfaces/IProps";

function AddNewCard({ title, onAddContent }: IAddNewCardProps) {
	let [showForm, setShowForm] = useState(false);

	const handleShowForm = useCallback(() => {
		setShowForm(true);
	}, []);
	const handleCloseForm = useCallback(() => {
		setShowForm(false);
	}, []);

	const handleAddContent = useCallback((title, content) => {
		setShowForm(false);
		onAddContent(title, content);
	}, []);

	const renderTextArea = () => {
		if (!showForm) {
			return null;
		}
		return (
			<CardForm
				onAddContent={handleAddContent}
				onCancel={handleCloseForm}
			/>
		);
	};
	const renderPlaceholder = () => {
		if (showForm) {
			return null;
		}
		return (
			<div
				onClick={handleShowForm}
				className="add-new-btn__placeholder d-flex justify-content-center align-items-center">
				+ {title}
			</div>
		);
	};
	return (
		<div className="add-new-btn">
			<div className="add-new-btn__inner">
				{renderTextArea()}
				{renderPlaceholder()}
			</div>
		</div>
	);
}

export default React.memo(AddNewCard);
