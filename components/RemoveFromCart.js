import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import styled from "styled-components"

const BigButton = styled.button`
    font-size: 3rem;
    background: none;
    border: 0;
    &:hover {
        color: var(--red);
        cursor: pointer;
    }
`
//Query to remove the cart item by ID
const REMOVE_FROM_CART_MUTATION = gql`
    mutation REMOVE_FROM_CART_MUTATION($id: ID!){
        deleteCartItem(id: $id){
            id
        }
    }
`

//function used to take the item out of the apollo client cache when removing the item from cart in order to instantly update the UI
//This is useful as it does not make the request to the server like refetchQueries does to update the UI
function update(cache, payload) {
    cache.evict(cache.identify(payload.data.deleteCartItem));
}

//Remove Items From cart Component, taking in the ID of the cart item as the argument
export default function RemoveFromCart({ id }) {
    const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
        variables: { id },
        update
    })

    return (
        <BigButton disabled={loading} onClick={removeFromCart} type="button" title="Remove This Item from Cart">&times;</BigButton>
    )
}