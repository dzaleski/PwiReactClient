import LoginPage from "./pages/loginPage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import RegisterPage from "./pages/registerPage";
import ProductsPage from "./pages/productsPage";
import "./App.css";
import "./index.css";
import CartPage from "./pages/cartPage";
import { authService } from "./services/authService";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(authService.tokenValue);

  useEffect(() => {
    authService.token.subscribe(setToken);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 h-screen">
        <Switch>
          {token === "" && (
            <>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/" exact component={LoginPage} />
            </>
          )}

          {token !== "" && (
            <>
              <Route path="/cart" component={CartPage} />
              <Route path="/" exact component={ProductsPage} />
            </>
          )}
        </Switch>
      </div>
    </>
  );
}

export default App;
