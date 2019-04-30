import React, {Component} from 'react';
import AddMealForm from '../components/AddMealForm/AddMealForm';
import { Button, Input } from '../components/Utils/Utils';

export default class AddMealPage extends Component{
    render(){
        return(
            <div><AddMealForm/></div>
        )
    }
}



// must have a back button
// must have access to history, bookmark, and browser component
//
