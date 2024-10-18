import React, { useEffect, useState } from "react";
import { useFetchQestion } from "../hooks/fetchQuestion";
import { useDispatch, useSelector } from "react-redux";
import { updateResult } from "../hooks/setResult";

function Questions({ onChacked }) {
  const [checked, setChecked] = useState(null);
  const trace = useSelector((state) => state.questions?.trace);
  const result = useSelector((state) => state.result.result);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log({ checked, trace });

    dispatch(updateResult({ checked, trace }));
  }, [checked]);
  const onSelect = (i) => {
    onChacked(i);
    setChecked(i);
    dispatch(updateResult({ checked, trace }));
  };

//   console.log(useSelector(state=>state));
  
  const [{ isLoading, apiData, serverError }] = useFetchQestion();
  const questions = useSelector((state) => {
    const queue = state.questions.queue;
    // console.log(queue);
    
    return queue && trace !== undefined ? queue[trace] : null;
  });

  console.log(useSelector(state =>state));
  
  if (isLoading) return <h3>Loading ....</h3>;
  if (serverError) return <h3>{serverError || "Unknown Error"}</h3>;
  if (!questions) return <h3>No Questions Available</h3>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 text-gray-200 rounded-lg shadow-lg">
      {/* Question Heading */}
      <h2 className="text-2xl font-bold mb-6">{questions?.question}</h2>

      {/* Options List */}
      <ul className="space-y-4" key={questions?.id}>
        {questions?.options?.map((option, i) => (
          <li key={i} className="flex items-center space-x-3">
            {/* Radio Input */}
            <input
              type="radio"
              name="options"
              id={`q-${i}-option`}
              onChange={() => onSelect(i)}
              checked={result[trace] === i} // This will actually select the radio button
              className={`appearance-none w-4 h-4 border-2 border-white rounded-full
    ${result[trace] === i ? "bg-green-500" : "bg-transparent"}
    focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 shadow-sm hover:shadow-md hover:border-purple-500 transition-all duration-300 cursor-pointer`}
            />

            {/* Label for Options */}
            <label
              htmlFor={`q-${i}-option`}
              className={`text-lg cursor-pointer hover:text-purple-400 transition-colors duration-300 ${
                result[trace] == i ? "text-green-300" : ""
              }`}
            >
              {option}
            </label>
            <div
              className={`check ${
                result[trace] == i ? "bg-yellow-300" : "bg-red-400"
              }`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
