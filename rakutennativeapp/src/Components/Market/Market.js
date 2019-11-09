import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from"axios"
export default class Market extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             days:0,
             dataNet:null
        }
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
                <Text> Based on soil samples, plot history, and weather conditions; the best time to sell produce is in {this.state.dataNet} days</Text>
            </View>
        )
    }
}
