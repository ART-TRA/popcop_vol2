import React from "react";
import style from "./Preloader.module.css"
import preloader from "../../../assets/images/black_preloader.gif";

let Preloader = (props) => {
    return (
        <img src={preloader}/>
    )
};

export default Preloader