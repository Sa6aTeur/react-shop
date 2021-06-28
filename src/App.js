import { Route } from 'react-router';
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home';
import './App.css';
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


  const onAddToCart = (obj) =>{
      try {
        console.log(cartItems.find((item) => Number(item.id) === Number(obj.id) ))
        if(cartItems.find(item => Number(item.id) === Number(obj.id) )){
          
          sneakersApi.delete(`/cart/${obj.id}`)
          setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
        }else {
          sneakersApi.post('/cart', obj);
         setCartItems((prev) => [...prev, obj]);
        }  
      } catch (error) {
        alert("Не удалось обновить корзину")
      } 
  }

  const onRemoveFromCart = (id) => {
    sneakersApi.delete(`/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id != id))
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }


  return (
    <AppContext.Provider value={
      {isItemAdded,
        cartItems,
        homeItems,
        favorites,
        onAddToCart,
        isLoading,   
      }}>
      <div className="wrapper clear">
        
        {cartOpened && <Drawer items={cartItems} onRemoveFromCart={onRemoveFromCart} onCartClose={() => setcartOpened(false)}/> }
        

        <Header onCartOpen={() => setcartOpened(true)}/>

        <Route path="/react-shop" exact>
          <Home onAddToCart={onAddToCart} homeItems={homeItems}  cartItems={cartItems} favorites={favorites}/>
        </Route>

        {/* <Route path="/react-shop/" exact>
          <Home onRemoveFavorite={onRemoveFavorite} onAddToFavorite="" homeItems={homeItems}  cartItems={cartItems} favorites={favorites}/>
        </Route> */}

      </div>
    </AppContext.Provider>
  );
}

export default App;
