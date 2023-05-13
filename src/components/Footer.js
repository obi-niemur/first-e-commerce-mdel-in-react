import React from "react";
function Footer(){
    return(
        <div className="footerSection">
            <div className="signup">
            <input className="signupBox" type="text" name="signup" placeholder="Enter Your Email" />
            <label onClick={()=>{window.alert("Your email has been added")}}>Sign Up For Enotification</label>
            </div>
            <div>
                <li>
                    <ul>Contact Us</ul>
                    <ul>About Us</ul>
                </li>
            </div>
            
        </div>
    )
}

export default Footer;