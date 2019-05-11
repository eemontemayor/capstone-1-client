import React from 'react'
import ReactDOM from 'react-dom'
import MealPlannerPage from './MealPlannerPage';
import { BrowserRouter } from 'react-router-dom'


describe(`MealPlannerPage Component`, ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><MealPlannerPage/></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})