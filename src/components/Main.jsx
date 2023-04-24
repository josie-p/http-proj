import React, { useState } from "react";
import { Navbar } from "./";
import { getCatCodeAPI } from "./api-adapter";

const Main = () => {
const [catCode, setCatCode] = useState();

const getCatCode = async() => {
    const response = await getCatCodeAPI(100);
    console.log(response, "response in the front end from the api!")
}


    return(
        <div id="main">
            <Navbar />
            <button onClick={() => {
                getCatCode();
            }}>get the cat!</button>
        </div>
    )
}

export default Main