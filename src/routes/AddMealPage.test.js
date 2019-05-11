import React from 'react'
import ReactDOM from 'react-dom'
import AddMealPage from './AddMealPage';
import { BrowserRouter } from 'react-router-dom'


describe(`AddMealPage Component`, ()=>{
    it.skip('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddMealPage/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})