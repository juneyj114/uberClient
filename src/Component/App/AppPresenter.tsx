import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  RouteComponentProps
} from "react-router-dom";
import Login from "../../Routes/Login";
import PhoneLogin from "../../Routes/PhoneLogin";
import VerifyPhone from "../../Routes/VerifyPhone";
import SocialLogin from "../../Routes/SocialLogin";
import AddPlace from "../../Routes/AddPlace";
import EditAccount from "../../Routes/EditAccount";
import FindAddress from "../../Routes/FindAddress";
import Home from "../../Routes/Home";
import Places from "../../Routes/Places";
import Ride from "../../Routes/Ride";
import Settings from "../../Routes/Settings";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter = ({ isLoggedIn }: IProps) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>
    <Route path="/phone-login" component={PhoneLogin}></Route>
    <Route path="/verify-phone" component={VerifyPhone}></Route>
    <Route path="/social-login" component={SocialLogin}></Route>
    <Redirect to="/" from="*" />
  </Switch>
);

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/ride">
      <Ride />
    </Route>
    <Route path="/edit-account">
      <EditAccount />
    </Route>
    <Route path="/settings">
      <Settings />
    </Route>
    <Route path="/places">
      <Places />
    </Route>
    <Route path="/add-place">
      <AddPlace />
    </Route>
    <Route path="/find-address">
      <FindAddress />
    </Route>
    <Redirect to="/" from="*" />
  </Switch>
);

export default AppPresenter;
