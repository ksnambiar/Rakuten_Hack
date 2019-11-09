import React, { Component } from 'react'
import {Button,Card} from "shards-react"
import {row,Col} from "react-bootstrap"
import {connect} from "react-redux"
import {addFarmerDetailes} from "../../Store/actions/profileAction"
class CreateProfile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             nocrop:1,
             crop1:""
        }
        this.onChange = this.onChange.bind(this)
        this.increaseCrops=this.increaseCrops.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const uid = localStorage.getItem('uid')
        let crops=[]
        for(var i=0;i<this.state.nocrop;++i){
        crops.push(this.state[`crop${i+1}`])
        }
        const data = {
            name:this.state.name,
            crops:crops
        }
        console.log(data)
        this.props.addFarmerDetailes(uid,data)
    }
    increaseCrops(){
        let nocrops = this.state.nocrop;
        this.setState({nocrop:++nocrops})
    }
    render() {
        let formPart=[]
        for(let i=0;i<this.state.nocrop;++i){
            formPart.push(<div className="form-group">
            {this.state[`crop${i+1}`]?<p>{this.state[`crop${i+1}`]}</p>:<select className="form-control" name={`crop${i+1}`} onChange={this.onChange} value={this.state[`crop${i+1}`]}>
                <option value="">No Data Selected</option>
                <option value="arhar">arhar</option>
            </select>}
            </div>)
        }
        //for creating profile for a new user
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input name="name" type="text" className="form-control" onChange={this.onChange} value={this.state.name}/>
                    </div>
                    {/* <div className="form-group">
                        <select name="nocrop" className="form-control" onChange={this.onChange} value={this.state.nocrop}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>

                        </select>
                    </div> */}
                    {formPart}
                    <div className="form-group">
                        <Button onClick={this.increaseCrops}>Add another crop</Button>
                    </div>
                    <div className="form-group">
                        <Button theme="primary" type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null,{addFarmerDetailes})(CreateProfile)