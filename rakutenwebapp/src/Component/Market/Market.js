import React, { Component } from 'react'
import {Row,Col} from "react-bootstrap"
import axios from "axios"
import graph from "../Common/graph1.png"
import {Fade,Badge,Button} from "shards-react"
import Countup from "react-countup"
export default class Market extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dataNet:null,
             visible:false
        }
        this.toggleGraph = this.toggleGraph.bind(this)
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:5000/days').then(obj=>{
            console.log(obj)
            this.setState({dataNet:obj.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    toggleGraph(){
        const {visible} = this.state;
        this.setState({visible:!visible})
    }

    render() {
        const {dataNet} = this.state;
        return (
            <div>
                {dataNet?<div><Row>
                    <Col>
                    <h4>Based on soil samples, plot history, and weather conditions; the best time to sell produce is in </h4> <Badge theme='success'><Countup end={Math.round(parseFloat(dataNet.day))} duration={5}/></Badge><h4>days.</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button theme='primary' onClick={this.toggleGraph}>{!this.state.visible?<h5>Show Trend</h5>:<h5>Hide Trend</h5>}</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Fade in={this.state.visible} >
                    <img src={graph} alt="graph" />
                    </Fade>
                    </Col>
                </Row></div>:null}
            </div>
        )
    }
}
