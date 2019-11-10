import React, { Component } from 'react'
import { Text, View ,Image } from 'react-native'
import {Card,Button} from "react-native-elements"
import Graph from "./graph1.png"
import axios from"axios"
export default class Market extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             days:0,
             dataNet:null,
             showGraph:false
        }
        this.showGraph = this.showGraph.bind(this)
    }
    showGraph(){
        const {showGraph} = this.state;
        this.setState({showGraph:!showGraph})
    }
    componentDidMount(){
        axios.get('http://anotherapp12.herokuapp.com/days').then(obj=>{
            // console.log(obj)
            this.setState({dataNet:Math.round(parseFloat(obj.data.day))})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <View>
                <Text style={{fontSize:16}}> Based on soil samples, plot history, and weather conditions; the best time to sell produce is in </Text>
                <Card>
                    <View style={{alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:25}}>{this.state.dataNet} days</Text>
                    </View>
                </Card>
                <Card>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Button onPress={this.showGraph} title="Graph" />
                    {this.state.showGraph?<Image 
                    source={Graph}
                    style={{width:300,height:300}}
                    />:null}
                    </View>
                </Card>
            </View>
        )
    }
}
