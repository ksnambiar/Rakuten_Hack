import React from 'react'
import { View, Text } from 'react-native'
import {Router,Scene,Stack} from "react-native-router-flux"
import Icon from "react-native-vector-icons/FontAwesome"
//components imported
import Auth from "./Components/Auth/Auth";
import Market from "./Components/Market/Market"
import CropCycle from "./Components/CropCycle/CropCycle"
import PlantDoctor from "./Components/PlantDoctor/PlantDoctor"
import Dashboard from "./Components/Dashboard/Dashboard"
import EMandi from "./Components/EMandi/EMandi"
const Navigation = () => {
    return (
        <Router sceneStyle={{backgroundColor:"#ffffff"}}>
            <Stack key='root' hideNavBar navigationBarStyle={{backgroundColor:"#22ccee"}}>
            <Scene key='auth' initial>
                <Scene key='logi' hideNavBar component={Auth} initial/>
            </Scene>
            <Scene key='postAuth' >
                <Scene key='dashboard' component={Dashboard} initial />
                <Scene key='market' component={Market} />
                <Scene key='cropcycle' component={CropCycle} />
                <Scene key='plantdoctor' component={PlantDoctor} />
                <Scene key='emandi' component={EMandi} />
            </Scene>
            </Stack>
        </Router>
    )
}

export default Navigation