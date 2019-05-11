import React from 'react'
import ReactDOM from 'react-dom'
import MealBrowserPage from './MealBrowserPage';
import { BrowserRouter } from 'react-router-dom'


describe(`MealBrowserPage Component`, ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><MealBrowserPage/></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})