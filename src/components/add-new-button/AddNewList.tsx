import React, { useCallback, useState } from "react";
import { IAddNewListProps } from "interfaces/IProps";
import ListForm from "components/list-form/ListForm";
import "./style.scss";

function AddNewList({ title, onAddContent, order }: IAddNewListProps) {
	let [showForm, setShowForm] = useState(false);

	const handleShowForm = useCallback(() => {
		setShowForm(true);
	}, []);
	const handleCloseForm = useCallback(() => {
		setShowForm(false);
	}, []);
	const handleAddContent = useCallback(
		(heading) => {
			console.log(order);
			onAddContent(heading, order);
			setShowForm(false);
		},
		[order],
	);
	const renderTextArea = () => {
		if (!showForm) {
			return null;
		}
		return (
			<>
				<ListForm
					onAddContent={handleAddContent}
					onCancel={handleCloseForm}
				/>
			</>
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
		<div className="add-new-btn add-new-btn--list">
			<div className="add-new-btn__inner">
				{renderTextArea()}
				{renderPlaceholder()}
			</div>
		</div>
	);
}

export default React.memo(AddNewList);
