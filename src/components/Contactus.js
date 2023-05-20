import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function Contactus() {

    return (
        <div id="Contactus">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/About">About</Breadcrumb.Item>
                <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                <Breadcrumb.Item href="/Privacy">Privacy Policy</Breadcrumb.Item>
                <Breadcrumb.Item href="/Values">Our Values</Breadcrumb.Item>
                <Breadcrumb.Item href="/Career">Careers</Breadcrumb.Item>
                <Breadcrumb.Item href="/Coupon">Coupon & Reward</Breadcrumb.Item>
                <Breadcrumb.Item href="/Customer">Customer Support</Breadcrumb.Item>
                <Breadcrumb.Item href="/Locator">Store Locator</Breadcrumb.Item>
                <Breadcrumb.Item href="/Cart">Cart</Breadcrumb.Item>

            </Breadcrumb>
            <h1>Contact US</h1>
            <p>vWe would love to hear from you! If you have any questions, concerns, or feedback regarding our products or services, please feel free to reach out to us using the contact information provided below.
                Our dedicated team is here to assist you and ensure that you have a seamless shopping experience.</p>

        <h2>Customer Support: </h2>
            <p>Email: support@kapoclothing.com</p>
            <p>Phone: +1-XXX-XXX-XXXX</p>

            <p><bold>Please don't hesitate to contact us if you need any assistance or have any inquiries. We strive to respond to all messages within 24 hours.</bold></p>


        </div>

    )
}

export default Contactus;

