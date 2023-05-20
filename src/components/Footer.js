import React from "react";
// import Nav from 'react-bootstrap/Nav';
function Footer() {
    return (
        <div className="footerSection">
            <div className="signup">
                <input className="signupBox" type="text" name="signup" placeholder="Enter Your Email" />
                <label onClick={() => { window.alert("Your email has been added") }}>Sign Up For Enotification</label>
            </div>

            <div className="footer">
                <div>
                    <ul>
                    <li>
                        <a href="Contact">Contact Us</a>
                        <a href="About">About Us</a>
                        <a href="Contact">Contact Us</a>
                        <a href="About">About Us</a>
                    </li>
                    </ul>

                </div>

                <div>
                    <ul>
                    <li>
                        <a href="Contact">Contact Us</a>
                        <a href="About">About Us</a>
                        <a href="Contact">Contact Us</a>
                        <a href="About">About Us</a>
                    </li>
                    </ul>
                </div>

            </div>

            <p className="copyright">Copyright © 2023 Kapor Clothing Store
                All Rights Reserved.</p>


        </div>
    )
}

export default Footer;