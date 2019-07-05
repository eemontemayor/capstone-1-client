import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from './Calendar';
import { BrowserRouter } from 'react-router-dom'


describe(`Calendar Component`, ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><Calendar/></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})