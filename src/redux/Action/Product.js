import axios from "axios"
import { Action_type } from "../../Constant/Action_type"
const baseUrl = "https://online-foods.herokuapp.com/"
import * as Location from 'expo-location';

// export const addData = (data) => {

//     return async (dispatch) => {
//         dispatch({
//             type: Action_type.ADD_ELEMENT_TO_REDUX,
//             payload: data
//         })
//     }
// }
export const setUserCredential = (userId, password) => {

    const userCredential = {
        userId: userId,
        password: password
    }
    return async (dispatch) => {

        dispatch({
            type: Action_type.SET_USER_CREDENTIAL,
            payload: userCredential
        })
    }
}
export const locationCall = () => {

    return async (dispatch) => {
        var userAddress;
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const { coords } = location
        if (coords) {

            const { latitude, longitude } = coords;

            let addressResponse = await Location.reverseGeocodeAsync({ latitude, longitude })

            for (let item of addressResponse) {
                // setLocation(item)
                // onUpdateLocation(item)
                userAddress = {
                    name: item.name,
                    district: item.district,
                    city: item.city,
                    region: item.region,
                    postalCode: item.postalCode

                }
                // console.log("before",userAddress)
                // setTimeout(() =>{
                //     console.log("shashi-----------",userAddress)
                //         },1000)


                // console.log(addressResponse)
                // let currentAddress = `${item.city},${item.name},${item.district}, ${item.postalCode}, ${item.region}`
                // setDisplayAddress(currentAddress)
                // console.log(address)
                // if(currentAddress.length > 0){
                //     setTimeout(() =>{
                //         navigate('homeStack')
                //     }, 2000)
                // }
                // return;
            }
        }

        //   })();



        dispatch({
            type: Action_type.SET_USER_ADDRESS,
            payload: userAddress
        })
    }

}

export const hitApi = () => {
    return async (dispatch) => {

        // const options = {
        //     method: 'GET',
        //     url: 'https://burgers1.p.rapidapi.com/burgers',
        //     headers: {
        //       'X-RapidAPI-Key': '388dbe7939mshbf9d774175813f0p1a09d2jsn25a1f0dd5452',
        //       'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
        //     }
        //   };
        const options = {
            method: 'GET',
            url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
            params: { ingr: 'apple' },
            headers: {
                'X-RapidAPI-Key': '388dbe7939mshbf9d774175813f0p1a09d2jsn25a1f0dd5452',
                'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
            }

        };

        try {
            const response = await axios(options)
            const data = await (response.data)
            console.log("action", data)
            dispatch({
                type: Action_type.FETCH_API_SUCCESSFULLY,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: Action_type.SET_API_FETCH_ERROR,
                payload: error
            })
        }
    }
}
export const setHorizontalData = (horizontalData) => {
    // console.log("horizontalData",horizontalData)

    return async (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: Action_type.SET_HORIZONTAL_DATA,
                payload: horizontalData
            })
        }, 2000)
    }


}
export const setVerticalData = (verticalData) => {
    // console.log("vertical", verticalData)

    return async (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: Action_type.SET_VERTICAL_DATA,
                payload: verticalData
            })
        }, 2000)
    }


}
export const selectHorizontalItem = (id, horizontalData) => {

    return async (dispatch) => {
        const updatedHorizontalData = horizontalData.map((element, index) => {
            if (element._id == id) {
                return {
                    ...element, selected: true
                }
            } else {
                return {
                    ...element, selected: false
                }
            }
        })
        console.log(updatedHorizontalData, "updatedHorizontalData")
        dispatch({
            type: Action_type.SET_HORIZONTAL_SELECTED_DATA,
            payload: updatedHorizontalData
        })
    }
}
export const addItemToCart = (item,cartData) => {
    let newCardData=[...cartData,item]
    return async (dispatch) => {
        dispatch({
            type: Action_type.ADD_ITEM_TO_CART,
            payload: newCardData
        })
    }
}
export const removeItem=(item,Data)=>{
    console.log("Data",Data)
    const updatedItems=Data.filter((element,index)=>{
       return element.id!== item.id
    })
    console.log("updatedItems",updatedItems)
     return async(dispatch)=>{
        dispatch({
            type: Action_type.ADD_ITEM_TO_CART,
            payload: updatedItems
        })
     }
}