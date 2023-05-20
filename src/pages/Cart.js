import React from "react"
import CartItem from '../components/CartItem'
import { CustomContext } from '../components/Customcontext'
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function Cart() {
    const { cartItems, placeOrder } = React.useContext(CustomContext)
    const [order, setOrder] = React.useState(false)


    function orderPlease() {
        if (cartItems.length !== 0) {
            placeOrder();
            setOrder(true)
        } else if (cartItems.length === 0) {
            setOrder(false)


        }
    }



    const test = cartItems.reduce((tot, arr) => {
        return tot + arr.price
    }, 0)



    const totalCost = test
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })


    console.log("Price: " + test);
    console.log("Total Cost is: " + totalCost);
    console.log("Total cart items: " + cartItems.length);

    const cartItemElements = cartItems.map(item => {

        return (
            <CartItem key={item.id} item={item} />
        )
    })

    return (

        <>

            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/About">About</Breadcrumb.Item>
                <Breadcrumb.Item href="/Contact">Contact Us</Breadcrumb.Item>
                <Breadcrumb.Item href="/Privacy">Privacy Policy</Breadcrumb.Item>
                <Breadcrumb.Item href="/Values">Our Values</Breadcrumb.Item>
                <Breadcrumb.Item href="/Career">Careers</Breadcrumb.Item>
                <Breadcrumb.Item href="/Coupon">Coupon & Reward</Breadcrumb.Item>
                <Breadcrumb.Item href="/Customer">Customer Support</Breadcrumb.Item>
                <Breadcrumb.Item href="/Locator">Store Locator</Breadcrumb.Item>
                <Breadcrumb.Item active>Cart</Breadcrumb.Item>

            </Breadcrumb>

            <main className="cart-page">
                <h1>Check out</h1>
                {cartItemElements}
                <p className="total-cost">Total: {totalCostDisplay}</p>
                <div className="order-button">
                    <button onClick={orderPlease}>{`${(order) ? 'please wait...' : 'Place Order'}`}</button>


                </div>
            </main>
        </>
    )
}

export default Cart