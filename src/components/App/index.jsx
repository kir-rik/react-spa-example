import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import SomePage from '../../pages/SomePage';

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">ROOT</Link>
            </li>
            <li>
              <Link to="/somepage">PAGE1</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/somepage">
            <SomePage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    );
  }
}
