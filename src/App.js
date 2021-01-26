import "./App.css";
import Login from "./views/Login";
import Detail from "./views/Details";
import routes from "./router/webRoutes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={routes.DETAIL}>
            <Detail />
          </Route>
          <Route path={routes.LOGIN}>
            <Login />
          </Route>
          <Route exact path={"/"}>
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
