import React from "react";
import './stripe-button.styles.scss'

import StripeCheckout from "react-stripe-checkout";

const StripeCheckOutBotton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_GLa8cjxfvmNnvpXym84bPc9Q00MKciObZM';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    };

    return (
        <StripeCheckout token={onToken} stripeKey={publishableKey}
                        label='Pay Now'
                        name='Dylan E-commerce Ltd.'
                        billingAddress
                        shippingAddress
                        image='https://svgshare.com/i/CUz.svg'
                        description={`Your total is $${price}`}
                        amount={priceForStripe}
                        panelLabel='Pay Now'
        />
    )
};

export default StripeCheckOutBotton
