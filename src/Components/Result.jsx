import React from "react";
import { Link } from "react-router-dom";
import ResultTable from "./ReultTable"; // Corrected the name of the component
import { useDispatch, useSelector } from "react-redux";
import { resetAllResultAction } from "../store/slices/resultSlice";
import { resetAllQuesAction } from "../store/slices/questionSlice";
import { attempts_Qus, flagResult, obtaine_Marks } from "../helper/helper.jsx";

function Result() {
  const dispatch = useDispatch();
  const onRestart = () => {
    dispatch(resetAllQuesAction());
    dispatch(resetAllResultAction());
  };

  const {questions :{queue, answers}, result :{result,userId}} = useSelector(state=>state)
  console.log(result);
  

  //Result>>>>>>>>>>>
  const totalMarks = queue.length *2
  const attemptsQus = attempts_Qus(result)
  const obtainedMarks = obtaine_Marks(result,answers,2)
  const flag = flagResult(totalMarks,obtainedMarks)

  console.log(flag);
  

  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-200 p-6">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-8">
            Internal Examination
          </h1>

          {/* User Information */}
          <div className="mb-6 space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Username:</span>
              <span className="text-gray-400">Pushpesh</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Total Marks:</span>
              <span className="text-gray-400">{totalMarks || 10}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Total Questions:</span>
              <span className="text-gray-400">{queue.length || 5}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Total Attempts:</span>
              <span className="text-gray-400">{attemptsQus || 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Obtain Marks:</span>
              <span className="text-gray-400">{obtainedMarks || 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Quiz Result:</span>
              <span className={`${flag?"text-green-500":"text-red-500"} font-semibold`}>{flag ?"Passed" :"Failed"}</span>
            </div>
          </div>

          {/* Restart Button */}
          <div className="text-center">
            <Link
              to="/"
              onClick={onRestart}
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300"
            >
              Restart Quiz
            </Link>
          </div>
        </div>

        {/* Result Table */}
        <ResultTable />
      </div>
    </div>
  );
}

export default Result;
