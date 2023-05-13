import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../Images/pic1.png";
import pic2 from "../Images/pic2.png";
import pic3 from "../Images/pic3.png";




function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 sliderImg"
                    src={pic1}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>Welcome to Kapor Clothing Store</h3>
                    <p>Fasion for everyone</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 sliderImg"
                    src={pic2}
                    alt="Second slide"
                />

                {/* <Carousel.Caption>
                    <h3>Welcome to Kapor Clothing Store</h3>
                    <p>Fasion for everyone</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 sliderImg"
                    src={pic3}
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>Welcome to Kapor Clothing Store</h3>
                    <p>Fasion for everyone</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;