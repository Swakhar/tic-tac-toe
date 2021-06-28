import React from 'react'

function Step(props) {
  return(
    <div className='box' id={ props.box }>
      <span className={ props.imageClass }/>
    </div>
  )
}

export default Step
