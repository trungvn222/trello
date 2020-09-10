import React, { useState, useCallback } from "react";
import "./style.scss";
import { IListFormProps } from "interfaces/IProps";

function ListForm({ title = "", onAddContent, onCancel }: IListFormProps) {
	let [heading, setTitle] = useState(title);

	const handleSetHeading = useCallback((e) => {
		setTitle(e.target.value);
	}, []);

	const handleAddContent = useCallback(() => {
		onAddContent(heading);
		setTitle("");
	}, [heading]);
	const handleCancel = useCallback(() => {
		onCancel();
	}, []);
	return (
		<form className="list-form">
			<input
				type="text"
				className="list-form__title"
				placeholder="Enter Title"
				value={heading}
				onChange={handleSetHeading}
				autoFocus
			/>
			<button onMouseDown={handleAddContent} className="list-form__btn">
				Add Content
			</button>
			<button onMouseDown={handleCancel} className="list-form__btn">
				Cancel
			</button>
		</form>
	);
}

export default ListForm;
