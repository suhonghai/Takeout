import React, { Component } from 'react';
import Loadable from 'react-loadable';
import './App.css';
import {
  BrowserRouter as Router,//路径模式可以换成hash模式
  Route, //路由切换的坑
  Link, //模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom'
const Order = Loadable({
      loader: () => import('./pages/Order'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Login = Loadable({
      loader: () => import('./pages/Login'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Regist = Loadable({
      loader: () => import('./pages/Regist'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Phone = Loadable({
      loader: () => import('./pages/Phone'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Information = Loadable({
      loader: () => import('./pages/Information'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Robbed = Loadable({
      loader: () => import('./pages/Robbed'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Deliver = Loadable({
      loader: () => import('./pages/Delivered'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Invali = Loadable({
      loader: () => import('./pages/Invalid'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
class App extends Component {
  render() {
    return (
    	<Router>
    		<div className="App">

		    	{/*动态路由：不同的路径加载同一组件*/}
		        <Switch>
              <Route path="/order" component={Order}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/rob" component={Robbed}></Route>
              <Route path="/regist" component={Regist}></Route>
              <Route path="/delivered" component={Deliver}></Route>
              <Route path="/invalid" component={Invali}></Route>
			        <Route path="/information" component={Information}></Route>
			        <Redirect path="/" to="/order" exact></Redirect>
          		<Route render={()=>{return <div>  404 ！</div>}} />
		        </Switch>
		    </div>
    	</Router>
    );
  }
}

export default App;
