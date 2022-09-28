
import React, { useState } from 'react'

 

export interface ISurveyScreen{
    questionNo:string;
    
    goToNext?:(data:any)=>void
}

const SurveyScreen = (props:ISurveyScreen) => {

    const [data,setData]=useState('');
    

    const handleOnNext=()=>{
      props.goToNext?props.goToNext({[props.questionNo]:data}):null
    }

  return (
    <>
    <div>SurveyScreen</div>
    <input type="text" value={data} onChange={(e)=>setData(e.target.value)}></input>
    <button onClick={handleOnNext}>Next</button>
    </>
  )
}

export default SurveyScreen