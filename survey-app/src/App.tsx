import React, { ReactElement, ReactNode, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import OnBoardingDataFlow from './components/OnBoardingFlowHolder/OnBoardingDataFlow'
import SurveyScreen, { ISurveyScreen } from './components/Screens/SurveyScreen'
import SurveyFinish from './components/Screens/SurveyFinish'
import { IQuestion, Questions } from './data/Questions'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [onBoardingData, setOnBoardingData] = useState({})
  const [questions, setQuestions] = useState<IQuestion[]>([])

  const[currentQuestion,setCurrentQuestion]=useState<IQuestion>({
      Question: '',
      QuestionNo: 0,
    });

  //const questions = useRef<IQuestion[]>([]) // here we are using ref, because we dont need a re-render.
 

  React.useEffect(() => {
    console.log('simulating an api call for getting the questions.')

    setQuestions(Questions);

     
    // if(questions.current.length>0){
    
    //   setCurrentQuestion({QuestionNo:questions.current[0].QuestionNo,Question:questions.current[0].Question})
    // }
  }, [])

   
  //const getCurrentScreen=()=>{

     
   const screens:ReactElement<ISurveyScreen>[]= questions.map(question=>{
      return(
        <SurveyScreen questionNo={question.QuestionNo} question={question.Question}/>
      )
    })
   //
  //  return screens;
  //}
  

  const onNext = (stepData: any) => {
    const nextIndex = currentIndex + 1
    const updatedData = {
      ...onBoardingData,
      ...stepData,
    }
    setCurrentIndex(nextIndex)
    setOnBoardingData(updatedData)

    console.log('nextindex',nextIndex);
    
    const nextQuestion = questions.current.filter(question => question.QuestionNo === nextIndex+1);
    console.log('nq',nextQuestion);
    
    setCurrentQuestion({QuestionNo:nextQuestion[0].QuestionNo,Question:nextQuestion[0].Question})


    console.log('updatedData', updatedData)
  }

  // const surveyScreens= Questions.map(question => {
  //      return(<SurveyScreen questionNo={question.QuestionNo} question={question.Question} />)
  // });

  return (
    <div className="App">
      <OnBoardingDataFlow onNext={onNext} currentIndex={currentIndex}>
        {screens}
        <SurveyFinish onBoardingData={onBoardingData} />
      </OnBoardingDataFlow>
    </div>
  )
}

export default App
