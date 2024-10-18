import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name :"result",
    initialState :{
        userId :null,
        result :[],
    },
    reducers :{
        setUserId :(state, action)=>{
            state.userId = action.payload
        },
        pushResultAction : (state, action) => {
            state.result.push(action.payload)
        },
        updateResultAction : (state, action) => {
            const { trace, checked } = action.payload;
            state.result.fill(checked, trace, trace + 1)
        },
        resetResultAction : () => {
            return {
                userId : null,
                result : []
            }
        },
        resetAllResultAction: () => {
            return {
                userId :null,
                result :[],
            };
          },
    }
})

export default resultSlice.reducer;
export const {setUserId, pushResultAction,updateResultAction,resetResultAction,resetAllResultAction} = resultSlice.actions;
