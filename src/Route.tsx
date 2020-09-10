import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

// const
import { HOME_ROUTE, DASBOARD_ROUTE } from "const/route";

// components
const Home = lazy(() => import("containers/home/Home"));
const DASBOARD = lazy(() => import("containers/dasboard/Dasboard"));
const NotFound = lazy(() => import("containers/not-found/NotFound"));

function RootRoute() {
	return (
		<Switch>
			<Route path={HOME_ROUTE} exact component={Home} />
			<Route path={DASBOARD_ROUTE} exact component={DASBOARD} />
			<Route component={NotFound} />
		</Switch>
	);
}

export default RootRoute;
