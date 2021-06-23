import logo from './img/logo.png';
import cartImg from './img/Cart.svg'
import userImg from './img/User.svg'
import likeImg from './img/Like.svg'
import sneaker from './img/sneaker1.jpg'
import './App.css';

function App() {
  return (
    <div className="wrapper clear">
      <div>
        <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
            <img className="mr-15" src={logo} height={40} width={40} />

            <div className="headerInfo">
              <h3 className="text-uppercase">REACT SNEAKERS</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
            
          </div>

          <ul className="d-flex ">
            <li className="mr-30" >
              <img className="mr-5" src={cartImg} height={20} width={20} /> 
              <span className="mr-15">1205 руб.</span>
            </li>
            <li>
              <img className="mr-25" src={likeImg} height={20} width={20} />
              <img src={userImg} height={20} width={20} />
            </li>
          </ul>

        </header>

        <div className="content p-40">
          <h1>Все кроссовки</h1>

          <div className="card-wrapper d-flex ">
            <div className="card">
              <img src={sneaker} alt="sneakers" height={112} width={133} />
              <div>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between">
                  <div className="d-flex justify-between">
                    <span className="text-uppercase mr-5">цена:</span>
                    <b>1205</b>
                  </div>
                  <button className="button">+</button>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={sneaker} alt="sneakers" height={112} width={133} />
              <div>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between">
                  <div className="d-flex justify-between">
                    <span className="text-uppercase mr-5">цена:</span>
                    <b>1205</b>
                  </div>
                  <button className="button">+</button>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={sneaker} alt="sneakers" height={112} width={133} />
              <div>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between">
                  <div className="d-flex justify-between">
                    <span className="text-uppercase mr-5">цена:</span>
                    <b>1205</b>
                  </div>
                  <button className="button">+</button>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={sneaker} alt="sneakers" height={112} width={133} />
              <div>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between">
                  <div className="d-flex justify-between">
                    <span className="text-uppercase mr-5">цена:</span>
                    <b>1205</b>
                  </div>
                  <button className="button">+</button>
                </div>
              </div>
            </div>

            

        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
