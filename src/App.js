import "./App.css";
import Login from "./router/Login";
import routes from "./router/webRoutes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={routes.LOGIN}>
            <Login />
          </Route>
          <Route path={routes.PERSONAL_DETAILS}>
            <Login />
          </Route>
          <Route path={routes.HOME}>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
