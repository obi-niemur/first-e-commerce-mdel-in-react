import React from 'react'
import {CustomContext} from '../components/Customcontext'


function CartItem({item}){
    
    const {removeItem} = React.useContext(CustomContext)
    return(
         <div className="cart-item">
            <i onClick={()=>removeItem(item.id)} className="ri-delete-bin-line"></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
    
}

export default CartItem