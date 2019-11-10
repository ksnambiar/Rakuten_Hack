import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import {Card} from "react-native-elements"
import rice from "../../Crops/rice.jpg"
import arhar from "../../Crops/arhar.jpg"
import chickpea from "../../Crops/chickpea.jpg"
import gram from "../../Crops/gram.jpg"
import maize from "../../Crops/maize.jpg"
import masur from "../../Crops/masur.jpg"
import paddy from "../../Crops/paddy.jpg"
import peas from "../../Crops/peas.jpg"
import pulse from "../../Crops/pulse.jpg"
import redgram from "../../Crops/redgram.jpg"
import urud from "../../Crops/urud.jpg"

export default class IngResult extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             grainData:null,
            grainName:null
        }
    }
    componentDidMount(){
        // const {grain} = this.props
        // axios.get('https://app.zenserp.com/api/v2/search?q='+grain+'%20grain&hl=en&gl=US&location=United%20States&search_engine=google.com&apikey=24fcc100-fcb4-11e9-ac0a-bff7be5bcc13')
        // .then(res=>{
        //     console.log(res)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
    //     var req = require.context('../Common/Crops', false, /.*\.jpg$/);
    // req.keys().forEach(function(key) {
    //   req(key);
      
    // });
    const {grain} = this.props;
    this.setState({grainName:grain})
    }
    render() {
        const {grainData} = this.state;
        const {grain} = this.props
        // const path = `../../Crops/${grain}.jpg`
        let img=null
        switch(grain){
            case 'rice':
            img=rice
            break
            case 'arhar':
                img=arhar
                break
            case 'maize':
                img=maize
                break
        case 'urud':
                img=urud
                break
        case 'gram':
                img=gram
                break
        case 'masur':
                img=masur
                break
        case 'paddy':
                img=paddy
                break
        case 'wheat':
                img=wheat
                break
    case 'peas':
                img=peas
                break
        case 'pulse':
                img=pulse
                break
        default:
            break;
        }
        return (
            <View>
                <Card title={grain}>
                <Image 
                style={{width: "100%",height:200}}
                resizeMode="cover"
                source={img}
                />
                </Card>
            </View>
        )
    }
}
