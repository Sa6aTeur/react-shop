import React, { useContext, useState } from 'react'
import lickedButton from '../img/lickedButton.svg'
import unlickedButton from '../img/unlickedButton.svg'
import btnPlus from '../img/btnPlus.svg'
import btnChecked from '../img/btnChecked.svg'
import AppContext from '../context'
import ContentLoader from 'react-content-loader';


const Card = ({itemId,imageUrl, price, title, isInFavorite = false,}) => {

  const {isItemAdded,onAddToCart, isLoading,onAddToFavorites,isItemInFavorite} = useContext(AppContext)
  const [ inFavorite, setInFavorite] = useState(isInFavorite)

  const onClickFavorite = () =>{
    setInFavorite(!inFavorite)
    onAddToFavorites({itemId, title, price, imageUrl})
  }

  const onClickPlus = () =>{ 
      onAddToCart({itemId, title, price, imageUrl}) 
  }

  return (
    <div className="card">
      {isLoading ? (
                <ContentLoader
                speed={2}
                width={155}
                height={250}
                viewBox="0 0 155 265"
                backgroundColor="#D4D4D4"
                foregroundColor="#ecebeb">
                <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>) 

              : (<>
                <div className="favorite"> <img onClick={onClickFavorite} src={isItemInFavorite(itemId)? lickedButton : unlickedButton} alt="addLike" /></div>       
                <div>
                  <img src={imageUrl} alt="sneakers" height={112} width={133} />
                  <h5>{title}</h5>
                  <div className="d-flex justify-between">
                    <div className="d-flex justify-between">
                      <span className="text-uppercase mr-5">цена:</span>
                      <b>{price}</b>
                    </div>
                    <img onClick={onClickPlus} src={ isItemAdded(itemId) ? btnChecked : btnPlus} alt="to cart" />
                  </div>
                </div>
              </>)}
    </div>
  )
}

export default Card
