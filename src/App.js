import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomeView from './views/HomeView';
import PizzaFormView from './views/PizzaFormView';
const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>

      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/pizza' component={PizzaFormView} />
      </Switch>
    </>
  );
};
export default App;
