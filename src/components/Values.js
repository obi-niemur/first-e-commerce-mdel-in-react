import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';



function Values() {

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/About">About</Breadcrumb.Item>
                <Breadcrumb.Item href="/Contact">Contact Us</Breadcrumb.Item>
                <Breadcrumb.Item href="/Privacy">Privacy Policy</Breadcrumb.Item>
                <Breadcrumb.Item active>Our Values</Breadcrumb.Item>
                <Breadcrumb.Item href="/Career">Careers</Breadcrumb.Item>
                <Breadcrumb.Item href="/Coupon">Coupon & Reward</Breadcrumb.Item>
                <Breadcrumb.Item href="/Customer">Customer Support</Breadcrumb.Item>
                <Breadcrumb.Item href="/Locator">Store Locator</Breadcrumb.Item>
                <Breadcrumb.Item href="/Cart">Cart</Breadcrumb.Item>
            </Breadcrumb>
            <h1>Our Values</h1>
            <p>At [Kapor Clothing Store], our values are at the heart of everything we do. We believe in delivering exceptional quality and style to our customers while maintaining a strong commitment to ethical and sustainable practices.
                Our core values include:

                <ol>
                   
                    <li><strong>Quality:</strong> We are dedicated to providing clothing of the highest quality, ensuring that every garment is crafted with precision and attention to detail.</li>
                    <li><strong>Style</strong>: We embrace the latest fashion trends and strive to offer stylish and innovative designs that cater to diverse tastes and preferences.</li>
                    <li><strong>Sustainability:</strong> We are deeply committed to reducing our environmental footprint. From sourcing eco-friendly materials to implementing ethical manufacturing practices, we prioritize sustainability in every step of our production process.</li>
                    <li><strong>Transparency:</strong> We value open communication with our customers. We believe in providing honest and accurate information about our products, materials, and processes, allowing our customers to make informed choices.</li>
                    <li><strong>Customer Satisfaction:</strong> Our customers are at the center of everything we do. We are dedicated to providing exceptional customer service, ensuring that every interaction is personalized, helpful, and exceeds expectations.</li>

                </ol>
            </p>   

            <p>At [Kapor Clothing Store], our values guide us in creating a brand that not only offers high-quality products but also contributes to a more sustainable and responsible fashion industry.</p> 
           

        </div>

    )
}

export default Values;

