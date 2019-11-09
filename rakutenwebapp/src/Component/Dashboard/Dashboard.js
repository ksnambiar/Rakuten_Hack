import React, { Component } from 'react'
import {connect} from "react-redux"
import axios from "axios";
// import ReactWeather from 'react-open-weather';
import {Alert,Row,Col, Card,Spinner} from "react-bootstrap"
import ReactAnimatedWeather from "react-animated-weather"
import Thermometer from "react-thermometer-chart"
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'
import {getFarmerdetails} from "../../Store/actions/profileAction"
import CreateProfile from "./CreateProfile"
class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             latitude:null,
             longitude:null,
             data:null
        }
        // this.weatherdata = this.weatherdata.bind(this)
    }
    
    componentDidMount(){
        const uid = localStorage.getItem('uid')
        this.props.getFarmerdetails(uid)
        this.getMyLocation().then(obj=>{
            console.log('working part')
            this.weatherdata.bind(this)
            axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=c7e278dc5be734579a5ec0820cd64d7c&units=metric`)
            .then(res=>{
                console.log(res)
                this.setState({data:res.data})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    weatherdata(){
        
    }
    getMyLocation() {
        return new Promise((resolve,reject)=>{
            const location = window.navigator && window.navigator.geolocation
        
        if (location) {
          location.getCurrentPosition((position) => {
              console.log('check 1')
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
            resolve(true)
          }, (error) => {
            this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
            reject(false)
          })
        }
        })
    }
    render() {
        const {data,latitude,longitude} = this.state;
        const {loading,currProfile} = this.props.profile;
        let view;
        if(loading){
            view=  <Spinner animation="grow" variant="primary" />
        }else{
            if(currProfile){
                view=data?<div className="container">
                <Row>
                <Col>
                <div style={{borderColor:"#daa520",borderStyle:'solid',borderWidth:data.weather[0].main==='Clear'?3:0,borderRadius:5,paddingTop:6,paddingBottom:6}}>
                <ReactAnimatedWeather icon='CLEAR_DAY' color={data.weather[0].main==='Clear'?'goldenrod':'gray'} size={150} animate={true}  />
                 </div>
                 </Col>
                 <Col>
                 <div style={{borderColor:"#daa520",borderStyle:'solid',borderWidth:data.weather[0].main==='Clouds'?3:0,borderRadius:5,paddingTop:6,paddingBottom:6}}>
                 <ReactAnimatedWeather icon='CLOUDY' color={data.weather[0].main==='Clouds'?'goldenrod':'gray'} size={150} animate={true} />
                 </div>
                 </Col>
                 <Col>
                 <ReactAnimatedWeather icon='RAIN' color={data.weather[0].main==='Rainy'?'goldenrod':'gray'} size={150} animate={true} />
                 </Col>
                </Row>
                <Row className="mt5">
                    <Col>
                   <h3 style={{color:"#007BFF"}}> {data.weather[0].main} weather </h3>
                    </Col>
                 </Row>
                 <Row className="container">
                 <Col>
                 <Row className="mt5">
                 <Card>
                     <Card.Body>
                 <Col>
                 <Thermometer width="150px" height="300px" steps={5} minValue={0} maxValue={100} currentValue={data.main.temp}> 
</Thermometer>
         </Col>
         <Col>
         <h4>Temperature : {data.main.temp}</h4>
         </Col>
         </Card.Body>
         </Card>
         <Col>
         <Card>
             <Card.Body>
             <Map center={[this.state.latitude,this.state.longitude]} zoom={12} width={400} height={300}>
 <Marker anchor={[12.3133, 76.6134]} payload={1} onClick={({ event, anchor, payload }) => {}} />

 <Overlay anchor={[12.3133, 76.6134]} offset={[120, 79]}>
   <img src='pigeon.jpg' width={240} height={158} alt='' />
 </Overlay>
</Map>
             </Card.Body>
         </Card>
         </Col>
         </Row>
         </Col>
                 </Row>
            </div>:null
            }else{
                view=<div>
                    <CreateProfile />
                </div>
            }
        }
        return (
            <div className="mt4">
               {view}
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    auth:state.auth,
    profile:state.profile
})
export default connect(mapStateToProps,{getFarmerdetails})(Dashboard)