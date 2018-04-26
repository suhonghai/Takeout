import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom'
class Detail extends Component {

  constructor(){
    super()
    this.state={
   		data:""
    }
   
  }

  render() {
  
    return (
            <div className="ditu">
            	{this.state.data}
            </div>
            );
  }

	  componentDidMount(){
	    navigator.geolocation.watchPosition(
	        (position) => {
	            console.log(this);
	            let longitude = JSON.stringify(position.coords.longitude);//精度
	            let latitude = JSON.stringify(position.coords.latitude);//纬度
	            console.log(longitude+latitude);

	            this.fetchData(longitude,latitude);

	           
	   })
	}

    

    fetchData=(longitude,latitude)=>{
    	
    fetch('http://restapi.amap.com/v3/distance?origins='+longitude+','+latitude+'&destination='+longitude+','+latitude+'&output=xml&key=df49bd8ad4cc1508a41e9e03973b9367')
        .then((response)=>response.json())
        .then((responseBody)=>{
            console.log(responseBody);
            console.log(responseBody.regeocode.addressComponent.province);
            let city = responseBody.regeocode.addressComponent.province;
            let district = responseBody.regeocode.addressComponent.district;
            let township = responseBody.regeocode.addressComponent.township;

            if(responseBody.status ==1){
                this.setState({
                    city:city,
                    district:district,
                    township:township,
                })
            }else {
                            }
        }).catch((error)=>{
        console.log(error);
    })
};
}
export default Detail;
