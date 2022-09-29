

import React, { useCallback, useRef, useState } from 'react'
import QuestionsData, { IQuestion } from '../../data/questionsData'
import QuestionComponent from '../Question/QuestionComponent'
import { ISurveyHomeComponent } from './ISurveyHomeComponent'

const SurveyHomeComponent:React.FC<ISurveyHomeComponent> = (props:ISurveyHomeComponent) => {

    

    const [index,setIndex]=useState(0);
    const [questionsData,setQuestionsData]=useState<IQuestion[]>([])
    const [currentQuestion,setCurrentQuestion]=useState<IQuestion>();

    const setQuestionCallback=(question:IQuestion)=>{
        setQuestionsData([...questionsData,question]);

       // console.log('question',question);
       // setCurrentQuestion(question);
        
    };


    React.useEffect(()=>{
        if(QuestionsData.length>0)
        setCurrentQuestion(QuestionsData[index]);

    },[index])

 //   console.log('questionsData',questionsData);
    

    const onNextHandler=()=>{
        const currentIndex=index+1;
        setIndex(currentIndex);
       
         
    }
    const onPreviousHandler=()=>{
        
        const currentIndex=index-1;
        setIndex(currentIndex);
      // console.log('questionsData',questionsData);
      //// console.log('currentIndex',currentIndex);
       
       const prevQuestionData=questionsData[currentIndex];
//onsole.log('prevQuestionData',prevQuestionData);

       setCurrentQuestion(prevQuestionData);
    }

  return (
    <div>
        
        <QuestionComponent SetQuestion={setQuestionCallback} PresentQuestion={currentQuestion ?? undefined} />

        <button onClick={onPreviousHandler}>Previous</button>
        <button onClick={onNextHandler}>Next</button>

    </div>
  )
}

export default SurveyHomeComponent