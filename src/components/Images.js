import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { CustomContext } from './Customcontext'

function Images({ img, className }) {
    const [hoverState, setHoverState] = React.useState(false)
    const [heart, setHeart] = React.useState(false)
    const [fillCart, setFillCart] = React.useState(false)
    const context = useContext(CustomContext)


    const fillCartChange = () => {
        setFillCart(prev => !prev)

    }

    const fillheart = () => {
        setHeart(prev => !prev)
    }
    const handleMouseOver = () => {
        setHoverState(true)
    }

    const handleMouseOut = () => {
        if (heart || fillCart) {
            setHoverState(true)
        } else {
            setHoverState(false)
        }
    }

    return (
        
        
        
        <div className={`${className} image-container`}
            onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}
        >
            <img src={img.url} className='image-grid' />
            {/* button for adding the image to cart */}

            <div class="wrapper">

            <button  className='buttonStyle'
                onClick={() => {
                    return (
                        context.addFavtoCart(img),
                        fillCartChange(),
                        context.addItemtoCart(img))
                }}
            >
                Add to Cart

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <p className="Price">
                Price: {img.price}
            </p>
      



            {hoverState && <i onClick={() => {
               return( context.changetoFav(img.id),
                    fillheart())
            }}
                className={`ri-heart-${(heart) ? 'fill' : 'line'} favorite`}>
            </i>}
            {hoverState && <i onClick={() => {
                return(
                context.addFavtoCart(img),
                    fillCartChange(),
                    context.addItemtoCart(img))
            }}
                className={`${(fillCart) ? 'ri-shopping-cart-fill cart' : 'ri-add-circle-line cart'}`}>
            </i>}
        </div>
     
    )
}

Images.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string,
        id: PropTypes.string,
        // isFavorite: PropTypes.boolean
    })
}


export default Images