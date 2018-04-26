import React, { Component } from 'react';
import './regist.scss';
import axios from "axios";
import $ from "jquery";
import {
  Route, //路由切换的坑
  Link, //模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom'
class Regist extends Component{
	constructor(){
		super();
        this.state = {
            phone:"",
            tips:"",
            username:"",
            pwd:""
        };
        this.handleregist = this.handleregist.bind(this);
        this.handleinput = this.handleinput.bind(this);
        this.handleinputname = this.handleinputname.bind(this);
        this.handleinputpwd = this.handleinputpwd.bind(this);
	}
	render(){
		return(
    <section className="reg_form">
        <div className="reg_form_header">
            <h2>注册账号</h2>
         
            <NavLink to="/login" href="#" className="reg_login">登录</NavLink>
       
        </div>
        <form className="reg_form_body">
            <div className="input_label">
                <input type="text" placeholder="请输入手机号"  className="input_text" onBlur={this.handleinput} />
            </div>
            <div className="input_label">
                <input type="text" placeholder="请输入姓名" className="input_text" onBlur={this.handleinputname} />
            </div>
            <div className="input_label">
                <input type="password" placeholder="请输入密码" className="input_text " onBlur={this.handleinputpwd}/>  
            </div>
            <div className="input_label input_link">
                <input type="text" className=" vcode_link" placeholder="请输入收到的验证码" />
                <input type="button" className=" vcode_link vcode_link1" value="获取验证码" placeholder="获取验证码" />
            </div>
            <div className="register_tips" style={{"color":"#00b38a"}}>
                {this.state.tips}
            </div>
            <div className="reg_submit">
                <input type="submit" className="submit_btn" value="注册" onClick={this.handleregist}/>
            </div>
            
            <div className="register_agreement">注册代表你已同意<a href="javascript:void(0);" target="_blank">《外卖用户协议》</a></div>
        </form>
    </section>
			)
	}
  //处理手机号不能为空
    handleinput(e){
      e.preventDefault();
      var val = e.target.value;
      if(!e.target.value){
           this.setState({
              phone:val,
              tips:"手机号不能为空"
            });
      }
      else{
        let reg = /^1[3|4|5|7|8][0-9]{9}$/;
        if(reg.test(e.target.value)){
            this.setState({
              phone:val,
              tips:""
            });
        }else{
          console.log(222)
          this.setState({
              tips:"请输入11位正确的手机号"
            })
        }
      }
    }


//处理姓名输入
  handleinputname(e){
      e.preventDefault();
      var val = e.target.value;
      if(!e.target.value){
           this.setState({
              username:val,
              tips:"姓名不能为空"
            });
      }
      else{
        let reg = /[\u4e00-\u9fa5]/; 
        if(reg.test(e.target.value)){
            this.setState({
              username:val,
              tips:""
            });
        }else{
          this.setState({
              tips:"请输入汉字"
            })
        }
      }
  }
//处理密码
    handleinputpwd(e){
      e.preventDefault();
      var val = e.target.value;
      if(!e.target.value){
           this.setState({
              tips:"密码不能为空"
            });
      }
      else{
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;//不为纯数字或字母的正在表达式 用于密码验证
        if(reg.test(e.target.value)){
            this.setState({
              pwd:val,
              tips:""
            });

        }else{
          this.setState({
              tips:"密码不能为纯数字或字母"
            })
        }
      }
    }


//处理手机号提交
    handleregist(e){
         e.preventDefault();  
         var _this = this;
        if(!this.state.phone){
            this.setState({
              placeholder1:"手机号不能为空"
            });
        }else{ 

            let {phone,username,pwd} =this.state; 
            // axios.post("/php/register.php",{"phone":phone}).then(function(res){
            //      console.log(res);
            //     if(res.res_code ==0){
            //         alert("注册成功");
            //         this.props.history.replace('/position');
            //       }
            // });
           $.post("/php/register.php",{"phone":phone,"firstname":username,"password":pwd},function(res){
                console.log(res);
                if(res.res_code ==0){
                  console.log(res.res_body.firstname)
                    localStorage.setItem('username', res.res_body.firstname);
                    // _this.props.history.replace('/rob');
                  }else{
                       _this.setState({
                          tips:"用户名已存在",
                          phone:"",
                          username:"",
                          pwd:""
                        });
                  }
            },"json");
      }
    }
}
export default Regist; 