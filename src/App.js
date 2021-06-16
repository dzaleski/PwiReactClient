import Login from "./components/login";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Register from "./components/register";
import Products from "./components/products";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 h-screen">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Products} />
        </Switch>
      </div>
    </>
  );
}

export default App;
