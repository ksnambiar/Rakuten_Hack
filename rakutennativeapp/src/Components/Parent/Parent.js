import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {ButtonGroup} from "react-native-elements"
import Dashboard from "../Dashboard/Dashboard"
import Market from "../Market/Market"
import CropCycle from "../CropCycle/CropCycle"
import PlantDoctor from "../PlantDoctor/PlantDoctor"
import Icon from "react-native-vector-icons/FontAwesome"
import {connect} from "react-redux"
import {getData} from "../../Store/actions/authAction"
import AsyncStorage from "@react-native-community/async-storage"

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             index:0,
             uid:null
        }
        this.topHandle=this.topHandle.bind(this)
    }
    componentDidMount(){
        // const uid =this.props.getData('uid')
        // this.getUid()
        console.log(this.props.auth)
    }
    topHandle(index){
        this.setState({index:index})
    }
    // async getUid(){
    //     let data=null
    // try{
    //     data= await AsyncStorage.getItem('uid')
    // } catch(e){
    //     console.log(e)
    // }
    // console.log(data)
    // this.setState({uid:data})
    // }
    render() {
        let view
        switch (this.state.index) {
            case 0:
                view=<Dashboard />
                break;
            case 1:
                view=<Market />
                break;
            case 2:
                view=<CropCycle />
                break;
            case 3:
                view=<PlantDoctor />
                break;
            default:
                view=null
                break;
        }
        return (
            <View style={{width:"100%",height:"100%"}}>
            <View>
                <View>
                
                </View>
            <View style={{flexDirection:"column-reverse",height:"100%",width:"100%"}}>
                <View style={{height:"7%"}}>
                < ButtonGroup
            onPress={this.topHandle}
            selectedIndex={this.state.index}
            buttons={[<Icon name='home' size={24} color="black" />,<Icon name='shopping-cart' size={24} color="black" />,<Icon name='repeat' size={24} color="black" />,<Icon name='user-md' size={24} color="black" />]}
            containerStyle={{height:30,borderColor:"#ffffff"}}
            selectedButtonStyle={{backgroundColor:"#99bbff"}}
            /> 
                </View>
                <View style={{height:"93%"}}>
                {view}
                </View>
            </View>
            </View>
            
        </View>
        )
    }
}
const mapStateToProps = (state)=>({
    auth:state.auth
})
export default connect(mapStateToProps,{getData})(Parent)