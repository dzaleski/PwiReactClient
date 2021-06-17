import LoginPage from "./pages/loginPage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import RegisterPage from "./pages/registerPage";
import ProductsPage from "./pages/productsPage";
import "./App.css";
import "./index.css";
import CartPage from "./pages/cartPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 h-screen">
        <Switch>
          <Route path="/cart" component={CartPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/" component={ProductsPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
