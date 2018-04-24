import React, { Component } from 'react';
import axios from "axios";
import $ from "jquery";
import "./Order.css";
import List from "./../components/List"
import {
  NavLink
} from 'react-router-dom'
class Order extends Component{
	constructor(){
		super()
		this.state={
			data:[],
			zhuce:"快速注册",
			name:"去登陆",
			route:"/login",
			rob:"马上抢"
		}
	}
	render(){
			let arr = this.state.data.map((ele)=>{
				return <List data={ele} key={ele.id} history = {this.props.history} rob={this.state.rob}></List>
			})
		return(
				<div className="App1">
					<header id="header">外卖调度系统</header>
					<div className="custom-info" >
			            <span className="info">
			                {this.state.zhuce}
			            </span>
			            <a className="go" href={this.state.route}>
			                <em className="icon"></em>
			                <em className="text">{this.state.name}</em>
			            </a>
			        </div>
					<ul className="list" style={{"overflow":"auto","height":"534px"}}>
						{arr}
					</ul>

					
			    	{/*路由的切换，模板切换（to和replace->不留历史记录），js切换*/}
			        <footer id="footer">
			        	<div className="footer-tab-custom selected">
				        	<span className="iconfont icon-dingdan selected"></span>
				        	<span className="text">
				        		<NavLink activeClassName="link_active" to="order">订单</NavLink>
				        	</span>
			        	</div>
			        	<div className="footer-tab-search">
				        	<span className="iconfont icon-qianggou"></span>
				        	<span className="text">
				        		<NavLink activeClassName="link_active" to="/rob">已抢</NavLink>
				        	</span>
			        	</div>
			        	<div className="footer-tab-mine">
				        	<span className="iconfont icon-shandiansongda"></span>
				        	<span className="text">
				        		<NavLink activeClassName="link_active" to="/delivered">已送达</NavLink>
				        	</span>
			        	</div>
			        	<div className="footer-tab-mine">
				        	<span className="iconfont icon-yishixiao1" style={{"fontSize":"12px"}}></span>
				        	<span className="text">
				        		<NavLink activeClassName="link_active" to="/invalid">已失效</NavLink>
				        	</span>
			        	</div>
			        </footer>
				</div>
			)
	}
	componentDidMount (){
		let _this = this;
		axios.post("/php/prod.php").then((res)=>{
			let data = res.data;
			_this.setState({
				data:data
			});

		})
		let _name = localStorage.getItem("username");
		if(_name){
				this.setState({
					name:_name,
					zhuce:"查看个人信息",
					route:"/information"
				});
		}
	
	}
}
export default Order; 
