import React from 'react';
import data from './data';


function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">EGPU Dock</a>

        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>

      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <div key={product._id} className="card">
               <a href={` /product/${product._id}`}>
                <img 
                  className="medium" 
                  src={product.Image} 
                  alt={product.name} 
                  />
            </a>
            <div className="card-body">
            <a href={` /product/${product._id}`}>
                <h2>{product.name}</h2>
              </a>
              <div className="rating">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="price">DKK{product.price}</div>
            </div>
          </div> 
         ))}
          
        </div>
      </main>
      <footer className="row center">
        All right reserverd Leandro Camilotti Web Developer
        </footer>

    </div>


  );
}

export default App;
