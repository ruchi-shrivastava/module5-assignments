import { useState } from "react";
import style from "../component/Quotes.module.css";

const Quotes = (props) =>{
  return(
   <div className={style.container}>
   <h2 className={style.text}>{props.quoteData}</h2>
    <div className={style.smallText}>{props.name}</div>
   </div>
  )
};

export default Quotes;