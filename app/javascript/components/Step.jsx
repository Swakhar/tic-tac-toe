import React from 'react'

function Step(props) {
  return(
    <div className='box col-xs-4' id={ props.box }>
      <span className={ props.imageClass }/>
    </div>
  )
}

export default Step
