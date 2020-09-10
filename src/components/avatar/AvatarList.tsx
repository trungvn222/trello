import React from "react";
import "./style-list.scss";
import Avatar from "components/avatar/Avatar";
import classnames from "classnames";
import { IAvatarListProps } from "interfaces/IProps";

function AvatarList({ size, number, images }: IAvatarListProps) {
	const classes = classnames("d-flex align-items-center avatar-list", {
		"avatar-list--small": size === "small",
		"avatar-list--medium": size === "medium",
	});
	return (
		<div className={classes}>
			{images.map((image) => {
				return <Avatar image={image} size={size} />;
			})}
			<div className="avatar-list__number d-flex align-items-center justify-content-center">
				+{number}
			</div>
		</div>
	);
}

export default AvatarList;
