import React, { useState, useCallback } from "react";
import { ICardFormProps } from "interfaces/IProps";
import "./style.scss";

function CardForm({
	onAddContent,
	onCancel,
	title: _title = "",
	description = "",
}: ICardFormProps) {
	let [content, setContent] = useState(description);
	let [title, setTitle] = useState(_title);
	const handleSetHeading = useCallback((e) => {
		setTitle(e.target.value);
	}, []);
	const handleSetContent = useCallback((e) => {
		setContent(e.target.value);
	}, []);
	const handleAddContent = useCallback(() => {
		onAddContent(title, content);
		setContent("");
		setTitle("");
	}, [title, content]);
	const handleCancel = useCallback(() => {
		onCancel();
	}, []);
	return (
		<form className="card-form">
			<input
				type="text"
				className="card-form__title"
				placeholder="Enter Title"
				value={title}
				onChange={handleSetHeading}
				autoFocus
			/>
			<textarea
				placeholder="Enter Description"
				className="card-form__content"
				onChange={handleSetContent}
				value={content}
			/>

			<button onMouseDown={handleAddContent} className="card-form__btn">
				Add Content
			</button>
			<button onMouseDown={handleCancel} className="card-form__btn">
				Cancel
			</button>
		</form>
	);
}

export default CardForm;
