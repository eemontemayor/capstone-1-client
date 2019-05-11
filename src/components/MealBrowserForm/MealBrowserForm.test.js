import React from 'react'
import ReactDOM from 'react-dom'
import MealBrowserForm from './MealBrowserForm';
import { BrowserRouter } from 'react-router-dom'


describe(`MealBrowserForm Component`, ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><MealBrowserForm/></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})