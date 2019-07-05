import React from 'react'
import ReactDOM from 'react-dom'
import ResultItem from './ResultItem';
import { BrowserRouter } from 'react-router-dom'

const ingredients = ['salt', 'pepper', 'milk', 'flour'];

describe(`ResultItem Component`, ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><ResultItem ingredients={ingredients}/></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})