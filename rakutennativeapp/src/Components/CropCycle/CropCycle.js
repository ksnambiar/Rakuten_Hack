import React, { Component } from 'react'
import { Text, View ,Picker,ScrollView} from 'react-native'
import {Card, Button} from "react-native-elements"
import axios from "axios"
import IngResult from './IngResult'
export default class CropCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            states:['Kerala','Karnataka','Maharashtra','Tamil Nadu','Gujarat','Bihar','Uttar Pradesh','Andhra Pradesh','Haryana','Punjab','West Bengal','Goa','Madhya Pradesh','Odisha','Assam','Chhattisgarh','Nagaland','Uttarakhand','Himachal Pradesh','Manipur','Arunachal Pradesh','Meghalaya','Mizoram'],
            state:'Kerala',
            cropcycle:1,
            datareturned:null
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(name,value){
        this.setState({[name]:value})
    }
    onSubmit(e){
        const data= {
            state:this.state.state,
            cycle:this.state.cropcycle
        }
        axios.post('http://anotherapp12.herokuapp.com/market',data).then(obj=>{
            console.log(obj.data)
            this.setState({datareturned:obj.data})
        })
        .catch(err=>{
            console.log(err)
        })    
    }
    render() {
        return (
            <ScrollView>
                <View>
                <Card title="Crop Cycle">
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <Picker selectedValue={this.state.state} 
                    onValueChange={(value)=>this.onChange('state',value)}
                    >
                        {
                            this.state.states.map((obj,i)=>{
                                return <Picker.Item label={obj} key={i} value={obj} />
                            })
                        }
                    </Picker>
                    </View>
                    <View style={{flex:1}}>
                        <Picker selectedValue={this.state.cropcycle}
                        onValueChange={(value)=>this.onChange('cropcycle',value)}
                        >
                            <Picker.Item label="1" value={1} />
                            <Picker.Item label="2" value={2} />
                            <Picker.Item label="3" value={3} />                            
                        </Picker>
                    </View>
                </View>
                <View>
                  <Button title="Get crop info" type="outline" onPress={this.onSubmit} />  
                </View>
                </Card>
                </View>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    {
                        this.state.datareturned?<Text>marketValue:{this.state.datareturned['Market Value']}</Text>:null
                    }
                </View>
                <View>
                {this.state.datareturned?
                    
                        this.state.datareturned["Crops"].map((obj,i)=>{
                            return <IngResult grain={obj} />
                        })
                    
                :null}
                </View>
            </ScrollView> 
        )
    }
}
