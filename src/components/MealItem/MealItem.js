import React, {Component} from 'react';
import ApiContext from '../../context/meals-context';

export default class MealItem extends Component{
    static contextType = ApiContext;

    

    render(){
        const name =this.props.item
        const deleteMeal= this.context.deleteMeal
        const itemNum= this.props.itemNum
        return(
            <div>
                <span>
                    
                
                    {name}
                <button onClick={()=>deleteMeal(name)}/>
                
                    
                    </span>
                </div>
        )
    }
} 