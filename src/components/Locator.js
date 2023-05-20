
import React from "react";

import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Locator() {
    return (
        <div>

            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/About">About</Breadcrumb.Item>
                <Breadcrumb.Item href="/Contact">Contact Us</Breadcrumb.Item>
                <Breadcrumb.Item href="/Privacy">Privacy Policy</Breadcrumb.Item>
                <Breadcrumb.Item href="/Values">Our Values</Breadcrumb.Item>
                <Breadcrumb.Item href="/Career">Careers</Breadcrumb.Item>
                <Breadcrumb.Item href="/Coupon">Coupon & Reward</Breadcrumb.Item>
                <Breadcrumb.Item href="/Customer">Customer Support</Breadcrumb.Item>
                <Breadcrumb.Item active>Store Locator</Breadcrumb.Item>
                <Breadcrumb.Item href="/Cart">Cart</Breadcrumb.Item>

            </Breadcrumb>
            
            <h1>Store Locator</h1>
            <p>[Kapor Clothing Store] is proud to have a presence in multiple locations, making it convenient for you to experience our products in person. Use our Store Locator to find the nearest store to your location.

                <ol>

                    <li><strong>Store Search:</strong>  Enter your city, state, or zip code into our Store Locator tool to discover the closest [Kapor Clothing Store] store. You can also filter by store type, such as flagship stores or retail partners, to find the most suitable location for your needs..</li>
                    <li><strong>Store Details: </strong>Once you find a store, you'll find detailed information about its address, contact number, store hours, and any additional services or amenities available at that location.</li>
                    <li><strong>Virtual Tours:</strong>Can't visit a physical store? Explore our virtual tours, available for select locations, to get a virtual shopping experience from the comfort of your home. Take a 360-degree tour of the store, browse through the collections, and even make purchases online.</li>

                </ol>
            </p>

            <p>Visit our Store Locator page to find a [Kapor Clothing Store] store near you. We look forward to welcoming you and providing a personalized shopping experience that showcases our latest designs and ensures your satisfaction.</p>

        </div>
    )
}

export default Locator;