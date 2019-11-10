import {SET_CURRENT_USER,} from "../actions/types"

//actions for authentication

import database from "@react-native-firebase/database"
import AsyncStorage from "@react-native-community/async-storage"

// const database = firebase.database()

export const getCurrentProfile = (uid)=>dispatch=>{
    // const user = firebase.auth().currentUser
    database.ref("user/"+uid).once("value").then(snapshot=>{
        const data=snapshot.val()
        // data.utype="user"
        dispatch(setCurrentUser(data))
    })
}
// export const setCurrentLocation = (position)=>dispatch=>{
//     dispatch({
//         type:GET_CURRENT_LOC,
//         payload:{
//             latitude:position.coords.latitude,
//             longitude:position.coords.longitude
//         }
//     })
// }
export const createProfileNew = (uid,data,history)=>dispatch=>{
    database.ref("user/"+uid).set(data).then((obj)=>{
        // const data=snapshot.val()
        dispatch(setCurrentUser(data))
        history.push('/dashboard')
        // dispatch(setCurrentUser(data))
    })
    .catch(err=>{
        console.log(err)
    })
}

export const setCurrentUser = (data)=>{
    return {
        type:SET_CURRENT_USER,
        payload:data
    }
}

export const logOutUser = ()=>dispatch=>{
    // localStorage.removeItem('uid')
    dispatch(setCurrentUser({}))
}

export const getData = async(key)=>{
    let data=null
    try{
        data= await AsyncStorage.getItem(key)
    } catch(e){
        console.log(e)
    }
    return data;
}

export const storeKey = async(key,value)=>{
    try {
        await AsyncStorage.setItem(key, value)
      } catch (e) {
        console.log(e);
      }
}