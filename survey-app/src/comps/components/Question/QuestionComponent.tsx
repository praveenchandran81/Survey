import React, { useCallback, useRef, useState } from 'react'
import { IQuestion } from '../../data/questionsData'
import AnswerComponent from '../Answer/AnswerComponent'
 
import { IQuestionComponent } from './IQuestionComponent'

const QuestionComponent:React.FC<IQuestionComponent> = (props:IQuestionComponent) => {
    
   // console.log('IQuestion',props.PresentQuestion);
    
    const [currentQuestion,setCurrentQuestion]=useState<IQuestion>();

    const setAnswerCallback= (answerFromChild:string)=>{

        const localQuestion:IQuestion={
            QuestionNumber:props.PresentQuestion?.QuestionNumber ?? 0,
            QuestionName:props.PresentQuestion?.QuestionName ?? '',
            Answer:answerFromChild
        }
        setCurrentQuestion(localQuestion);
        props.SetQuestion(localQuestion);
    }

    React.useEffect(()=>{
        console.log('changed',props.PresentQuestion);
        
        // setCurrentQuestion({
        //     QuestionNumber:props.PresentQuestion?.QuestionNumber ?? 0,
        //     QuestionName:props.PresentQuestion?.QuestionName ?? '',
        //     Answer:props.PresentQuestion?.Answer ?? ''
        // })
        setCurrentQuestion(props.PresentQuestion);
        
    },[props.PresentQuestion])


  return (
    <div>
        <h1>{props.PresentQuestion?.QuestionNumber}</h1>
        <h2>{props.PresentQuestion?.QuestionName}</h2>


        <AnswerComponent SetAnswer={setAnswerCallback}  SelectedAnswer={currentQuestion?.Answer ?? ''}/>

    </div>
  )
}

export default QuestionComponent