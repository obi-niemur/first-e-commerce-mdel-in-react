import React, { useContext } from "react"
import { CustomContext } from '../components/Customcontext'
import { getClass } from '../utils/index'
import Images from '../components/Images'
import Slider from "../components/Slider"
import Breadcrumb from 'react-bootstrap/Breadcrumb';




function Photos() {
    const context = useContext(CustomContext)


    const getPhotos = context.allPhotos.map((con, index) => {
        return (
            <>

                <Images key={con.id} img={con} className={getClass(index)} />

            </>
        )
    })

    return (
        <>
            <Slider />

            <Breadcrumb>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/About">About</Breadcrumb.Item>
                <Breadcrumb.Item href="/Contact">Contact Us</Breadcrumb.Item>
                <Breadcrumb.Item href="/Privacy">Privacy Policy</Breadcrumb.Item>
                <Breadcrumb.Item href="/Values">Our Values</Breadcrumb.Item>
                <Breadcrumb.Item href="/Career">Careers</Breadcrumb.Item>
                <Breadcrumb.Item href="/Coupon">Coupon & Reward</Breadcrumb.Item>
                <Breadcrumb.Item href="/Customer">Customer Support</Breadcrumb.Item>
                <Breadcrumb.Item href="/Locator">Store Locator</Breadcrumb.Item>
                <Breadcrumb.Item href="/Cart">Cart</Breadcrumb.Item>

            </Breadcrumb>

            <main className="photos">
                {getPhotos}
            </main>


        </>
    )
}

export default Photos