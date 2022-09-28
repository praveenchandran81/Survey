
import React, { useState } from 'react'
import AnswerComponent from '../AnswerComponent/AnswerComponent';
import Button from '@mui/material/Button';
 
import Stack from '@mui/material/Stack';
 

export interface ISurveyScreen{
    questionNo:number;
    question:string;
    goToNext?:(data:any)=>void;
    goToPrevious?:(data:any)=>void;
}

const SurveyScreen = (props:ISurveyScreen) => {

    const [answerValue,setAnswerValue]=useState('');
    

    const handleOnNext=()=>{
      props.goToNext?props.goToNext({[props.questionNo]:answerValue}):null
    }
    const handleOnPrevious=()=>{
      props.goToPrevious?props.goToPrevious({[props.questionNo]:answerValue}):null
    }

    const getAnswer=(ans:string)=>{
        setAnswerValue(ans)
    }


  return (
    <>
    <div>{props.question}</div>
    

    <AnswerComponent getAnswer={getAnswer}/>

    {/* <button onClick={handleOnNext}>Next</button> */}

    <Stack direction="row" spacing={2}>
      
      {
        props.questionNo!=1 &&  <Button onClick={handleOnPrevious} variant="contained" >Previous</Button>
      }
     <Button onClick={handleOnNext} variant="outlined" >
        Next
      </Button>
    </Stack>
    </>
  )
}

export default SurveyScreen