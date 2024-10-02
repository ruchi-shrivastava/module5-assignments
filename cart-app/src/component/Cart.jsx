import { useEffect, useState } from "react";
import style from "../component/Cart.module.css";


const Cart = (props) => {
  return (
    <>
   
      <div className={style.midSection}>
        
        <article className={style.cartItem}>
            <img className={style.imgStyle} src={props.data.img} alt={props.data.title} />
           
            <div className="info">
                <h5 className={style.title}>{props.data.title}</h5>
                <p className={style.itemPrice}>${props.data.price}</p>
                <button className={style.btnRemove} onClick={() =>{
                   console.log("Removing item with ID:", props.data.id); // Debug log
                   props.removeItem(props.data.id)}} >remove</button>
            </div>


            <div className="contollers">
                <button className={style.amountBtn}  onClick={() => props.addQty(props.data.id)}>
                    <svg stroke="currentColor" fill="currentColor"
                    strokeWidth="0" 
                    viewBox="0 0 448 512"
                    className={style.amountIcon} 
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                </button>

                <span className={style.amount}>{props.data.quantity}</span>

                <button className={style.amountBtn} onClick={() => props.removeQty(props.data.id)}>
                    <svg stroke="currentColor" fill="currentColor"  strokeWidth="0" viewBox="0 0 448 512"
                    className={style.amountIcon} 
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                </button>
            </div>
        </article>
      </div>
      </>
  );
};
export default Cart;
