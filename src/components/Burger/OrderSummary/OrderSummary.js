import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
                              .map(igKey => {
                              return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
                              });
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.orderCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.orderContinue}>CONTINUE</Button>
        </Auxiliary>
    );
};

export default orderSummary;