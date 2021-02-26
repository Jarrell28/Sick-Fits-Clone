import { useQuery } from "@apollo/client";
import gql from "graphql-tag"
import styled from "styled-components";
import { perPage } from "../config";
import Product from "./Product";

//skip and first variables are used for pagination
//skips a number of products that matches the page
//first is the number of products to display on the page
export const ALL_PRODUCTS_QUERY = gql`
    query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int){
        allProducts(first: $first, skip: $skip) {
            id
            name
            price
            description
            photo {
            id
            image {
                publicUrlTransformed
            }
            }
        }
    }
`;

const ProductsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
`
//Component that displays number of products per page
//Receives the page number via url query argument
export default function Products({ page }) {
    const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
        variables: {
            skip: page * perPage - perPage,
            first: perPage
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            <ProductsList>
                {data?.allProducts.map(product => <Product product={product} key={product.id}></Product>)}
            </ProductsList>
        </div>
    )
}
