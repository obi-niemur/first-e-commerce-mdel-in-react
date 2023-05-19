import React from 'react'
const CustomContext = React.createContext()

function CustomContextProvider (props){
    const [allPhotos, setAllPhotos] = React.useState([])
    const [favItems, setFavItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([]) 
    
    
    function placeOrder(){
        setTimeout(()=>{
            
            window.alert('your order has been placed')
            setCartItems([])
            
        }, '1000')
    }
    
    function changetoFav(id){
        const updateArray = allPhotos.map(arr=>{
            if(arr.id === id){
                return{...arr, isFavorite:!arr.isfavorite}
            }
            
            return arr
          
    })
    setAllPhotos(updateArray)
    
    }
    
     function addFavtoCart (obj){
        setFavItems(prev=>{
            return{
                ...prev,
                obj
            }
        })
        
    }
    
    function addItemtoCart (obj){
        setCartItems(prev=>{
            return[
                ...prev,
                obj
            ]
        })
          
    }
    
    function removeItem(id){
        setCartItems(prev=>prev.filter(item=>item.id !== id))
    }
    
    
   
    
      
    React.useEffect(()=>{
        fetch("https://raw.githubusercontent.com/obi-niemur/images/master/images.json")
         
        .then(response=> response.json())
        .then(data=> {
            setAllPhotos(data)})
        
        },[])

    
        return(
            <CustomContext.Provider value={{allPhotos, changetoFav, favItems, addFavtoCart, addItemtoCart, removeItem, cartItems, placeOrder}}>
                {props.children}
            </CustomContext.Provider>
        )
}
    


export {CustomContext, CustomContextProvider }