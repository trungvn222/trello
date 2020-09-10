import React, { useRef, useCallback, useState, useEffect } from "react";
import "./style.scss";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";

import { IRootState } from "store/reducers";
import { IDragInfo, ICardState, IListState } from "interfaces/IState";
import { addList, sort, getLists, addCard } from "store/actions/actions";
import { dummyAvatar } from "seeds";

import Header from "components/header/Header";
import AvatarList from "components/avatar/AvatarList";
import TrelloList from "components/trello-list/TrelloList";

import AddNewList from "components/add-new-button/AddNewList";
import CardFormEdit from "components/card-edit-form/CardEditForm";

import {
	doCreateList,
	generateList,
	doCreateCard,
	generateCard,
} from "firebase-config/db";

function Home() {
	let [showEditCardForm, setShowEditCardForm] = useState(false);

	let scrollContainerRef = useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const lists = useSelector((state: IRootState) => state.lists);
	let [listCount, setListCount] = useState(lists.length || 0);
	const [currentCardID, setCurrentCardID] = useState("");
	const [currentListID, setCurrentListID] = useState("");

	useEffect(() => {
		dispatch(getLists());
	}, []);

	useEffect(() => {
		setListCount(lists.length);
	}, [lists]);

	const handleDragEnd = useCallback((result: DropResult) => {
		const { destination, source, draggableId, type } = result;
		if (!destination) {
			return;
		}

		dispatch(
			sort({
				droppableIdStart: source.droppableId,
				droppableIdEnd: destination.droppableId,
				droppableIndexStart: source.index,
				droppableIndexEnd: destination.index,
				draggableId: draggableId,
				type: type,
			}),
		);
	}, []);
	const handleAddNewList = useCallback(
		(title: string, order: number) => {
			if (title) {
				dispatch(addList(title, order));
				setTimeout(function () {
					if (scrollContainerRef && scrollContainerRef.current) {
						scrollContainerRef.current.scrollLeft =
							scrollContainerRef?.current?.scrollWidth -
							scrollContainerRef?.current?.clientWidth;
					}
				});
			}
		},
		[scrollContainerRef, listCount],
	);
	const handleEditCard = useCallback((listID: string, cardID: string) => {},
	[]);
	const handleUpdateCard = useCallback((title: string, content: string) => {},
	[]);
	const handleCancelUpdateCard = useCallback(() => {}, []);
	const handleRemoveCard = useCallback(() => {}, []);
	const handleAddCard = useCallback((title, content, listID) => {
		const list: any = lists.find((list: IListState) => list.id === listID);
		const cards = list?.cards;
		const count = cards ? cards.length : 0;

		dispatch(addCard(listID, title, content, count));
	}, []);

	const renderEditCardForm = useCallback(() => {
		return (
			<div className="modal">
				<CardFormEdit
					onAddContent={handleUpdateCard}
					onCancel={handleCancelUpdateCard}
					onRemoveCard={handleRemoveCard}
				/>
			</div>
		);
	}, []);
	return (
		<>
			<Header />

			<div className="dasboard-container">
				<div className="d-flex align-items-center justify-content-between dasboard-container__head">
					<h1 className="heading">Brackets</h1>
					<AvatarList
						size="medium"
						number={30}
						images={[
							dummyAvatar,
							dummyAvatar,
							dummyAvatar,
							dummyAvatar,
							dummyAvatar,
						]}
					/>
				</div>

				<div className="custom-scrollbar" ref={scrollContainerRef}>
					<DragDropContext onDragEnd={handleDragEnd}>
						<Droppable
							droppableId="all-lists"
							direction="horizontal"
							type="list">
							{(provied) => {
								return (
									<div
										{...provied.droppableProps}
										className="lists-wrapper"
										ref={provied.innerRef}>
										{lists.map(
											(list: any, index: number) => (
												<TrelloList
													listID={list.id}
													key={list.id}
													title={list.title}
													cards={list.cards}
													index={index}
													onEditCard={handleEditCard}
													onAddCard={handleAddCard}
												/>
											),
										)}
										{provied.placeholder}
										<AddNewList
											title="Add New List"
											order={listCount}
											onAddContent={handleAddNewList}
										/>
									</div>
								);
							}}
						</Droppable>
					</DragDropContext>
				</div>
			</div>
		</>
	);
}

export default React.memo(Home);
