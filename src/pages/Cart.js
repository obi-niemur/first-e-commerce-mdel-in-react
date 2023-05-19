import React from "react"
import CartItem from '../components/CartItem'
import {CustomContext} from '../components/Customcontext'


function Cart() {
    const {cartItems, placeOrder} = React.useContext(CustomContext)
    const [order, setOrder] = React.useState(false)
  
    
    function orderPlease(){
        if(cartItems.length !== 0){
            placeOrder();
            setOrder(true)
        }else if(cartItems.length === 0){
            setOrder(false)
            
            
        }
    }

    
    
    const test = cartItems.reduce((tot, arr)=>{
        return tot + arr.price
    },0)
    
    
    
    const totalCost = test 
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })


    console.log("Price: " + test);
    console.log("Total Cost is: " + totalCost);
    console.log("Total cart items: " + cartItems.length);

    const cartItemElements = cartItems.map(item=>{
       
        return(
            <CartItem key={item.id} item={item}   />
        )
    })
    
    return (
         <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                 <button onClick={orderPlease}>{`${(order) ? 'please wait...' : 'Place Order'}`}</button> 
             
               
            </div>
        </main>
    )
}

export default Cart