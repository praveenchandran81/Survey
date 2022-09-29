import React, { useRef, useState } from 'react'
import { IAnswerComponent } from './IAnswerComponent'

const AnswerComponent:React.FC<IAnswerComponent> = (props:IAnswerComponent) => {

   // console.log('answercomponnet',props.SelectedAnswer);
    const prevAnswer=useRef('');
    const [currentAnswer,setCurrentAnswer]=useState('');

    const setAnswerHandler=(e:any)=>{
        props.SetAnswer(e.target.value);
        setCurrentAnswer(e.target.value);
       
    }

    React.useEffect(()=>{
        prevAnswer.current=currentAnswer;
    },[props.SelectedAnswer])

  return (
    <div>
       <p>Answer is </p>

         {prevAnswer.current}
        <br/>
        <input type="text" value={props.SelectedAnswer} name="answerText" onChange={setAnswerHandler}></input>

    </div>
     
  )
}

export default AnswerComponent