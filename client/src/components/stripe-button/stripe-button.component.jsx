import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_GLa8cjxfvmNnvpXym84bPc9Q00MKciObZM';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
            .then(response => {
                alert('Successful payment');
            })
            .catch(error => {
                console.log('Payment Error: ', error);
                alert(
                    'There was an issue with your payment! Please make sure you use the provided credit card.'
                );
            });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Dylan E-commerce Ltd.'
            billingAddress
            shippingAddress
            // image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;






















//
// import React from "react";
// import './stripe-button.styles.scss'
//
// import StripeCheckout from "react-stripe-checkout";
//
// import axios from 'axios'
//
// const StripeCheckOutBotton = ({price}) => {
//     const priceForStripe = price * 100;
//     const publishableKey = 'pk_test_GLa8cjxfvmNnvpXym84bPc9Q00MKciObZM';
//
//     const onToken = token => {
//         // console.log(token);
//         axios({
//             url: 'payment',
//             method: 'post',
//             data: {
//                 amount: priceForStripe,
//                 token: token
//             }
//         })
//             .then(response => {
//                 alert('Payment successful');
//             })
//             .catch(error => {
//                 console.log('Payment error: ', JSON.parse(error));
//                 alert(
//                     'There was an issue with your payment, please sure you use the provided credit card info.'
//                 )
//             })
//     };
//
//     return (
//         <StripeCheckout token={onToken} stripeKey={publishableKey}
//                         label='Pay Now'
//                         name='Dylan E-commerce Ltd.'
//                         billingAddress
//                         shippingAddress
//                         image='https://svgshare.com/i/CUz.svg'
//                         description={`Your total is $${price}`}
//                         amount={priceForStripe}
//                         panelLabel='Pay Now'
//         />
//     )
// };
//
// export default StripeCheckOutBotton
