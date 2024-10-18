import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const attempts_Qus =(result)=>{
    return result.filter(r=>r !== undefined).length
}

export const obtaine_Marks =(result, answers, point)=>{
    return result.map((elm,i )=> answers[i]==elm).filter(i=>i).map(i=>point).reduce((pre,curr)=>pre+curr,0)
}

export const flagResult =(totalPoints, obtainMarks)=>{
    return (obtainMarks*100/totalPoints) >33
}

export const CheckUserExist=({children})=>{
    const auth = useSelector(state =>state.result.userId)
    return auth ? children : <Navigate to="/" replace={true}></Navigate>
}