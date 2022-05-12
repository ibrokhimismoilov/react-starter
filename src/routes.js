import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from "hooks/ScrollTop";
import Layout from "components/Layout";
import history from "store/history";
import PageLoading from "pages/PageLoading";

const Home = lazy(() => import("pages/Home"));
const News = lazy(() => import("pages/News"));

const routes = [{ path: "news", element: <News />, children: [] }];

export const RouteWrapper = () => {
	return (
		<BrowserRouter {...{ history }}>
			<Suspense fallback={<PageLoading />}>
				<ScrollTop />
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />

						{routes.map((route, key) => {
							return route.children?.length ? (
								<Route key={key} path={route.path} element={route.element}>
									{route?.children.map((innerRoute, innerKey) => (
										<Route key={innerKey} path={innerRoute.path} element={innerRoute.element} />
									))}
								</Route>
							) : (
								<Route key={key} path={route.path} element={route.element} />
							);
						})}

						<Route path="*" element={<h1>NotFound</h1>} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};
