import React from "react";
// import Nav from 'react-bootstrap/Nav';
function Footer(){
    return(
        <div className="footerSection">
            <div className="signup">
            <input className="signupBox" type="text" name="signup" placeholder="Enter Your Email" />
            <label onClick={()=>{window.alert("Your email has been added")}}>Sign Up For Enotification</label>
            </div>
            <div>
                <li>
                    <a href="Contact"><ul>Contact Us</ul></a>
                    <a href="About"><ul>About Us</ul></a>
                </li>
            </div>
            
        </div>
    )
}

export default Footer;