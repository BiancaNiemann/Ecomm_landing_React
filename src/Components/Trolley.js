import React, {useEffect, useState} from "react";
import image1 from "../images/image-product-1-thumbnail.jpg"
import bin from "../images/icon-delete.svg"

export default function Trolley({deleteOrder, trolleyClick, trolleyItems, cartAdded}){
    const [addTrolleyItems, setAddTrolleyItems] = useState(0)

    useEffect(()=> {
        setAddTrolleyItems(trolleyItems)
    }, [cartAdded])

           
    function renderEmptyTrolley() {
        return(
            <p className="empty">Your cart is empty</p>
        )
    }
        
    function renderFullTrolley(){
        return(
            <div>
            <div className="item-line">
             <img className="trolly-img" src={image1} />
             <div className="ordered">
                <p className="order-info">Fall Limited Edition Sneakers</p>
                <div className="total-price">
                    <p className="order-info">$125 x {addTrolleyItems}</p>
                    <p className="total-bold">${(125 * addTrolleyItems).toFixed(2)}</p>
                </div>
            </div>
            <img className="delete-icon" src={bin} onClick={deleteOrder} />
            </div>
            <button className="checkout">Checkout</button>
        </div>
        )
    } 
           
    if (trolleyClick){
        return (
            <div className="trolley-box">
                <h5 className="cart">Cart</h5>
                {!cartAdded && renderEmptyTrolley()}
                {cartAdded && renderFullTrolley()}
            </div>
            )
        }
}
