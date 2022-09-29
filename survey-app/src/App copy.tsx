import React, { ReactElement, ReactNode, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import OnBoardingDataFlow from './components/OnBoardingFlowHolder/OnBoardingDataFlow'
import SurveyScreen, { ISurveyScreen } from './components/Screens/SurveyScreen'
import SurveyFinish from './components/Screens/SurveyFinish'
import { Questions } from './data/Questions'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [onBoardingData, setOnBoardingData] = useState({})
   

   
 

   
 
  

  const onNext = (stepData: any) => {
    const nextIndex = currentIndex + 1
    const updatedData = {
      ...onBoardingData,
      ...stepData,
    }
    setCurrentIndex(nextIndex)
    setOnBoardingData(updatedData)
 
    
    
    console.log('updatedData', updatedData)
  }
  const onPrevious = (stepData: any) => {
    const nextIndex = currentIndex - 1
    const updatedData = {
      ...onBoardingData,
      ...stepData,
    }
    setCurrentIndex(nextIndex)
    setOnBoardingData(updatedData)
 
    
    
    console.log('updatedData', updatedData)
  }

   

  return (
    <div className="App">

     
      <OnBoardingDataFlow onNext={onNext} onPrevious={onPrevious} currentIndex={currentIndex}>
       
       <SurveyScreen questionNo={Questions[0].QuestionNo} question={Questions[0].Question}/>
       <SurveyScreen questionNo={Questions[1].QuestionNo} question={Questions[1].Question}/>
       <SurveyScreen questionNo={Questions[2].QuestionNo} question={Questions[2].Question}/>
       <SurveyScreen questionNo={Questions[3].QuestionNo} question={Questions[3].Question}/>
       <SurveyScreen questionNo={Questions[4].QuestionNo} question={Questions[4].Question}/>
       
        <SurveyFinish onBoardingData={onBoardingData} />
      </OnBoardingDataFlow>
    </div>
  )
}
 

export default App
