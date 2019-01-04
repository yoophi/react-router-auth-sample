import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthButton from "./components/AuthButton";
import PrivateRoute from "./components/ProtectedRoute";
import Public from "./containers/Public";
import Login from "./containers/Login";
import Protected from "./containers/Protected";

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
}

export default AuthExample;
