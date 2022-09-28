import React from 'react'

interface ISurveyFinish{
  onBoardingData:any
}

const SurveyFinish = (props:ISurveyFinish) => {

  console.count('survey finished mouted..')

  React.useEffect(()=>{

    console.log('survey finished',props.onBoardingData)

  },[])

  return (
    <div>SurveyFinish</div>
  )
}

export default SurveyFinish