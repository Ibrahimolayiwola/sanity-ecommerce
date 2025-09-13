import { addToCart } from "./cartHelper";

test("Add an existing product to cart", () => {
  const product = { _id: "1234", name: "phone", price: 100 };
  const quantity = 1;
  const cartItems = [{ _id: "123", name: "iphone", price: 100, quantity: 2 },{ _id: "1234", name: "phone", price: 100, quantity: 2 }];

  const mockSetCartItems = jest.fn();
  const mockSetTotalPrice = jest.fn((fn) => fn(100));
  const mockSetTotalQuantities = jest.fn((fn) => fn(2));

  addToCart({
    product,
    quantity,
    cartItems,
    setCartItems: mockSetCartItems,
    setTotalPrice: mockSetTotalPrice,
    setTotalQuantities: mockSetTotalQuantities,
  });

  expect(mockSetTotalPrice).toHaveBeenCalled();
  expect(mockSetTotalQuantities).toHaveBeenCalled();
  expect(mockSetCartItems).toHaveBeenCalledWith([{ _id: "123", name: "iphone", price: 100, quantity: 2 },{ _id: "1234", name: "phone", price: 100, quantity: 3 }]);
  console.log(mockSetCartItems.mock.calls[0][0]);
});
