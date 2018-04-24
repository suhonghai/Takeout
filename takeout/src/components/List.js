import React, { Component } from 'react';
import './List.css';
import $ from 'jquery';
import {
  NavLink
} from 'react-router-dom'
class List extends Component {

  constructor(){
    super()
    this.state={
      min:"",
      seconds:"",
      dis:"none",
      shixiao:"已失效"
    }
    this.handleRob = this.handleRob.bind(this);
    this.handleCal = this.handleCal.bind(this);
    this.handles = this.handles.bind(this);
  }

  render() {
    let {id,img,name,price,time,prodname,disbuy,dissell,buypos,sellpos} = this.props.data;
    return (
              <div role="button" boot-event="function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}" aria-label="可抢购：千层便当（大寸）/榴莲千层，限量特价29.9元，仅剩20份，轻点两下加入购物车。" className="list-z_eT0">
                  <div className="list-qfpvN">
                      <div className="list-3bAVA">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALJSURBVFiF7ZY7aBRRFIa/MzPuykajoIULPhE7QQsLHwiCRgQh+MCggqDNXLKEaOGjElOIgkqKxTUzk9ZYrIqooKBYCAoWaiXBRlMGETWGKG6yO8fC2WXYHVPorrHI38ycc/57/v/euTN3pFAoLHEcxwe2A220Fj+AZ5VKxeRyufcAViTe+Q/EAeYCO2zbvlFNiO/7E5G4Ao+Bry0SzwC7ABvQUqm0sLe3d9yJCgBDxpgjLRIHwPO8yyJyEhDbtjPAuBWrj7RSHMCyrAYNK4n4LzFrYNbAjBtwgDIwR0RW/o4UBMF6Ve0A7htj3iZxfN9fDhwIw/BFd3f389+0WlG9yWR+fX4sIAQIw3Bj0oi+vj5HVe8Bl4Cb00xmELhiWdYD3/cXJBFUdXP1tq2t7SOApaqPouRqz/PW1Q/KZrNHgWVRuNbzvH31nIGBgS1ARxS2AyfqOYVCYRmwITLyqqurqwIgnudtEpHngAAfVPX45OTkQ4B0Om2A80Aq1msCOF0qlYYAUqnUHhHpBxbFOCFw0XGca+VyeUxVt4nIVWAVgIjsc133DpEovu9fAk4lLVuEKSAAupl+4wbAYWDeNJzr8TPHAnBd94yqngVKCQNGVbXTGNMjIoeAzwmcb0DOGGNUdSfwLoFTFpH+0dHRY/GkxIPBwcGlqrpfVdeISCkMw5cictcY873Kyefz7el0ei+wPprA8NTU1K2enp5PVU6xWEyNjY3tVtWNwHxgpFKp3K7+hPxXqK2A53lrRKRPRN64rnuxmSJBEORUdStw2RjzOl6rbSgROQAcVtXzxWLRbqYBVT0HHASO1dfiO7oqag0PD0s98S9R7d3Qd8bPglkDswacpGQ2m70QBEHYLBFVzUTXhrfAiZFUpFY/parN0q9BRBqa1h6BbdtPST6MmoWKiDxpMBUP8vl8u+M4i1tk4Esul/vSot5/jp/jUvQATAoLaAAAAABJRU5ErkJggg==" className="list-1vYJQ" />
                          <p className="list-3-Rk2">{name}</p>
                      </div>
                      <div className="list-1j715">
                          <p className="list-3f38F2">评价4.4分</p>
                          <p className="list-2Xhgk">|</p>
                          <p className="list-3f38F">配送费约¥{price}</p>
                      </div>
                  </div>
                  <div className="list-1zJYh">
                      <div className="list-2Fle8">
                          <img width="180" height="180" className="list-ujR0u" src={img} />
                      </div>
                      <div className="list-1l2JL">
                          <p className="list-2JRpP">{prodname}</p>
                          <div className="list-V7ue0">
                              <div className="xiangqing"><span onClick={this.handleInfo}>商品详情</span><span>剩余：{this.state.min}min{this.state.seconds}s</span></div>
                              <div className="list-3DaBV">
                                  <div className="progress-30GbZ">
                                      <p className="list-3f38F"><span>买家地址：</span>{buypos}</p>
                                      <p className="list-3f38F1">{disbuy}</p>
                                  </div>
                                  <div className="progress-30GbZ">
                                     <span className="list-3f38F"><span>店家地址：</span>{sellpos}</span>
                                     <span className="list-3f38F1">{dissell}</span>
                                  </div>
                              </div>
                              <div className="list-1D6v5 list-2XwDo">
                                
                                      <p className="list-2Fh9C" onClick={(this.props.rob == "送达")? this.handles : this.handleRob} data-key={id} style={{"display":(this.state.dis =="none")? "block":"none"}}>{this.props.rob}</p>
                                      <p className="list-2Fh9C" style={{"display":this.state.dis}}>{this.state.shixiao}</p>
                                 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            );
  }


componentDidMount(){
  
    if(this.props.rob == "已送达"){
         this.setState({
              min:this.props.data.time,
              seconds:this.props.data.seconds,
              dis:"block",
              shixiao:"已送达"
            })
    }else{
       let _this = this;
       let time = Number(_this.props.data.time);//获取订单时间毫秒值
       let second = Number(_this.props.data.seconds*60000);//预计送餐时间
       let ret= this.handleCal(time,second);
          if(ret==1){
          this.setState({
              min:0,
              seconds:0,
              dis:"block"
            })
            $.post("/php/invalid.php",{"id":this.props.data.id},function(res){
                    console.log(res)
                   })
            return;
          }
         

         var timer =  setInterval(()=>{
         let {min,seconds} = this.handleCal(time,second);
         this.setState({
              min:min,
              seconds:seconds
            })
             if(min <=0 && seconds <=0){//把数据放到已失效
               this.setState({
                dis:"block"
                });

                   $.post("/php/invalid.php",{"id":this.props.data.id},function(res){
                    console.log(res)
                   })
                  clearInterval(timer);
             }
            
         },1000)
        }
}

handleCal(time,seconds){
  let totalT = time +seconds;//总的毫秒
  let nowT = Date.now();//当前时间的毫秒值
  let cha = totalT - nowT;
  let lmin = Math.floor(cha/60000);
  let lseconds = Math.floor(cha%60000/1000);

  if(cha<=0){
    return 1
  }else{
    return{
    min:lmin,
    seconds:lseconds
    }
  }
}

  handleRob(e) {
    console.log("送达没问题")
     let id =  e.target.dataset.key;
     $.post("/php/rob.php",{"id":id},(res)=>{
        console.log(res);
        this.props.history.replace('/rob');
     },"json")
  }


  handles(e){
     let id =  e.target.dataset.key;
     let min =  this.state.min;
     let seconds =  this.state.seconds;
      console.log(min);
      console.log(seconds);
      console.log(id)
      console.log(this.props.history)
     $.post("/php/delivered.php",{"id":id,"time":min,"seconds":seconds},(res)=>{
      console.log(1)
          this.props.history.replace('/delivered');
     },"json")
  }



}

export default List;