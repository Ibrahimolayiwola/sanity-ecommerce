export const addToCart = ({
  product,
  quantity,
  cartItems,
  setCartItems,
  setTotalPrice,
  setTotalQuantities,
}) => {
  setTotalPrice((prev) => prev + product.price * quantity);
  setTotalQuantities((prev) => prev + quantity);

  const checkProductInCart = cartItems.find((item) => item._id === product._id);

  if (checkProductInCart) {
    const updatedCartItems = cartItems.map((item) =>
      item._id === product._id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
    setCartItems(updatedCartItems);
  } else {
    setCartItems([...cartItems, { ...product, quantity }]);
  }
};
