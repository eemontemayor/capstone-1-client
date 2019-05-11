import React from 'react'
import ReactDOM from 'react-dom'
import MealPlannerForm from './MealPlannerForm';
import { BrowserRouter } from 'react-router-dom'


describe(`MealPlannerForm Component`, ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><MealPlannerForm/></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})