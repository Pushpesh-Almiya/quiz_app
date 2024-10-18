import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExam: (state, action) => {
      let { questions, answers } = action.payload;
      return {
          ...state,
          queue: questions,   // Correctly updating questions array
          answers: answers    // Correctly updating answers array
      };
  },
    moveToNextQues: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    moveToPrevQues: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAllQuesAction: () => {
      return {
        queue: [],
        answer: [],
        trace: 0,
      };
    },
  },
});

export default questionSlice.reducer;
export const { startExam, moveToNextQues, moveToPrevQues, resetAllQuesAction } =
  questionSlice.actions;
