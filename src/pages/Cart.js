import React from "react"
import CartItem from '../components/CartItem'
import {CustomContext} from '../components/Customcontext'


function Cart() {
    const {cartItems, placeOrder} = React.useContext(CustomContext)
    const [order, setOrder] = React.useState(false)
  
    
    function orderPlease(){
        if(cartItems.length === 0){
            setOrder(false)
        }else if(cartItems.length != 0){
            placeOrder();
            setOrder(true)
            
        }
    }
    
    
    
    
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
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