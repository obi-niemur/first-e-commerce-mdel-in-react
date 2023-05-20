import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';



function Privacy() {

    return (
        <>

        <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/About">About</Breadcrumb.Item>
                <Breadcrumb.Item href="/Contact">Contact Us</Breadcrumb.Item>
                <Breadcrumb.Item active>Privacy Policy</Breadcrumb.Item>
                <Breadcrumb.Item href="/Values">Our Values</Breadcrumb.Item>
                <Breadcrumb.Item href="/Career">Careers</Breadcrumb.Item>
                <Breadcrumb.Item href="/Coupon">Coupon & Reward</Breadcrumb.Item>
                <Breadcrumb.Item href="/Customer">Customer Support</Breadcrumb.Item>
                <Breadcrumb.Item href="/Locator">Store Locator</Breadcrumb.Item>
                <Breadcrumb.Item href="/Cart">Cart</Breadcrumb.Item>
            </Breadcrumb>
        
      
        <div id="aboutus">
            <h1>Privacy Policy</h1>
            <p>At <strong>Kapor Clothing Store</strong>, we are committed to protecting the privacy and security of your personal information.
                This Privacy Policy outlines the types of information we collect, how we use it, and the choices you have regarding your data.</p>

            <h2>Information We Collect: </h2>

            <p>We may collect personal information from you when you visit our website, create an account, place an order, subscribe to our newsletter, or interact with our website in any way.
                The types of personal information we may collect include:

                <ul>
                    <li>Contact Information: such as your name, email address, phone number, and shipping address.</li>
                    <li>Payment Information: including credit card details, billing address, and other payment-related information necessary to process your orders.</li>
                    <li>Communication Preferences: your preferences for receiving marketing communications from us.</li>
                    <li>Website Usage Information: details about your interactions with our website, such as IP address, browser type, operating system, pages visited, and referring/exit pages.</li>

                </ul>


            </p>


            <h2>How We Use Your Information: </h2>

            <p>We may use the personal information we collect for the following purposes:

                <ul>
                    <li>Order Processing: to fulfill and manage orders, process payments, and provide customer support.</li>
                    <li>Personalization: to tailor our website content and offerings to better meet your preferences.</li>
                    <li>Marketing Communication: to send you promotional materials, newsletters, and updates about our products and services (you can opt out of these communications at any time).</li>
                    <li>Improving User Experience: to analyze website usage data, troubleshoot issues, and enhance our website's functionality.</li>

                </ul>


            </p>

            <p><bold>Please don't hesitate to contact us if you need any assistance or have any inquiries. We strive to respond to all messages within 24 hours.</bold></p>



            <h2>Customer Support: </h2>
            <p>Email: support@kapoclothing.com</p>
            <p>Phone: +1-XXX-XXX-XXXX</p>



        </div>
        </>

    )
}

export default Privacy;

