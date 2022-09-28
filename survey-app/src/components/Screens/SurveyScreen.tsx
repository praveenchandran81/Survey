
import React, { useState } from 'react'

 

export interface ISurveyScreen{
    questionNo:number;
    question:string;
    goToNext?:(data:any)=>void
}

const SurveyScreen = (props:ISurveyScreen) => {

    const [data,setData]=useState('');
    

    const handleOnNext=()=>{
      props.goToNext?props.goToNext({[props.questionNo]:data}):null
    }

  return (
    <>
    <div>{props.question}</div>
    <input type="text" value={data} onChange={(e)=>setData(e.target.value)}></input>
    <button onClick={handleOnNext}>Next</button>
    </>
  )
}

export default SurveyScreen