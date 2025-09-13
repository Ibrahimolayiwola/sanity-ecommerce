import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const Context = createContext();
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  const addToCart = (product, quantity) => {
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    const checkProductInCart =
      cartItems.length >= 1
        ? cartItems.find((cartItem) => cartItem._id === product._id)
        : "";

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map(
        (cartItem) =>
          cartItem._id === product._id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        // if(cartItem._id === product._id) {
        //   return  { ...cartItem, quantity: cartItem.quantity + quantity }
        // } else {
        //   return cartItem
        // }
      );

      setCartItems([...updatedCartItems]);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    toast.success(`You added ${quantity} ${product.name} to the cart`);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item._id !== product._id
    );
    const productIndex = cartItems.findIndex(
      (item) => item._id === product._id
    );
    const productQty = cartItems[productIndex].quantity;
    setCartItems(updatedCartItems);
    setTotalQuantities((prev) => prev - productQty);
    setTotalPrice((prev) => prev - product.price * productQty);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        quantity,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
