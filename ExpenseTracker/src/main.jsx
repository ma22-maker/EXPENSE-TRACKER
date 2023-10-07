import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import Secondmain from './Secondmain.jsx'
// import ET from './ET.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <App />
    <Secondmain />
    </NextUIProvider>
  </React.StrictMode>,
)
