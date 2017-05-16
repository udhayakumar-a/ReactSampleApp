// Import React and React-dom.
import React from 'react'
import ReactDOM from 'react-dom'

// Import the components.
import { SamplePage } from './elements/sample-element.jsx'

// Define the root element.
const root = document.querySelector('main')

// Append the DummyComponent to the root element.
ReactDOM.render(<SamplePage />, root)
