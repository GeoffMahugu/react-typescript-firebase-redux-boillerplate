import React from 'react';
import { BrowserRouter as Router, Switch, Route, RouteComponentProps } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../state/store';


import routes from '../config/routes';
import '../scss/App.scss';
import AuthRoute from '../modules/auth/AuthRoute';

function App() {

  return (
    <Router>
      <Switch>
        {routes.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(routeProps: RouteComponentProps<any>) => {
              return (
                <Provider store={store}>
                  <PersistGate loading={null} persistor={persistor}>
                    {(route.protected)
                      ? <AuthRoute ><route.component {...routeProps} /></AuthRoute>
                      : <route.component {...routeProps} />
                    }
                  </PersistGate>
                </Provider>);
            }}
          />)}
      </Switch>
    </Router>
  );
}

export default App;
