import React, { Component } from 'react'
import axios from "axios"
import {Row,Col} from "react-bootstrap"
import {Card,CardBody,CardHeader,CardImg,CardTitle,Button} from "shards-react"
// import translate from "google-translate-api"
// import * as Imgs from "../Common/Crops"

export default class Imageresult extends Component {
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
    changeLanguage(){
        // translate(this.state.grainName,{from:'en',to:'kr'}).then(obj=>{
        //     console.log(obj)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
    }
    render() {
        const {grainData} = this.state;
        const {grain} = this.props
        let view
        // console.log(`../Common/Crops/${grain}.jpg`)
        return (
            <div>
                <Card style={{ maxWidth: "300px" }} className="ma4">
                    <CardHeader>{grain}</CardHeader>
      <CardImg src={process.env.PUBLIC_URL+`/Crops/${grain}.jpg`} style={{height:"200px"}} />
      <CardBody>
        <Button theme='primary' onClick={this.changeLanguage.bind(this)}>Translate</Button>
        {/* <p>Lorem ipsum dolor sit amet.</p> */}
        {/* <Button>Read more &rarr;</Button> */}
      </CardBody>
                </Card>
            </div>
        )
    }
}
