import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';



function Coupon() {

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/About">About</Breadcrumb.Item>
                <Breadcrumb.Item href="/Contact">Contact Us</Breadcrumb.Item>
                <Breadcrumb.Item href="/Privacy">Privacy Policy</Breadcrumb.Item>
                <Breadcrumb.Item href="/Values">Our Values</Breadcrumb.Item>
                <Breadcrumb.Item href="/Career">Careers</Breadcrumb.Item>
                <Breadcrumb.Item active>Coupon & Reward</Breadcrumb.Item>
                <Breadcrumb.Item href="/Customer">Customer Support</Breadcrumb.Item>
                <Breadcrumb.Item href="/Locator">Store Locator</Breadcrumb.Item>
                <Breadcrumb.Item href="/Cart">Cart</Breadcrumb.Item>

            </Breadcrumb>
            <h1>Unlock Exclusive Savings with [Kapor Clothing Store]</h1>
            <p>At [Kapor Clothing Store], we value our customers and want to reward you for choosing us as your go-to destination for fashion. Our Coupon & Reward program is designed to provide you with exclusive discounts, special offers, and exciting perks.

                <ol>

                    <li><strong>Coupons:</strong> We are dedicated to providing clothing of the highest quality, ensuring that every garment is crafted with precision and attention to detail.</li>
                    <li><strong>Rewards</strong>: We embrace the latest fashion trends and strive to offer stylish and innovative designs that cater to diverse tastes and preferences.</li>
                    <li><strong>VIP Program:</strong> We are deeply committed to reducing our environmental footprint. From sourcing eco-friendly materials to implementing ethical manufacturing practices, we prioritize sustainability in every step of our production process.</li>

                </ol>
            </p>

            <p>To participate in our Coupon & Reward program, simply create an account on our website and start enjoying the benefits today. We appreciate your continued support and look forward to helping you save while staying stylish.</p>


        </div>

    )
}

export default Coupon;

