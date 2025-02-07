import React from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Samsung Galaxy S23', price: '₹44,999', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=70' },
  { id: 2, name: 'iPhone 14', price: '₹59,999', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70' },
  { id: 3, name: 'OnePlus 12R', price: '₹29,999', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/f/q/-original-imagy5wgrbhhbhst.jpeg?q=70' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Latest Mobile Phones Offer</h1>
        <div className="product-container">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
