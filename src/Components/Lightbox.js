import React, {useState, useEffect} from "react";

import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
import next from "../images/icon-next.svg"
import prev from "../images/icon-previous.svg"
import close from "../images/icon-close-white.svg"

export default function Lightbox({isModal}){
    const [openModal, setOpenModal] = useState(false)
    const [picSelect, setPicSelect] = useState(0)

    const picArray = [image1, image2, image3, image4]
    const picSelected = picArray[picSelect]

    useEffect(() =>{
        if(isModal){
            setOpenModal(prevModal => !prevModal)
        }
    },[isModal])
   

    function showModal(){
        setOpenModal(prevModal => !prevModal)
    }

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
    
    if (openModal){
        return (
            <div className="img-box-light" >
                <div className="lightbox">
                    <img className="close-icon" src={close} onClick={showModal}/>
                    <img className="arrow-icon prev" src={prev} onClick={()=> imageScrollPrev()}/>
                    <img className="arrow-icon next" src={next} onClick={imageScrollNext}/>
    
                    <div className="slide">
                        <img className="main-img main-light" src={picSelected} alt="pair of sneakers"  />
                    </div>
                    
                    <div className="thumbnails">
                        <img className="thumbnail-img" src={image1}alt="pair of sneakers thumbnail" onClick={()=> getImage(0)} />
                        <img className="thumbnail-img" src={image2} alt="sneakers on a stone thumbnail" onClick={()=> getImage(1)}/>
                        <img className="thumbnail-img" src={image3} alt="One sneaker on top of stone frontview thumbnail" onClick={()=> getImage(2)} />
                        <img className="thumbnail-img" src={image4} alt="One sneaker on top of stone sideview thumbnail" onClick={()=> getImage(3)} />
                    </div>
                </div>
            </div>
        )
    }

}
