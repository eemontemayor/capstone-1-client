import React, { Component } from 'react'
import MealBrowserForm from '../components/MealBrowserForm/MealBrowserForm'
import { Section } from '../components/Utils/Utils'

export default class MealBrowserPage extends Component{


    render(){
        return(
            <Section className='MealBrowserPage'>
            <h2>Explore New Meals</h2>
            <MealBrowserForm
              
            />
          </Section>
        )
    }
}