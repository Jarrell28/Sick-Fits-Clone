
import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import { CURRENT_USER_QUERY } from './User';

//Query that takes product ID and adds the id to cart table
const ADD_TO_CART_MUTATION = gql`
    mutation ADD_TO_CART_MUTATION($id: ID!) {
        addToCart(productId: $id){
            id
        }
    }
`

//Add to cart button that takes in product id as argument
export default function AddToCart({ id }) {
    const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
        variables: { id: id },
        refetchQueries: [{ query: CURRENT_USER_QUERY }] //refetchQueries updates the apollo client with the new data from mutation so no refresh is required
    })

    return (
        //using loading variable to display indication the application is adding to cart
        <button disabled={loading} type="button" onClick={addToCart}>Add{loading && 'ing'} To Cart!</button>
    )
}