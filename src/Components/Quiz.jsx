import React, { useState } from "react";
import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { moveToNextQues, moveToPrevQues } from "../store/slices/questionSlice";
import { PushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";

function Quiz() {
  const [check, setCheck]= useState(null)
  const dispatch = useDispatch();
  const {trace, queue} = useSelector((state) => state.questions);
//   console.log(queue.question.length);

  const onPrev = () => {
    if (trace > 0) {
      dispatch(moveToPrevQues());
    }
  };
  const onChecked =(check)=>{
    // console.log(check);
    setCheck(check)
  }

  const onNext = () => {
    dispatch(moveToNextQues());
    if (result.length<= trace){
      dispatch(PushAnswer(check))
    }
    //Reset the value of the checked Variable
    setCheck(undefined)
  };


  const result = useSelector(state =>state.result.result)
  // console.log(result);
  
  
  if(result.length && result.length >= queue.length){
    return <Navigate to={'/result'} replace={true}></Navigate>
}
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6">
      {/* Quiz Title */}
      <h1 className="text-3xl font-bold mb-8">Information Technology</h1>

      {/* Display Questions */}
      <Questions onChacked = {onChecked}/>

      {/* Navigation Buttons */}
      <div className="mt-8 flex space-x-32">
        {trace>0 ?<button
          className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-all duration-300"
          onClick={onPrev}
        >
          Prev
        </button>: <div> </div>}
        <button
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
