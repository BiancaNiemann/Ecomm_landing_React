import React, {useState, useCallback} from "react";
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import Trolley from "./Components/Trolley"

function App() {
  const [trolleyClick, setTrolleyClick] = useState(false)
  const [itemOrder, setItemOrder] = useState(0)
  const [added, setAdded] = useState(false)
  
  //Sets add items to cart to true so they show in trolley
  function handleAddToCartClick(){
    if (itemOrder > 0){
      setAdded(true)
    }
  }
  //const addToCart = useCallback(()=> setAdded(prevAdded => true), [setAdded])
  //Adds or minusses from total for order to add to cart
  function getOrder(num){
    if (num === -1 && itemOrder >=1 || num === 1){
      setItemOrder(prevItemOrder => prevItemOrder + num)
    } 
  }

  //Gets icon click from Header and runs function to change state
  function openTrolleyClick(){
    setTrolleyClick(prevClick => !prevClick)
  }

  //Delete the order in the cart
  function deleteOrder(){
    setAdded(false)
    setItemOrder(0)
  }


 return (
    <div className="App">
      <Header 
          openTrolleyClick={openTrolleyClick} 
      />
      <Main 
          addToCart={handleAddToCartClick}
          getOrder={getOrder} 
          trolleyItems={itemOrder} 
      />
      <Footer />
      <Trolley 
          trolleyClick={trolleyClick} 
          trolleyItems={itemOrder}
          cartAdded={added}
          deleteOrder={deleteOrder}
      />
    </div>
  );
}

export default App;
