import React, { Component } from 'react'
import { Text, View ,Image, ActivityIndicator} from 'react-native'
import {Card, Button} from "react-native-elements"
import {Actions} from "react-native-router-flux"
import Geolocation from "@react-native-community/geolocation"
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome"
import Image1 from "./thermo.jpg"
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             latitude:null,
             longitude:null,
             data:null
        }
    }
    
    componentDidMount(){
        fetch("https://ip-geo-location.p.rapidapi.com/ip/%7Bip%7D?format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ip-geo-location.p.rapidapi.com",
		"x-rapidapi-key": "77558e914emsh8de3b6357a2688dp16ff4djsn62400c827671"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
        Geolocation.getCurrentPosition((data)=>{
            // console.log(data)
            this.setState({
                latitude:data.coords.latitude,
                longitude:data.coords.longitude
            })
            axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=c7e278dc5be734579a5ec0820cd64d7c&units=metric`)
            .then(res=>{
                console.log(res.data)
                this.setState({data:res.data})
            })
            .catch(err=>{
                console.log(err)
            })
        },(error)=>{
            console.log(error)
        })

    }
    navigateThrough(name){
        switch(name){
            case 'market':
                Actions.market()
                break;
            case 'cropcycle':
                Actions.cropcycle()
                break;
            case 'plantdoctor':
                Actions.plantdoctor()
                break;
            case 'emandi':
                Actions.emandi()
                break
            default:
                console.log('no call')
                break;

        }
    }
    render() {
        return (
            <View>
                <View>
                    <Card>
                        {/* <View>
                            <Button title="Market" onPress={this.navigateThrough.bind(this,'market')} />
                            <Button title="Crop Cycle" onPress={this.navigateThrough.bind(this,'cropcycle')} />
                            <Button title="Plant Doctor" onPress={this.navigateThrough.bind(this,'plantdoctor')} />
                            <Button title="EMandi" onPress={this.navigateThrough.bind(this,'emandi')} />
                        </View> */}
                       { this.state.data?<View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <Icon name='sun-o' size={24} color={this.state.data.weather[0].main==="Clear"?"turquoise":"black"} />
                            <Icon name='cloud' size={24} color={this.state.data.weather[0].main==="Clouds"?"turquoise":"black"} />
                            <Icon name='tint' size={24} color={this.state.data.weather[0].main==="Rainy"?"turquoise":"black"} />
                            <Icon name='bolt' size={24} color={this.state.data.weather[0].main==="Rainstorm"?"turquoise":"black"} />
                            <Icon name='snowflake-o' size={24} color={this.state.data.weather[0].main==="Snow"?"turquoise":"black"} />
                        </View>:null}
                    </Card>
                </View>
                <View>
                            {this.state.data?<Card>
                                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                                <Image source={Image1} style={{width:100,height:150}} />
                                <View style={{flexDirection:"column"}}>
                                <Text style={{fontSize:25,marginVertical:12}}>{this.state.data.main.temp} Celcius</Text>
                                <Text style={{fontSize:25,marginVertical:12}}>{this.state.data.weather[0].main}</Text>
                                </View>
                                </View>
                            </Card>:null}
                        </View>
            </View>
        )
    }
}
