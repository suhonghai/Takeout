import React, { Component } from 'react';
import $ from "jquery";
import {
  NavLink
} from 'react-router-dom'
import "./Order.css"
import "./Information.css"


class Information extends Component{
	constructor(){
		super()
		this.state={
			username:""
		}
		this.componentWillMount = this.componentWillMount.bind(this);
		this.handlere=this.handlere.bind(this);
	}
	render(){
		return(
				<div className="App1">
				
					<header id="header">外卖调度系统</header>
					<div id="content">
				       	{ /*登录地址*/}
						<div className="haslogin center">
	                        <div className="headcon">
	                       	 	<img className="headpic" src="//static.lagou.com/images/myresume/default_headpic.png" />
		                    </div>
	                    	<div className="name">{this.state.username}</div>
               			</div>
				        <div className="buttons">
				            
				            <a className="button deliver" href="/user/deliverlist.html">
				                <span>个人信息</span>
				                
				                
				            </a>
				            <a className="button interview" href="/minterview/interviewlist.html">配送信息</a>
				            
				            <a className="button invitation" href="/minvite/invitation.html">
				                <span>送达金额</span>
				                            </a>
				            
				            <a className="button collect" href="/user/collectlist.html">工资</a>
				            
				        </div>
				        <NavLink to="/order" className="logout" href="#" onClick={this.handlere}>退出登录</NavLink>
	            </div>

					
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
	componentWillMount (){
		let name = localStorage.getItem("username");
		this.setState({
			username:name
		});

	}
	handlere(e){
		localStorage.removeItem('username');
        this.props.history.replace('/order');

	}
}


export default Information; 
