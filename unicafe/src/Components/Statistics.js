import React from 'react'
import StatisticLine from './StatisticLine';

const Statistics = ({good, bad, neutral}) => {

  let all = good + bad + neutral 
  let Percentage = ((good / all )*100).toFixed(2)
  let Average = ((good -bad)/all).toFixed(2)
  if(all === 0) {
    return 'No feedback has being gathered'
  }
  return (
    <div>
      <StatisticLine text={'Good'} value={good}/>
      <StatisticLine text='Neutral' value = {neutral}/>
      <StatisticLine text='Bad' value={bad}/>
      <StatisticLine text='All' value={all}/>
      <StatisticLine text='Percentage' value={Percentage}/>
      <StatisticLine text='Average' value={Average}/>
    </div>
  )
}

export default Statistics