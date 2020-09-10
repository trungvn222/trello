import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import RootRoute from "./Route";
import "assets/icomoon/style.css";
import "assets/styles/general.scss";
import WebFont from "webfontloader";

WebFont.load({
	google: {
		families: [
			"Poppins:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500",
			"sans-serif",
		],
	},
});

function App() {
	return (
		<div className="trello">
			<Suspense fallback={<div>loading</div>}>
				<BrowserRouter>
					<RootRoute />
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
