import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { CartCantextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartCantextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartCantextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
