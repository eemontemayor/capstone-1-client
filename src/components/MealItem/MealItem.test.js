import React from 'react'
import ReactDOM from 'react-dom'
import MealItem from './MealItem';
import { BrowserRouter } from 'react-router-dom'



describe(`MealItem Component`, ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><MealItem /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})