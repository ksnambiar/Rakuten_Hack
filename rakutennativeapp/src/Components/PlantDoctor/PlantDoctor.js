import React, { Component } from 'react'
import { Text, View ,Image} from 'react-native'
import {Card, Button} from "react-native-elements"
import ImagePicker from 'react-native-image-picker';
// import {PermissionsAndroid} from 'react-native';

export default class PlantDoctor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             imageData:null
        }
        this.cameraSelected=this.cameraSelected.bind(this)
    }
    cameraSelected(){
        const options = {
            title: 'Select Plant Photo',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                // console.log(source)
              this.setState({
                imageData: source,
              });
            }
          });

    }
    render() {
        
        return (
            <View style={{alignItems:"center",justifyContent:"center"}}>
                {this.state.imageData?null:<Card>
                <Button title="upload" onPress={this.cameraSelected} />
                </Card>}
                {this.state.imageData?<Card>
                <Image style={{width:200,height:200}} source={{uri:this.state.imageData.uri}} />
                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <Button title="Take another" onPress={this.cameraSelected} />
                    <Button title="Check" />
                </View>
                </Card>:null}
            </View>
        )
    }
}


