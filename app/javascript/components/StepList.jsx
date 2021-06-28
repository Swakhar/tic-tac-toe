import React, { useState } from 'react'
import Step from './Step'

function StepList(props) {
  const [stepList, setStepList] = useState(Array(9).fill(''))
  const imageForTile = (box) => {
    const step = props.steps && [].filter(step => step.box === box)[0]

    if (step != undefined)
      if (step.position % 2)
        return 'X'
      else
        return 'O'
    else
      return null
  }

  return stepList.map((_v, i) => (
    <div key={i}> 
      <Step key={ i } box={ i } imageClass={ imageForTile(i) } />
    </div>
  ));
}

export default StepList
