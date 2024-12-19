import React, { useState } from "react";
import "./App.css";

function App() {
  // a. Variabel (State untuk daftar item, keranjang, dan total harga)
  const [items] = useState([
    { id: 1, name: "Nasi Goreng", price: 20000 },
    { id: 2, name: "Mie Goreng", price: 15000 },
    { id: 3, name: "Es Teh", price: 5000 },
    { id: 4, name: "Ayam Bakar", price: 25000 },
  ]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // d. Function untuk menambahkan item ke keranjang
  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  // d. Function untuk menghapus item dari keranjang
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem, index) => index !== cart.indexOf(item));
    setCart(updatedCart);
    setTotal(total - item.price);
  };

  return (
    <div className="App">
      <h1>Mesin Kasir Sederhana</h1>
      <div className="menu">
        <h2>Daftar Menu</h2>
        {items.map((item) => (
          // c. Perulangan (map untuk menampilkan daftar menu)
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>Harga: Rp {item.price}</p>
            <button onClick={() => addToCart(item)}>Tambah ke Keranjang</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Keranjang Belanja</h2>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <p>Rp {item.price}</p>
              <button onClick={() => removeFromCart(item)}>Hapus</button>
            </div>
          ))
        ) : (
          <p>Keranjang kosong</p>
        )}
        <h3>Total: Rp {total}</h3>
      </div>
    </div>
  );
}

export default App;