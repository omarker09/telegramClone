import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";


const getThToken = async () => {
    const value = await AsyncStorage.getItem("uid")
    if (!value == null) {

    }
}

const initialState = {
    condition: false
}



const navSlice = createSlice({
    initialState,
    name: "navSlice",
    reducers: {
        checkAuth: (state, action) => {
            state.condition = action.payload
        }
    }
})

export const { checkAuth } = navSlice.reducer
export default navSlice.actions

export const SelectCheckAuth = (state) => state.navSlice.condition