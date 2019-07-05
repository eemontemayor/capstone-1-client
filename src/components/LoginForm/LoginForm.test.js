import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './LoginForm';
import { BrowserRouter } from 'react-router-dom'


describe(`LoginForm Component`, ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LoginForm/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})