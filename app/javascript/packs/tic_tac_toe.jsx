// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { createConsumer } from "@rails/actioncable"
import Game from '../components/Game'

const CableApp = {}
CableApp.cable = createConsumer('ws://localhost:3000/cable')

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('steps_data')
  const steps = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Game cable={CableApp.cable} steps={steps} />,
    document.body.appendChild(document.createElement('div')),
  )
})
