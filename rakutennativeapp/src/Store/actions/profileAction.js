import {GET_CURRENT_PROFILE,PROFILE_LOADING} from "./types"
// import {firebase} from "../../utils/Firebase"
import database from "@react-native-firebase/database"
const database = firebase.database()

export const getFarmerdetails = (uid)=>dispatch=>{
    dispatch(setProfileLoading())
    database.ref('profile/'+uid).once('value').then(snapshot=>{
        const data = snapshot.val()
        dispatch({
            type:GET_CURRENT_PROFILE,
            payload:data
        })
    })
}

export const addFarmerDetailes = (uid,data)=>dispatch=>{
    console.log(uid,data)
    database.ref('profile/'+uid).set(data).then(obj=>{
    dispatch(getFarmerdetails(uid))
})
.catch(err=>{
    console.log(err)
})

}

export const setProfileLoading = ()=>{
    return{
        type:PROFILE_LOADING
    }
}