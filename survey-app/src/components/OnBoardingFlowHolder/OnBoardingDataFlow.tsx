import React, { ReactElement, ReactNode } from 'react'
import {  ISurveyScreen } from '../Screens/SurveyScreen';

interface IOnBoardingDataFlow{
    currentIndex:number;
    onNext:(data:any)=>void;
    onPrevious:(data:any)=>void;
    children:ReactElement[];
}

const OnBoardingDataFlow:React.FC<IOnBoardingDataFlow> = (props:IOnBoardingDataFlow) => {

    

    const nextHandler=(stepData:any)=>{
        props.onNext(stepData)
    }
    const previousHandler=(stepData:any)=>{
        props.onPrevious(stepData)
    }

    const currentChild=React.Children.toArray(props.children)[props.currentIndex] as ReactElement<ISurveyScreen>

    if(React.isValidElement(currentChild)){
        return React.cloneElement(currentChild,{goToNext:nextHandler,goToPrevious:previousHandler})
    }

    return currentChild;
 
}

export default OnBoardingDataFlow