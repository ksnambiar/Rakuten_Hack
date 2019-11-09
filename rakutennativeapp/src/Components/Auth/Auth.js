import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import auth from "@react-native-firebase/auth"
import {Button,Input,Card} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from "react-native-router-flux"
export default class Auth extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             phone:"8848779798",
             otp:"",
             confirmResult:null,
             recaptchaVerifier:null,
             error:false
        }
        // this.logPress=this.logPress.bind(this)
        this.onOtp=this.onOtp.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        // this.dataChangeHandler = this.dataChangeHandler
    }
    dataChangeHandler(name,value){
        this.setState({[name]:value})
    }

    componentDidMount(){
        // this.state.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
        //  {
        //     size:"invisible"
        //      // other options
        //  });
     }
     onOtp(){
        const phoneNumber = this.state.phone;
        // const appVerifier = this.state.recaptchaVerifier;
        
        auth()
        .signInWithPhoneNumber("+91"+phoneNumber,true)
        .then(confirmResult1 => {
          // success
        //   console.log(confirmResult1)
          this.setState({confirmResult:confirmResult1})
        })
        .catch(error => {
          // error
          this.setState({error:error})
          console.log(error)
        });
    }
    onSubmit(e){
        e.preventDefault()
        // e.preventDefault()
        //changing
        this.state.confirmResult.confirm(this.state.otp).then(object=>{
            console.log(object,"success")
            Actions.postAuth()
            if(object.additionalUserInfo.isNewUser){
                // localStorage.setItem("uid",object.user.uid)
                // this.props.history.push("/user/register/"+this.state.phone)
                // this.props.createProfileNew(object.user.uid,object.user.providerData[0],this.props.history)
                console.log("new user login")
            }else{
                // localStorage.setItem("uid",object.user.uid)
                // this.props.getCurrentProfile(object.user.uid)
                // this.props.history.push("/dashboard")
                console.log("old user log")
            }    
    })
    .catch(err=>{
        console.log(err)
        this.setState({error:true})
    })    
    }
    render() {
        return (
            <View>
            <Card
            title="Login"
            >
                <View>
                <Input placeholder="Enter your phone number" leftIcon={ <Icon name="phone" color="black" size={24} />} value={this.state.phone} onChangeText={(text)=>this.dataChangeHandler('phone',text)} />
                </View>
                <View>
                    <Button title="get otp" onPress={this.onOtp} />
                </View>
                {this.state.confirmResult?<View><View>
                <Input placeholder="Enter your phone number" leftIcon={ <Icon name="key" color="black" size={24} />} value={this.state.otp} onChangeText={(text)=>this.dataChangeHandler('otp',text)} />
                </View>
                <View>
                    <Button title="Continue" onPress={this.onSubmit} />
                </View></View>:null}
            </Card>
            </View>
        )
    }
}

// const style = StyleSheet.create()