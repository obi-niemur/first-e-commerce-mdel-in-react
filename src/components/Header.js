import React from "react"
import {Link} from 'react-router-dom'
import { CustomContext } from '../components/Customcontext'

 

function Header() {
    const { cartItems } = React.useContext(CustomContext)
    const [cartFull, setCartFull] = React.useState(false)

    function cartChange(){
        if (cartItems.length === 0){
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        } else{
            return <i className="ri-shopping-cart-fill ri-fw ri-2x" ></i>

        }
    }
    function cartChange1(){
        if(cartItems.length > 0){
            setCartFull(true)
        }
    }

    return (
        <header>
            
            <Link to='/'><h2>Pic Some</h2></Link>
            <Link to='/Cart'>{cartChange()}</Link>
        </header>
    )
}

export default Header
