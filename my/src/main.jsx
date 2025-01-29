import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Five_components from './Components_with_Fragment.jsx'
import Dynamic_values from './Dynamic_values.jsx'
import Conditional_values from './Conditional_values.jsx'
import App from './App.jsx'
// import AliceSerise from './components/AliceSeries.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <Dynamic_values />
    <Five_components />
    <Conditional_values /> */}
    {/* <AliceSerise /> */}
  </StrictMode>,
)
