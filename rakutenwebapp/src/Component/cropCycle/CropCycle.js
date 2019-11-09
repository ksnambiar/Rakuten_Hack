import React, { Component } from 'react'
import {Card} from "react-bootstrap"
import axios from "axios"
import {Row,Col} from "react-bootstrap"
import Imageresult from "./Imageresult"
import Countup from "react-countup"
import {Badge} from "shards-react"


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
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const data= {
            state:this.state.state,
            cycle:this.state.cropcycle
        }
        axios.post('http://127.0.0.1:5000/market',data).then(obj=>{
            console.log(obj.data)
            this.setState({datareturned:obj.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        const {datareturned} = this.state;
        let view
        if(datareturned){
            view=<div >
                <Card>
                    <Card.Body>
                <Row>
                    <Col md={4}>
                        <Badge  theme='success'><h5>{datareturned['State']}</h5></Badge>
                    </Col>
                    <Col md={8}>
                       <h5>Projected Profit per sq feet per year</h5><Badge outline pill theme='success'><h5><Countup end={datareturned['Market Value']} delay={5} /></h5></Badge>
                    </Col>
                </Row>
                    </Card.Body>
                </Card>
                <Row>
                    {
                        datareturned['Crops'].map(obj=>{
                            return <Imageresult grain={obj} />
                        })
                    }
                
                </Row>
            </div>
        }else{
            view=<p>select something</p>
        }
        return (
            <div>
                <div className='row mt2'>
                <div className='col-md-3 '>
                    <Card>
                        <Card.Body>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group ma3">
                    <label htmlFor='state'>State</label>
                    <select name='state' className='form-control' onChange={this.onChange}>
                        {
                            this.state.states.map((obj,i)=>{
                                return <option key={i} value={obj}>
                                    {obj}
                                    </option>
                            })
                        }
                    </select>
                    </div>
                    <div className='form-group ma3'>
                     <label htmlfor='cropCycle'> Crop Cycle</label>   
                    <select name='cropCycle' className='form-control'>
                        <option value={1} >1</option>
                        <option value={2} >2</option>
                        <option value={3} >3</option>

                    </select>
                    </div>
                    <button type='submit' className='btn btn-success'>
                        Check
                    </button>
                    </form>   
                    </Card.Body>
                    </Card>
                    </div>
                    <div className='col-md-9'>
                    <div>
                        {view}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
