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
import CookieConsent from "react-cookie-consent";
import { Suspense, useEffect, useState } from "react";
import OrdersPage from "./pages/ordersPage";
import { useTranslation } from "react-i18next";
import ThanksPage from "./pages/thanksPage";

function App() {
  const [token, setToken] = useState(authService.tokenValue);
  const [t] = useTranslation();

  useEffect(() => {
    authService.setTokenFromLocalStorage();
    authService.token.subscribe(setToken);
  }, []);

  const isLoggedIn = () => {
    return token !== "";
  };

  return (
    <Suspense fallback="loading">
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
              <Route path="/thanks" component={ThanksPage} />
              <Route path="/" component={ProductsPage} />
            </Switch>
          )}
        </div>
        <CookieConsent
          debug={true}
          style={{ background: "#006094", fontSize: 15, textAlign: "center" }}
          buttonStyle={{
            background: "#ded300",
            borderRadius: 8,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 30,
            paddingRight: 30,
          }}
          buttonText={t("cookies.buttonText")}
        >
          {t("cookies.alertText")}
        </CookieConsent>
      </>
    </Suspense>
  );
}

export default App;
