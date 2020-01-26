import React from 'react'
import ReactDOM from 'react-dom'
import './client/public/index.css'
import App from './client/App.jsx'

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
     document.getElementById('root')
)
