import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import OnBoardingDataFlow from './components/OnBoardingFlowHolder/OnBoardingDataFlow';
import SurveyScreen from './components/Screens/SurveyScreen';
import SurveyFinish from './components/Screens/SurveyFinish';

function App() {
  
  const [currentIndex,setCurrentIndex]=useState(0);
  const [onBoardingData,setOnBoardingData]=useState({});

  const onNext=(stepData:any)=>{
    const nextIndex=currentIndex+1;
    const updatedData={
      ...onBoardingData,
      ...stepData
    }
    setCurrentIndex(nextIndex);
    setOnBoardingData(updatedData);
    console.log('updatedData',updatedData);
  }

  return (
    <div className="App">
       <OnBoardingDataFlow onNext={onNext} currentIndex={currentIndex}>
        <SurveyScreen questionNo='1' />
        <SurveyScreen questionNo='2' />
        <SurveyScreen questionNo='3' />
        <SurveyFinish onBoardingData={onBoardingData}/>
       </OnBoardingDataFlow>
    </div>
  );
}

export default App;
