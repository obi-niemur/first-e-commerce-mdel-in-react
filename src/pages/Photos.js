import React,{useContext} from "react"
import {CustomContext} from '../components/Customcontext'
import {getClass} from '../utils/index'
import Images from '../components/Images'
import Footer from "../components/Footer"
import Slider from "../components/Slider"


function Photos() {
    const context = useContext(CustomContext)
  
    
    const getPhotos = context.allPhotos.map((con, index)=>{
        return(
            <>
            
            <Images  key={con.id} img={con} className={getClass(index)} />
            
            </>
        )
    })
    
    return (
        <>
        <Slider />
            
        <main className="photos">
            {getPhotos}
        </main>
        <div>
            <Footer />
        </div>
          
        </>
    )
}

export default Photos