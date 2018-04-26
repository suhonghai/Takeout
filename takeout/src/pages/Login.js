import React, { Component } from 'react';
import './login.scss';
import axios from "axios";
import $ from "jquery";
import {
  NavLink
} from 'react-router-dom';
class Login extends Component{
  constructor(){
    super()
    this.state = {
      username:"",
      pwd:"",
      msg:""
    }
    this.handleusername = this.handleusername.bind(this);
    this.handlepwd = this.handlepwd.bind(this);
    this.handlesub = this.handlesub.bind(this);
  }
  render(){

    return(
        
          <section className="login_form">
                <div className="login_header">
                    <h2>登录系统</h2>
                    <NavLink to="Regist" href="#" className="login_regist">注册</NavLink>
                </div>
                <form className="login_form_body" method="post">
                    <div className="login_input">
                      <input type="text" placeholder="请输入已验证的手机号" className="login_input_text" onBlur={this.handleusername}/>
                    </div>
                    <div className="login_input">
                      <input type="password" className="login_input_text" placeholder="请输入密码" onBlur={this.handlepwd}/>
                    </div>
                    <div className="login_input1">
                      {this.state.msg}
                    </div>
                    <div className="login_sub">
                      <input type="submit" className="login_btn" value="登录" onClick={this.handlesub}/>
                    </div>
                </form>
          </section>
      )
  }
  ComponentWillMount(){
    console.log(1)
  }
  handleusername(e){
    this.setState({
      username:e.target.value
    })
  }
  handlepwd(e){
    this.setState({
      pwd:e.target.value
    })
  }
  handlesub(e){
    e.preventDefault();
    var _this = this;
    if(!this.state.username || !this.state.pwd){
      alert("手机号或密码不能为空。。")
    }else{

      let {username,pwd} = this.state;
      // let data ="email="+username+"&password="+pwd;

      // axios.post("/php/login.php",{"phone":username,"password":pwd}).then((res)=>{
      //   console.log(res)
      //   if(res.data.res_code ==0){
      //     alert("登录成功");
      //     console.log(res);
      //     localStorage.setItem('username', JSON.stringify(res.data.res_body.firstname));
      //     this.props.history.replace("./order");
      //   }
      //   else{
      //     alert("登录失败。。")
      //     return;
      //   }
      // })

      $.post("/php/login.php",{"phone":username,"password":pwd},function(res){
        console.log(res);
        console.log()
        let data = JSON.parse(res);
        if(JSON.parse(res).res_code ==0){
          localStorage.setItem('username', data.res_body.firstname);
          _this.props.history.replace("./rob");
        }
        else{
         _this.setState({
            msg:"用户名或密码错误"
         });
          return;
        }
      });
    }
    
  }
}

export default Login; 