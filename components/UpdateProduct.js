import { useMutation, useQuery } from "@apollo/client"
import gql from "graphql-tag"
import useForm from "../lib/useForm"
import DisplayError from "./ErrorMessage"
import Form from "./styles/Form"


const SINGLE_PRODUCT_QUERY = gql`
    query SINGLE_PRODUCT_QUERY($id: ID!){
        Product(where: {
            id:$id
        }) {
            id
            name
            description
            price
        }
    }
`

const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION(
        $id: ID!
        $name: String
        $description: String
        $price: Int   
    ) {
        updateProduct(
            id: $id,
            data: {
                name: $name
                description: $description
                price: $price
            }
        ) {
            id
            name
            description
            price
        }
    }
`
//Component to update product
export default function UpdateProduct({ id }) {
    //Queries the current product to populate forms product information
    const { data, error, loading } = useQuery(
        SINGLE_PRODUCT_QUERY, {
        variables: { id: id }
    })

    //Method to update product 
    const [updateProduct, { data: updateData, error: updateError, loading: updateLoading }] = useMutation(UPDATE_PRODUCT_MUTATION)

    //Populates the inputs with product information
    const { inputs, handleChange, resetForm, clearForm } = useForm(data?.Product);
    if (loading) return <p>loading...</p>

    return (
        // Handling form submission
        <Form onSubmit={async (e) => {
            e.preventDefault();
            const res = await updateProduct({
                variables: {
                    id: id,
                    name: inputs.name,
                    description: inputs.description,
                    price: inputs.price

                }
            });
        }}>

            <DisplayError error={error || updateError} />
            {/* Displays loading animation when performing update operation */}
            <fieldset disabled={updateLoading} aria-busy={updateLoading}>
                {/* <label htmlFor="image">
                    Image: <input type="file" required id="image" name="image" onChange={handleChange} />
                </label> */}
                <label htmlFor="name">
                    Name: <input type="text" id="name" name="name" placeholder="Name" value={inputs.name} onChange={handleChange} />
                </label>
                <label htmlFor="price">
                    Price: <input type="number" id="price" name="price" placeholder="Price" value={inputs.price} onChange={handleChange} />
                </label>
                <label htmlFor="description">
                    Description: <textarea id="description" name="description" placeholder="Description" value={inputs.description} onChange={handleChange} />
                </label>

                <button type="submit">Update Product</button>
            </fieldset>

        </Form>
    )
}