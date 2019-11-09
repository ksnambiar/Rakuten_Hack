import {SET_CURRENT_USER,} from "../actions/types"
//actions for authentication
import {firebase} from "../../utils/Firebase"
const database = firebase.database()

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
    localStorage.removeItem('uid')
    dispatch(setCurrentUser({}))
}