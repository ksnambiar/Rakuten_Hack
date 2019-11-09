import React, { Component } from 'react'
import {Row,Col,Card} from "react-bootstrap"
export default class PlantDoctor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            file:null
        }
        this.onFileUpload = this.onFileUpload.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onFileUpload(e){
        console.log(e.target.files)
        
        this.setState({file: URL.createObjectURL(e.target.files[0])})
    }
    onSubmit(e){
        console.log(this.state.file)
    }
    render() {
        return (
            <div>
              <Row className='mt5'>
                  <Col md={4}>
                      {
                          this.state.file?<img src={this.state.file} alt="hello world" />:null
                      }
                  </Col>
                  <Col md={3}>
                    <Card>
                        <Card.Body>
                            <form onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                <input type='file' name='fileupload' className='form-file' onChange={this.onFileUpload} />
                                </div>
                                <div className='form-group'>
                                    <input type='submit' className='btn btn-primary'/>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>

                  </Col>
            </Row>  
            </div>
        )
    }
}
