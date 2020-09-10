import React from "react";
import { IImageProps } from "interfaces/IProps";

function CardThumb({ url, alt }: IImageProps) {
	return (
		<div className="card__thumb">
			<img src={url} alt={alt} />
		</div>
	);
}

export default CardThumb;
