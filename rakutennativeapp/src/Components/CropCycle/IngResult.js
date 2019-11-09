import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import {Card} from "react-native-elements"
// import Image from "../../Crops/rice.jpg"
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
        return (
            <View>
                <Card title={grain}>
                <Image 
                style={{width: "100%",height:200}}
                resizeMode="cover"
                source={require(`../../Crops/rice.jpg`)}
                />
                </Card>
            </View>
        )
    }
}
