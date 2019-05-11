import React from 'react'
import ReactDOM from 'react-dom'
import AddMealForm from './AddMealForm';
import { BrowserRouter } from 'react-router-dom'


describe(`AddMealForm Component`, ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><AddMealForm/></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})