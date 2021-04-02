import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './Components/Home/Home';
// import ProductsCard from "./ProductsCard/ProductsCard";
import CheckOut from "./Components/CheckOut/CheckOut";
import Admin from "./Components/Adminn/Admin";
import Orders from "./Components/Orders/Orders";
import AboutUs from "./Components/AboutUs/AboutUs";
import ManageProducts from "./Components/ManageProducts/ManageProducts";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CheckOutConfirm from "./Components/CheckOutConfirm/CheckOutConfirm";
import ConfirmMessege from "./Components/ConfirmMessege/ConfirmMessege";

export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <div>
        <Router>

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/checkOut/:productId">
              <CheckOut></CheckOut>
            </PrivateRoute>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>

            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/manageProduct">
              <ManageProducts></ManageProducts>
            </Route>

            <Route path="/confirmCheckout">
              <CheckOutConfirm></CheckOutConfirm>
            </Route>

            <Route path="/confirmMsg">
              <ConfirmMessege></ConfirmMessege>
            </Route>

          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
