import React from "react"
import {Link} from 'react-router-dom'
import { CustomContext } from '../components/Customcontext'
import Container from 'react-bootstrap/Container';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


 

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
            
          

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="headerclass" href="/"><h2>Kapor Clothing Store</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/About">About</Nav.Link>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                            <Nav.Link href="/Privacy">Privacy</Nav.Link>
                            <Nav.Link href="/Values">Values</Nav.Link>
                            <Nav.Link href="/Career">Career</Nav.Link>
                            <Nav.Link href="/Coupon">Coupon</Nav.Link>
                            <Nav.Link href="/Customer">Customer</Nav.Link>
                            <Nav.Link href="/Locator">Locator</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



           
            <Link to='/Cart'>{cartChange()}</Link>
        </header>
    )
}

export default Header
