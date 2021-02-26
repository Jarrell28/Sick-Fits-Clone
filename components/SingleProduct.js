//Component to render the Single Product

import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import DisplayError from './ErrorMessage';
import Head from 'next/head';
import styled from 'styled-components';

//Single Product Styled Component
const ProductStyles = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    max-width: var(--maxWidth);
    align-items: top;
    grid-gap: 2rem;
    justify-content: center;

    img {
        width: 100%;
        object-fit: contain;
    }
`

//Query to receive the single product using the id from the URL query
const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id : ID!){
        Product(where: { id: $id}) {
            name
            price
            description
            id
            photo {
                image {
                    publicUrlTransformed
                }
                altText
            }
        }
    }

`

//We pull the id from product/[id].js and pass the id to the graph ql quer
export default function SingleProduct({ id }) {
    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
        variables: {
            id: id
        }
    })

    if (loading) return <p>loading...</p>
    if (error) return <DisplayError error={error} />

    return (
        <ProductStyles>
            {/* Next.JS Head component allows you to create custom html Head attributes */}
            <Head>
                <title>Sick Fits | {data.Product.name}</title>
            </Head>
            <img src={data.Product.photo.image.publicUrlTransformed} alt={data.Product.photo.altText} />
            <div className="details">
                <h2>{data.Product.name}</h2>
                <p>{data.Product.description}</p>
            </div>
        </ProductStyles>
    )
}