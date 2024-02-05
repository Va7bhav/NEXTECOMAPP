/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import React, { useEffect, useState } from "react";

// const cart = {
//   "wear-this-code": {
//       qty: 1,
//       price: 400,
//       name: "hello",
//       size: "XL",
//       variant: "blue"
//   }
// }
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error)
      localStorage.clear()
    }
  }, [])

  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));

    let subt = 0;
    let keys = Object.keys(cart)
    for (let i = 0; i < keys.length; i++) {
      subt += cart[keys[i]].price * cart[keys[i]].qty;
    }
    setSubTotal(subt);
  }
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const clearCart = () => {
    setCart({})
    saveCart({})
  }
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart)
    saveCart(newCart)
  }
  return <>
    <Navbar key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}
