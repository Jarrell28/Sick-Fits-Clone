import gql from "graphql-tag"
import DisplayError from '../components/ErrorMessage';
import OrderItemStyles from '../components/styles/OrderItemStyles';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Link from 'next/link';

//Query to receive all Orders
const USERS_ORDERS_QUERY = gql`
    query USERS_ORDERS_QUERY{
        allOrders {
            id
            charge
            total
            user {
                id
            }
            items {
                id
                name
                description
                price
                quantity
                photo {
                    image {
                        publicUrlTransformed
                    }
                }
            }
        }
    }
`

const OrderUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 4rem;
`

//Quick function to display number of Items purchased
function countItemsInAnOrder(order) {
    return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

//Component displaying all orders
export default function OrdersPage() {
    const { data, error, loading } = useQuery(USERS_ORDERS_QUERY);

    //Loading and Error state
    if (loading) return <p>Loading...</p>
    if (error) return <DisplayError error={error}></DisplayError>
    const { allOrders } = data;

    return (
        <div>
            <Head>
                <title>Your Orders ({allOrders.length})</title>
            </Head>
            <h2>You have {allOrders.length} orders!</h2>
            <OrderUl>
                {allOrders.map(order => (
                    <OrderItemStyles>
                        <Link href={`/order/${order.id}`}>
                            <a>
                                <div className="order-meta">
                                    <p>{countItemsInAnOrder(order)} Items</p>
                                    <p>{order.items.length} Product{order.items.length === 1 ? '' : 's'}</p>
                                    <p>{formatMoney(order.total)}</p>
                                </div>
                                <div className="images">
                                    {order.items.map(item => (
                                        <img src={item.photo?.image?.publicUrlTransformed} alt={item.name} key={item.id} />
                                    ))}
                                </div>
                            </a>
                        </Link>
                    </OrderItemStyles>
                ))}
            </OrderUl>
        </div>
    )
}