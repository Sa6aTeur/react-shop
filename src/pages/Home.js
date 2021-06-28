import React, { useContext, useEffect, useState } from 'react'
import sneakersApi from '../api/axios'
import Card from '../components/Card'
import AppContext from '../context'
import search from '../img/search.svg'


function Home({onAddToFavorite, onAddToCart, homeItems}) {
  const {isLoading} = useContext(AppContext)

  const [inputValue, setInputValue] = useState('')
  
  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onAddedToCart = (event) => {
    setInputValue(event.target.value)
  }
  

  const renderItems = () => {
    const filteredItems = homeItems.filter(items => items.title.toLowerCase().includes(inputValue.toLowerCase()))
    return (isLoading ? [...Array(8)] : filteredItems).map((item,index) => <Card  
                                                                              key={index}
                                                                              onFavorite={onAddToFavorite}
                                                                              onAddToCart={onAddToCart}
                                                                              {...item}
                                                                                  />)
  }


  return (
    <div className="content p-40">
    <div className="d-flex align-center justify-between">
      <div>
        <h1>{inputValue ? `Поиск по запросу ${inputValue}` : 'Все кроссовки' }</h1>
      </div>

      <div className="search-block">
        <img src={search} alt="search" height={15} width={15} />
        <input value={inputValue} onChange={onInputChange} type="text" placeholder="Поиск..." />
      </div>
    </div>

    <div className="d-flex flex-wrap justify-center">
      {renderItems()}
    </div>
  </div>
  )
}

export default Home
