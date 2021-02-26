import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

//Query to delete product by ID
const DELETE_PRODUCT_MUTATION = gql`
    mutation DELETE_PRODUCT_MUTATION($id: ID!){
        deleteProduct(id: $id){
            id
            name
        }
    }
`

//Clears the deleted product from client Apollo graphql cache
function update(cache, payload) {
    cache.evict(cache.identify(payload.data.deleteProduct))
}

//Component to Delete Product 
export default function DeleteProduct({ id, children }) {
    const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
        variables: { id },
        update: update
    })

    return <button type="button" disabled={loading} onClick={() => {
        if (confirm('Are you sure you want to delete this item?')) {
            deleteProduct(id).catch((err) => alert(err.message));
        }
    }}>
        {children}
    </button>
}