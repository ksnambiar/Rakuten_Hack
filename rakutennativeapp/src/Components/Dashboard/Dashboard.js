import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Card, Button} from "react-native-elements"
import {Actions} from "react-native-router-flux"
export default class Dashboard extends Component {
    componentDidMount(){
        
        fetch("https://jkosgei-free-ip-geolocation-v1.p.rapidapi.com/?api-key=1c60dc6dd1239024ea7426080757b224d8e19e8b04cbb6c0b6df279f", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jkosgei-free-ip-geolocation-v1.p.rapidapi.com",
                "x-rapidapi-key": "77558e914emsh8de3b6357a2688dp16ff4djsn62400c827671"
            }
        })
        .then(response => {
            // console.log(response.);
        })
        .catch(err => {
            console.log(err);
        });
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
                        <View>
                            <Button title="Market" onPress={this.navigateThrough.bind(this,'market')} />
                            <Button title="Crop Cycle" onPress={this.navigateThrough.bind(this,'cropcycle')} />
                            <Button title="Plant Doctor" onPress={this.navigateThrough.bind(this,'plantdoctor')} />
                            <Button title="EMandi" onPress={this.navigateThrough.bind(this,'emandi')} />
                        </View>
                    </Card>
                </View>
            </View>
        )
    }
}
