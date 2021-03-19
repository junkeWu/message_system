import React from "react"
import { Switch, Route,Redirect} from 'react-router-dom'
import './App.css';
import { adminRouter } from "./routes";
import Frame from './components/Frame/index'
function App() {
  return (
    <Frame >
      <Switch>
        {adminRouter.map(route=>{
          return (
            <Route 
              key= {route.path}
              path={route.path}
              exact={route.exact}
              render={routeProps=>{
                return <route.component {...routeProps} />;
              }}
              />
          );
        })}
      < Redirect to = '/404'/> 
      </Switch>
    </Frame>
  );
}

export default App;

