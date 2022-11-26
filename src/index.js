import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {CustomContextProvider} from './components/Customcontext'

import App from "./App"

ReactDOM.render(
    <CustomContextProvider>
        <Router>
            <App />
        </Router>
    </CustomContextProvider>
    , document.getElementById("root"))
