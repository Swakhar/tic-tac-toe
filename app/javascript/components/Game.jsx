import React, { useState, useEffect } from 'react'
import StepList from './StepList'

function Game(props) {
  const [steps, setSteps] = useState({ steps: props.steps})

  useEffect(() => {
    setupCable()
  });

  const updateSteps = (data) => {
    let currentSteps = props.steps
    if (data) {
      let newSteps = currentSteps.push(data.step)
      setSteps({ steps: newSteps })
      let player = (data.step.position % 2) || 2

      console.log('Player ' + player + ' played!')

      if (data.winner) {
        alert('Player ' + player + ' wins!')
        window.location.reload()
      } else if (data.tie) {
        alert('We have a tie')
        window.location.reload()
      }
    }
  }

  const setupCable = () => {
    const move = props.cable.subscriptions.create("StepChannel",
    {
      connected: function () {
      },

      disconnected: function () {
      },

      received: function(data) {
        console.log('recieved', data)
        updateSteps(data);
      },

      selectBox: function(data) {
        move.perform('select_box', { box: data })
      },

      updateSteps: updateSteps()
    });
  }
  return (
    <div id='steps' className="col-xs-12 col-md-4 col-lg-4 col-lg-offset-4">
      <StepList steps={ props.steps } />
    </div>
  );
}

export default Game;
