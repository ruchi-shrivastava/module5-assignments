import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Header from './component/Header'
import Cart from './component/Cart'
import Footer from './component/Footer'

function App() {
  const [itemInCart, setItemInCart] = useState([
      {
        id: "1",
        title: "Samsung Galaxy S8",
        price: "399.99",
        img: "https://www.course-api.com/images/cart/phone-1.png",
        quantity: 0
      },
      {
        id:"2",
        title: "google pixel",
        price: "499.99",
        img: "https://www.course-api.com/images/cart/phone-2.png",
        quantity: 0
      },
      {
        id: "3",
        title: "Xiaomi Redmi Note 2",
        price: "699.99",
        img: "https://www.course-api.com/images/cart/phone-3.png",
        quantity: 0
      },
      {
        id: "4",
        title: "Samsung Galaxy S7",
        price: "599.99 ",
        img: "https://www.course-api.com/images/cart/phone-4.png",
        quantity: 0
      }
    ]);
    const removeItem = (id) => {
      setItemInCart((prevItems) => {
        const updatedItems = prevItems.filter(item => item.id !== id);
        return updatedItems;
      });
    };
   
    
    const addQty = (id) => {
          // Use map to update the correct item
          const updatedItems = itemInCart.map(item => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity+ 1 }; // Increase the amount
            }
            return item; // Return the item as is if it's not the one we're updating
          });
          setItemInCart(updatedItems);
        }
      
        const removeQty = (id) => {
          const updatedItems = itemInCart.map(item => {
            if (item.id === id && item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 }; // Decrease the amount but prevent it from going below 1
            }
            return item;
          });
          setItemInCart(updatedItems);
        }
      

        //Calculate total amount
    const totalAmount = itemInCart.reduce((total,item) =>{
      return total + (item.price * item.quantity);
    },0);
    

   const clearCart = () =>{
   setItemInCart([]);
   };

       
        return (
          <div>
            <Header cartItems={itemInCart} />
            {itemInCart.length === 0 ? (
              <h2 style={{textAlign:"center"}}>Your cart is empty</h2>
            ) : (
               <div className='main-container'>
                 <header className="">
                 <h2 style={{textAlign:'center'}}>YOUR BAG</h2>
                </header>
                 {/* Debugging log */}
                 {itemInCart.map(cartData => <Cart data={cartData} addQty={addQty} removeQty={removeQty} removeItem={removeItem}/>  )}
               </div>
             )
            }<br /><br />
            <hr />
            <Footer totalAmount={totalAmount} clearCart={clearCart} />
            </div>
            
        )
      }
        
        
    
  

export default App

