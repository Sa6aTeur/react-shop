import { Route } from 'react-router';
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import sneakersApi from './api/axios';
import { useEffect, useState } from 'react';
import AppContext from './context';

function App() {

  const [cartOpened, setcartOpened] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [homeItems, setHomeItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    async function fetchData (){
      const homeResponse = await sneakersApi.get('/sneakers')
      const favoritesResponse = await sneakersApi.get('/favorites')
      const cartResponse = await sneakersApi.get('/cart')

      Promise.all([homeResponse, favoritesResponse, cartResponse]).then(
        setCartItems(cartResponse.data),
        setFavorites(favoritesResponse.data),
        setHomeItems(homeResponse.data),
        setIsLoading(false)
      )
    }

    fetchData()
  }, [])


  const onAddToCart = async (obj) =>{
    try {
      if(cartItems.find(item => item.itemId === obj.itemId )){
        const item = cartItems.find(item => Number(item.itemId) === Number(obj.itemId) )
        sneakersApi.delete(`/cart/${item.id}`)
        setCartItems((prev) => prev.filter((item) => Number(item.itemId) !== Number(obj.itemId)))
        
      }else {
        const {data} = await sneakersApi.post('/cart', obj);
        setCartItems((prev) => [...prev, data]);
        
      }  
    } catch (error) {
      alert("Не удалось обновить закладки")
    }
  }

  const onAddToFavorites = async (obj) =>{
    try {
      if(favorites.find(item => item.itemId === obj.itemId )){
        const item = favorites.find(item => Number(item.itemId) === Number(obj.itemId) )
        sneakersApi.delete(`/favorites/${item.id}`)
        setFavorites((prev) => prev.filter((item) => Number(item.itemId) !== Number(obj.itemId)))
        
      }else {
        const {data} = await sneakersApi.post('/favorites', obj);
        setFavorites((prev) => [...prev, data]);
        
      }  
    } catch (error) {
      alert("Не удалось обновить закладки")
    }
  }

  const onRemoveFromCart = (obj) => {
  
    sneakersApi.delete(`/cart/${obj.id}`)
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
  }

  const isItemAdded = (itemId) => {
    return cartItems.some(obj => Number(obj.itemId) === Number(itemId))
  }

  const isItemInFavorite = (itemId) => {
    return favorites.some(obj => Number(obj.itemId) === Number(itemId))
  }


  return (
    <AppContext.Provider value={
      {isItemAdded,
        cartItems,
        homeItems,
        favorites,
        onAddToCart,
        isLoading,
        onAddToFavorites,
        isItemInFavorite,
        setCartItems

      }}>
      <div className="wrapper clear">
        
        {cartOpened && <Drawer items={cartItems} 
                               onRemoveFromCart={onRemoveFromCart} 
                               onCartClose={() => setcartOpened(false)}/>}
        

        <Header onCartOpen={() => setcartOpened(true)}/>

        <Route path="/react-shop" exact>
          <Home onAddToCart={onAddToCart} 
                homeItems={homeItems}  
                cartItems={cartItems} 
                favorites={favorites}
                onAddToFavorite={onAddToFavorites}/>
        </Route>

        <Route path="/favorites" exact>
          <Favorites  />
        </Route>

      </div>
    </AppContext.Provider>
  );
}

export default App;
