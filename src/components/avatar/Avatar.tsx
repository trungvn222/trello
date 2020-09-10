import React from "react";
import "./style.scss";
import classnames from "classnames";
import { IAvatarProps } from "interfaces/IProps";

function Avatar(props: IAvatarProps) {
	const { image, size } = props;
	if (image) {
		const { url, alt } = image;
		const classes = classnames({
			avatar: true,
			"avatar--small": size === "small",
			"avatar--medium": size === "medium",
		});
		return (
			<div className={classes}>
				<img src={url} alt={alt} />
			</div>
		);
	}
	return null;
}

export default Avatar;
