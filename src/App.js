import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from "./pages/Home"
import Medecin from "./pages/Medecin"
import Inscription from "./pages/Inscription"
import Delete from './pages/Delete'
import Update from './pages/Update'

import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <Router>

      <div>
        <Switch>
          <Route path="/inscription">
            <Inscription />
          </Route>

          {/**todo systeme de page dans les pages */}
          <Route path="/update/:id" component={Update}>
          </Route>
          <Route path="/description/:id" component={Medecin}>
          </Route>
          <Route path="/delete/:id" component={Delete}>
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

