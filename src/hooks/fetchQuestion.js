import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { moveToNextQues, startExam } from "../store/slices/questionSlice";
/** redux actions */
import data, {answers} from "../database/data";

/** fetch question hook to fetch api data and set value to store */
export const useFetchQestion = () => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        /** IIFE to fetch backend data */
        (async () => {
            try {
                let questions = data
                // const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
                
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : questions}));

                    /** dispatch an action */
                    // console.log({questions,answers});
                    
                    dispatch(startExam({questions,answers}))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev =>({...prev,isLoading:false }))
                setGetData(prev =>({...prev,serverError:error }))
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}


/** MoveAction Dispatch function */
// export const MoveToNextQuestion = () => async (dispatch) => {
//     try {
//         dispatch(moveToNextQues); /** increase trace by 1 */
//     } catch (error) {
//         console.log(error)
//     }
// }

// /** PrevAction Dispatch function */
// export const MovePrevQuestion = () => async (dispatch) => {
//     try {
//         dispatch(Action.movePrevAction()); /** decrease trace by 1 */
//     } catch (error) {
//         console.log(error)
//     }
// }