import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './index.css';
import App from './App';
// import ListMessage from './pages/admin/message/ListMessage';
// import Login from "./pages/Login";
import { mainRouter } from "./routes";
import "antd/dist/antd.css";
// import * as serviceWorker from './serviceworker'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render= {routeProps=><App {... routeProps}/>}></Route>
      {mainRouter.map(route=>{
        return <Route key={route.page} {...route} />;
      })}
      
      <Redirect to = '/404'/> 
    </Switch>
  </Router>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
