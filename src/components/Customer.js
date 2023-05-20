import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Customer(){
    return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/About">About</Breadcrumb.Item>
                <Breadcrumb.Item href="/Contact">Contact Us</Breadcrumb.Item>
                <Breadcrumb.Item href="/Privacy">Privacy Policy</Breadcrumb.Item>
                <Breadcrumb.Item href="/Values">Our Values</Breadcrumb.Item>
                <Breadcrumb.Item href="/Career">Careers</Breadcrumb.Item>
                <Breadcrumb.Item href="/Coupon">Coupon & Reward</Breadcrumb.Item>
                <Breadcrumb.Item active>Customer Support</Breadcrumb.Item>
                <Breadcrumb.Item href="/Locator">Store Locator</Breadcrumb.Item>
                <Breadcrumb.Item href="/Cart">Cart</Breadcrumb.Item>

            </Breadcrumb>
           
            <h1>We're Here to Help</h1>
            <p>At [Kapor Clothing Store], we are committed to providing exceptional customer support to ensure your shopping experience is smooth and enjoyable. Our dedicated support team is available to assist you with any questions, concerns, or feedback you may have.

                <ol>

                    <li><strong>Contact Us:</strong> We are dedicated to providing clothing of the highest quality, ensuring that every garment is crafted with precision and attention to detail.</li>
                    <li><strong>FAQ:</strong> We embrace the latest fashion trends and strive to offer stylish and innovative designs that cater to diverse tastes and preferences.</li>
                    <li><strong>Order Tracking:</strong> We are deeply committed to reducing our environmental footprint. From sourcing eco-friendly materials to implementing ethical manufacturing practices, we prioritize sustainability in every step of our production process.</li>
                    <li><strong>Returns and Exchanges:</strong> We value open communication with our customers. We believe in providing honest and accurate information about our products, materials, and processes, allowing our customers to make informed choices.</li>
                    <li><strong>Feedback:</strong> Our customers are at the center of everything we do. We are dedicated to providing exceptional customer service, ensuring that every interaction is personalized, helpful, and exceeds expectations.</li>

                </ol>
            </p>

            <p>Your satisfaction is our priority, and we are dedicated to providing exceptional customer support at every step of your journey with us. Don't hesitate to reach out to us if you need assistance or have any questions.</p>


        </div>
    )
}

export default Customer;