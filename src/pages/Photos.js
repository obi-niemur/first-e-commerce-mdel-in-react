import React,{useContext} from "react"
import {CustomContext} from '../components/Customcontext'
import {getClass} from '../utils/index'
import Images from '../components/Images'

function Photos() {
    const context = useContext(CustomContext)
  
    
    const test = context.allPhotos.map((con, index)=>{
        return(
            <Images  key={con.id} img={con} className={getClass(index)} />
        )
    })
    
    return (
        <main className="photos">
            {test}
        </main>
    )
}

export default Photos