import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./slices/questionSlice.js"
import resultSlice from "./slices/resultSlice.js"
const store = configureStore ({
    reducer :{
        questions : questionSlice,
        result :resultSlice
    }
})

export default store