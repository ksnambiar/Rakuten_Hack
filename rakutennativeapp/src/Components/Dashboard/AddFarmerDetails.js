import React, { Component } from 'react'
import { Text, View ,Picker} from 'react-native'
import {Input,Button,Card} from "react-native-elements"
export default class AddFarmerDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             nocrop:1,
             crop1:""
        }
        this.addCrop=this.addCrop.bind(this)
    }
    addCrop(){
        let nocrop = this.state.nocrop;
        this.setState({nocrop:++nocrop})
    }
    onSubmit(e){
        
    }
    render() {
        let cropData=[]
        for(var i=0;i<this.state.nocrop;++i){
            cropData.push(<View key={i}>
                <Picker
                selectedValue={this.state[`crop${i+1}`]}
                onValueChange={(value)=>this.onChange(`crop${i+1}`,value)}
                >
                <Picker.Item label="Nothing selected" value={null}  />
                            <Picker.Item label="rice" value="rice" />
                            <Picker.Item label="arhar" value="arhar" />       
                        <Picker.Item label="gram" value="gram" />
                </Picker>
                </View>)
        }
        return (
            <View>
                <Card>
                    <View>
                        <Text>Name:</Text>
                        <Input placeholder='Enter your name'  />
                    </View>
                    <View>
                    {cropData}
                    <Button title="add more crops" onPress={this.addCrop} />
                    </View>
                </Card>
            </View>
        )
    }
}
