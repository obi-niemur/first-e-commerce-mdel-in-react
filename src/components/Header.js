import React from "react"
import {Link} from 'react-router-dom'
import { CustomContext } from '../components/Customcontext'
import Nav from 'react-bootstrap/Nav';

 

function Header() {
    const { cartItems } = React.useContext(CustomContext)
   
    function cartChange(){
        if (cartItems.length === 0){
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        } else{
            return <i className="ri-shopping-cart-fill ri-fw ri-2x" ></i>

        }
    }
   

    return (
        <header>
            
            <Link className="headerclass" to='/'><h2>Kapor Clothing Store</h2></Link>
            
            {/* <p>Please hove over the images and click on + icon, if you like. then click on Cart ICON in top left corder to go to cart page.</p> */}
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href='About'>About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="Contact">Contact Us</Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                    <Nav.Link href="Privacy">Privacy Policy</Nav.Link>
                </Nav.Item>

                
                
            </Nav>
            {/* <Link to='/About'>{Aboutus}</Link> */}
            <Link to='/Cart'>{cartChange()}</Link>
        </header>
    )
}

export default Header
