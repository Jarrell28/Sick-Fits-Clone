import useForm from '../lib/useForm';
import Form from './styles/Form';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import DisplayError from './ErrorMessage'
import { ALL_PRODUCTS_QUERY } from './Products';
import Router from 'next/router';

//GraphQL query to create new product
const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION(
        #which variables are getting passed in and the type
        $name: String!
        $description: String!
        $price: Int!
        $image: Upload
    ){
        createProduct(data:{
            name: $name,
            description: $description,
            price: $price,
            status: "AVAILABLE",
            photo: {
                create: {
                    image: $image,
                    altText: $name
                }
            }
        }) {
            id
            price
            description
            name
        }
    }
`
//Component to create new product
export default function CreateProduct() {
    //Passing initial values to form inputs
    const { inputs, handleChange, resetForm, clearForm } = useForm({
        name: '',
        price: 0,
        description: '',
        image: ''
    });

    //Using mutation hook to create new product
    const [createProduct, { loading, error, data }] = useMutation(CREATE_PRODUCT_MUTATION, {
        variables: inputs,
        refetchQueries: [{ query: ALL_PRODUCTS_QUERY }] //refetchQueries updates the apollo client with the new data from mutation so no refresh is required
    })

    return (
        //using createProduct function returned by useMutation hook
        <Form onSubmit={async (e) => {
            e.preventDefault();
            const res = await createProduct();
            clearForm();
            //After creating product, redirects page to the newly created product 
            Router.push({
                pathname: `/product/${res.data.createProduct.id}`
            })
        }}>

            {/* Displays error component if create product returns with erro */}
            <DisplayError error={error} />

            {/* Using fieldset to disable hold form/display busy animation when in process of creating product */}
            <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="image">
                    Image: <input type="file" required id="image" name="image" onChange={handleChange} />
                </label>
                <label htmlFor="name">
                    Name: <input type="text" id="name" name="name" placeholder="Name" value={inputs.name} onChange={handleChange} />
                </label>
                <label htmlFor="price">
                    Price: <input type="number" id="price" name="price" placeholder="Price" value={inputs.price} onChange={handleChange} />
                </label>
                <label htmlFor="description">
                    Description: <textarea id="description" name="description" placeholder="Description" value={inputs.description} onChange={handleChange} />
                </label>

                <button type="submit">+ Add Product</button>
            </fieldset>

        </Form>
    )
}