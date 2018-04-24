import React, { Component } from 'react';
import './Login.css';
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
        <div className="container">
          <section className="form_container active">
            <header className="form_header"><h2>登录系统</h2><a href="/Regist" className="brother_link">注册</a></header>
            <form className="form_body form_password" method="post">
              <div className="input_label">
                <input type="text" placeholder="请输入已验证的手机号" className="input_text user_input" onBlur={this.handleusername}/>
              </div>
              <div className="input_label">
                <input type="password" className="input_text password_input" placeholder="请输入密码" onBlur={this.handlepwd}/>
              </div>
              <div className="input_label">
                {this.state.msg}
              </div>
              <div className="input_label btn_group">
                <input type="submit" className="submit_btn" value="登录" onClick={this.handlesub}/>
              </div>
            </form>
            <footer className="form_footer">
            </footer>
          </section>
        </div>
      )
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
          _this.props.history.replace("./order");
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