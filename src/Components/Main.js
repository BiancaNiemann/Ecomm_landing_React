import React, {useState} from "react";

import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import cart from "../images/icon-cart-white.svg"
import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
import next from "../images/icon-next.svg"
import prev from "../images/icon-previous.svg"
import close from "../images/icon-close-white.svg"


export default function Main({getOrder, trolleyItems, addToCart}){
    const [isModal, setIsModal] = useState(false)
    const [picSelect, setPicSelect] = useState(0)
    console.log(isModal)
    const picArray = [image1, image2, image3, image4]
    const picSelected = picArray[picSelect]

    //Shows lightbox with images when main image is clicked
    function showModal(){
        setIsModal(prevModal => !prevModal)
    }

    //Gets image from thumbnail click to display as main image
    function getImage(num){
        setPicSelect(num)
    }

    function imageScrollPrev(){
        if (picSelect > 0){
            setPicSelect(prevSelect => prevSelect - 1)
        } else if (picSelect === 0){
            setPicSelect(3)
        }
    }

    function imageScrollNext(){
        if (picSelect < 3){
            setPicSelect(prevSelect => prevSelect + 1)
        } else if (picSelect === 3){
            setPicSelect(0)
        }
    }

    function renderThumbImagesHtml(){
        return (                    
            <div className="thumbnails">
                <img className="thumbnail-img" src={image1}alt="pair of sneakers thumbnail" onClick={()=> getImage(0)} />
                <img className="thumbnail-img" src={image2} alt="sneakers on a stone thumbnail" onClick={()=> getImage(1)}/>
                <img className="thumbnail-img" src={image3} alt="One sneaker on top of stone frontview thumbnail" onClick={()=> getImage(2)} />
                <img className="thumbnail-img" src={image4} alt="One sneaker on top of stone sideview thumbnail" onClick={()=> getImage(3)} />
            </div>
        )
    }

    return ( 
        <main>
            <div className="lightbox">
                <img className="arrow-icon prev mobile" src={prev} onClick={imageScrollPrev}/>
                <img className="arrow-icon next mobile" src={next} onClick={imageScrollNext}/>
                {!isModal ? <img className="main-img main-light" src={picSelected} alt="pair of sneakers" onClick={showModal} /> : <img className="main-img main-light" src={image1} alt="pair of sneakers" />}
                {renderThumbImagesHtml()}
            </div>
                        
            {isModal && 
                <div className="img-box-light" >
                    <div className="lightbox">
                        <img className="close-icon" src={close} onClick={showModal}/>
                        <img className="arrow-icon prev" src={prev} onClick={imageScrollPrev}/>
                        <img className="arrow-icon next" src={next} onClick={imageScrollNext}/>
                        <img className="main-img main-light" src={picSelected} alt="pair of sneakers" />
                    </div>
                    {renderThumbImagesHtml()}
                </div>
            }

            <div className="info-box">
                <div>
                    <h3 className="info-title">Sneaker Company</h3>
                    <h1 className="info-header"> Fall Limited Edition Sneakers</h1>
                    <p className="info-details">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they???ll withstand everything the weather can offer.</p>
                    <div className="price"/>
                        <div className="price-discount">
                        <h3 className="current-price">$<span id="current-price">125.00</span></h3>
                        <div className="discount">50%</div>
                        </div>
                        <h3 className="old-price">$250.00</h3>
                </div>
                <div className="price-box">
                    <div className="item-add-minus">
                    <img  id="minus" className="minus" src={minus} onClick={()=> getOrder(-1)}/>
                    <h5 id="total">{trolleyItems}</h5>
                    <img id="plus" className="plus" src={plus} onClick={()=> getOrder(1)}/>
                    </div>
                    <button id="add-btn" className="add-btn" onClick={addToCart}><img className="add-cart-icon" src={cart} />Add to cart</button>
                </div>
            </div>
      </main>
    )
}

