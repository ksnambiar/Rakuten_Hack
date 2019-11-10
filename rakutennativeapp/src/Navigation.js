import React from 'react'
import { View, Text } from 'react-native'
import {Router,Scene,Stack} from "react-native-router-flux"
//components imported
import Auth from "./Components/Auth/Auth";
import Market from "./Components/Market/Market"
import CropCycle from "./Components/CropCycle/CropCycle"
import PlantDoctor from "./Components/PlantDoctor/PlantDoctor"
import Dashboard from "./Components/Dashboard/Dashboard"
import EMandi from "./Components/EMandi/EMandi"
// import Icon from "react-native-vector-icons/FontAwesome"

import Parent from "./Components/Parent/Parent"
const Navigation = () => {
    return (
        <Router sceneStyle={{backgroundColor:"#ffffff"}}>
            <Stack key='root' hideNavBar 
            // navigationBarStyle={{backgroundColor:"#22ccee"}}
            >
            <Scene key='auth' initial>
                <Scene key='logi' hideNavBar component={Auth} initial/>
            </Scene>
            <Scene key='postAuth' rightTitle="Logout" title="FarmBot" onRight={()=>{console.log("logout called")}}>
                <Scene key='dashboard' component={Parent} initial /> 
                {/* <Scene key='market' component={Market} />
                <Scene key='cropcycle' component={CropCycle} />
                <Scene key='plantdoctor' component={PlantDoctor} />
                <Scene key='emandi' component={EMandi} /> */}
            </Scene>
            </Stack>
        </Router>
    )
}

export default Navigation