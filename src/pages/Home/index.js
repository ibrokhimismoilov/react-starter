import { useGetAll } from "hooks/crud";
import useDocumentTitle from "hooks/useDocumentTitle";
import ContainerAll from "modules/containers/all";
import React from "react";

const Home = () => {
	useDocumentTitle("Home page");

	// const data = useGetAll({ name: "name", url: "/settings" });

	// console.log(data);

	return (
		<ContainerAll name="name" url="/settings">
			{data => {
				console.log("data", data);
				return <h1>Home | Lorem, ipsum dolor.</h1>;
			}}
		</ContainerAll>
	);
};

export default Home;
