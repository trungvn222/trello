import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import Avatar from "components/avatar/Avatar";
import { dummyAvatar } from "seeds";
import { HOME_ROUTE } from "const/route";

function Header() {
	return (
		<header className="header d-flex align-items-center justify-content-between">
			<div className="header__left d-flex">
				<div className="logo header__left__item">
					<Link to={HOME_ROUTE}>
						<i className="icon-logo"></i>
					</Link>
				</div>
				<div className="header-board d-flex align-items-center header__left__item">
					<span className="icon-trello-mark-blue">
						<span className="path1"></span>
						<span className="path2"></span>
						<span className="path3"></span>
					</span>
					Boards
				</div>
			</div>
			<div className="header__right">
				<Avatar image={dummyAvatar} size="medium" />
			</div>
		</header>
	);
}

export default Header;
