import styled from "styled-components";
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import SickButton from './styles/SickButton';
import { useState } from "react";
import nProgress from "nprogress";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useCart } from "../lib/cartState";
import { CURRENT_USER_QUERY } from "./User";

const CheckoutFormStyles = styled.form`
    box-shadow: 0 1px 2px 2px rgba(0,0,0,0.4);
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 5px;
    padding: 1rem;
    display: grid;
    grid-gap: 1rem;
`;

//Query to pass token to backend stripe funcitonality
const CREATE_ORDER_MUTATION = gql`
    mutation CREATE_ORDER_MUTATION($token: String!) {
        checkout(token: $token){
            id
            charge
            total
            items {
                id
                name
            }
        }
    }
`

//Using Stripe library to perform live transactions
//Loading stripe functionality
const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

//Checkout Form
function CheckoutForm() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    //Loading stripe method
    const stripe = useStripe();
    //stripe api card elements
    const elements = useElements();
    //Using query to pass token
    const [checkout, { error: graphQLError }] = useMutation(CREATE_ORDER_MUTATION, {
        refetchQueries: [{ query: CURRENT_USER_QUERY }]
    });

    const router = useRouter();
    const { closeCart } = useCart();

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);

        //Indicate page loading animation
        nProgress.start();

        //Creating stripe payment method, will return error or success token
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
        console.log(paymentMethod)

        if (error) {
            setError(error);
            nProgress.done();
            return;
        }

        //Passing token to backend stripe functionality
        const order = await checkout({
            variables: {
                token: paymentMethod.id
            }
        })

        //Redirecting page to order complete
        router.push({
            pathname: '/order/[id]',
            query: { id: order.data.checkout.id }
        });

        //Loading completed, ending transition animation
        closeCart();
        setLoading(false);
        nProgress.done();
    }


    return (
        <CheckoutFormStyles onSubmit={handleSubmit}>
            {error && <p>{error.message}</p>}
            {graphQLError && <p>{graphQLError.message}</p>}
            {/* Stripe Card form */}
            <CardElement></CardElement>
            <SickButton>Checkout Now</SickButton>
        </CheckoutFormStyles>

    )
}

//Component containing stripe provider wrapper
//Have it separately in order for Checkout Form to use useStripe() method
function Checkout() {
    return (
        <Elements stripe={stripeLib}>
            <CheckoutForm />
        </Elements>
    )
}

export { Checkout };