import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./webRoutes";

import Login from "../views/Login";
import Detail from "../views/Details";

const Routing = () => {
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
    )
}

export default Routing;




