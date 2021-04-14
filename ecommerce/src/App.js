import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import InformationPage from "./components/InformationPage/InformationPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SavedSection from "./components/SavedSection/SavedSection";
import Auth from "./components/Auth/Auth";
import Logout from "./components/Auth/Logout/Logout";
import { authCheckState } from "./store/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/saved" component={SavedSection} exact />
        <Route path="/logout" component={Logout} exact />
        <Route path="/favorites" component={FavoritesPage} exact />
        <Route path="/auth" component={Auth} exact />
        <Route path="/:id" component={InformationPage} exact />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
