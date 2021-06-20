import LoginPage from "./pages/loginPage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import RegisterPage from "./pages/registerPage";
import ProductsPage from "./pages/productsPage";
import CartPage from "./pages/cartPage";
import SummaryPage from "./pages/summaryPage";
import "./App.css";
import "./index.css";
import { authService } from "./services/authService";
import { useEffect, useState } from "react";
import OrdersPage from "./pages/ordersPage";

function App() {
  const [token, setToken] = useState(authService.tokenValue);

  useEffect(() => {
    authService.setTokenFromLocalStorage();
    authService.token.subscribe(setToken);
  }, []);

  const isLoggedIn = () => {
    return token !== "";
  };

  return (
    <>
      <Navbar />
      <div className="container mt-6 mx-auto px-6 h-screen">
        {!isLoggedIn() && (
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/" component={LoginPage} />
          </Switch>
        )}

        {isLoggedIn() && (
          <Switch>
            <Route path="/cart" component={CartPage} />
            <Route path="/summary" component={SummaryPage} />
            <Route path="/orders" component={OrdersPage} />
            <Route path="/" exact component={ProductsPage} />
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;
