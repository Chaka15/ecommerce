import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import InformationPage from "./components/InformationPage/InformationPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/favorites" component={FavoritesPage} exact />
        <Route path="/:id" component={InformationPage} exact />
        <Route render={() => <h1>Not found</h1>} />
      </div>
    </BrowserRouter>
  );
}

export default App;
