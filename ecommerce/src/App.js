import "./App.css";

import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import InformationPage from "./components/InformationPage/InformationPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/favorites" component={FavoritesPage} exact />
        <Route path="/:id" component={InformationPage} exact />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
