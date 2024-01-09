import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

const mapSlice = createSlice({
    initialState,
    name:"mapSlice",
    reducer: {
        setOrigin : (state,action) => {
            state.origin = action.payload
        },
        setDestination : (state,action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation : (state,action) => {
            state.travelTimeInformation = action.payload
        }
    }
})

export const  {setOrigin,setDestination,setTravelTimeInformation} =  mapSlice.actions;
export default mapSlice.reducer

export const SelectOrigin = (state) => state.mapSlice.origin
export const SelectDestination = (state) => state.mapSlice.destination
export const SelectTravelTimeInformation = (state) => state.mapSlice.travelTimeInformation