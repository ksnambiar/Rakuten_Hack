import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {logOutUser,getCurrentProfile} from "../../Store/actions/authAction"
class Navigation extends Component {
  logOutUser(){
    this.props.logOutUser()
  }
  componentDidMount(){
    // const uid = localStorage.getItem('uid')
    // console.log(uid)
    // if(uid){
    //   this.props.getCurrentProfile(uid)
    // }else{
    //   console.log('not logged in')
    // }
  }
    render() {
      const {isAuthenticated} = this.props.auth
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
  <Link to='/' className="navbar-brand">Agrisport</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li> */}
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
       */}
      {!isAuthenticated?<li className="nav-item">
       <Link to='/auth'className='btn btn-primary'>Auth</Link>
        </li>:null}
    </ul>
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li> */}
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
       */}
      
    </ul >
    <ul className="navbar-nav mr-auto">
    </ul>
    <ul className="navbar-nav mr-auto">
    </ul>
    <ul className="navbar-nav mr-auto">
    </ul>
    <ul className="navbar-nav mr-auto">
    </ul>
    <ul className="navbar-nav mr-auto">
    </ul>
    <ul className="navbar-nav mr-auto">
    </ul>
    <ul className="navbar-nav mr-auto">
    </ul>
    <ul className="navbar-nav mr-auto">
    </ul>

   {isAuthenticated?<ul className="navbar-nav mr-auto ml5">
      <li className="nav-item ml5 mr2">
       <Link to='/market' className='btn btn-primary hover-bg-dark-blue'>Market</Link>
      </li>
      <li  className="nav-item mh2">
        <Link to='/cropCycle' className='btn btn-primary hover-bg-dark-blue'>Crop Cycle</Link>
      </li>
      <li  className="nav-item mh2">
       <Link to='/plantDoc' className='btn btn-primary hover-bg-dark-blue'> Plant Doctor </Link>
      </li>
      <li onClick={this.logOutUser} className="nav-item mh2 btn btn-light hover-bg-dark-blue">
        logout
      </li>
    </ul>:null}
    {/* <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
  auth:state.auth
})

export default connect(mapStateToProps,{logOutUser,getCurrentProfile})(Navigation)