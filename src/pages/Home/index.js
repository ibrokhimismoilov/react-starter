import { useGetData } from "hooks/crud";
import useDocumentTitle from "hooks/useDocumentTitle";
import React from "react";

const Home = () => {
    useDocumentTitle("Home page");

    // const { data } = useGetData({
    //     name: "posts",
    //     url: "/posts",
    //     params: {
    //         sort: "-published_at",
    //         limit: 20,
    //         include: "category,tags",
    //     },
    //     onSuccess: (data) => {
    //         console.log("Success", data);
    //     },
    //     onError: (err) => {
    //         console.log("Error", err);
    //     }
    // });

    const getData = useGetData({
        name: "menus",
        url: "/menus",
        params: {
            // sort: "-published_at",
            // limit: 20,
            include: "menuItems",
        },
        onSuccess: (data) => {
            console.log("Success", data);
        },
        onError: (err) => {
            console.log("Error", err);
        }
    });


    console.log("data", getData)
    return (
        <h1>Home page</h1>
    )
}

export default Home;