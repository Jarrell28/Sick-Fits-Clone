import gql from "graphql-tag"
import DisplayError from '../../components/ErrorMessage';
import OrderStyles from '../../components/styles/OrderStyles';
import Head from 'next/head';
import formatMoney from '../../lib/formatMoney';
import { useQuery } from "@apollo/client";

//Query to receive single order by order id
const SINGLE_ORDER_QUERY = gql`
    query SINGLE_ORDER_QUERY($id: ID!){
        order: Order(where: { id: $id}) {
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
//Component displaying a single order on the page
export default function SingleOrderPage({ query }) {
    const { data, error, loading } = useQuery(SINGLE_ORDER_QUERY, {
        variables: { id: query.id }
    })

    //Loading and Error state
    if (loading) return <p>Loading...</p>
    if (error) return <DisplayError error={error}></DisplayError>
    const { order } = data;

    return (
        <div>
            <OrderStyles>
                <Head>
                    <title>Sick Fits - {order.id}</title>
                </Head>
                <p>
                    <span>Order Id:</span>
                    <span>{order.id}</span>
                </p>
                <p>
                    <span>Charge:</span>
                    <span>{order.charge}</span>
                </p>
                <p>
                    <span>Order Total:</span>
                    <span>{formatMoney(order.total)}</span>
                </p>
                <p>
                    <span>Item Count:</span>
                    <span>{order.items.length}</span>
                </p>
                <p>
                    <span>Order Id:</span>
                    <span>{order.id}</span>
                </p>
                <div className="items">
                    {order.items.map(item => (
                        <div className="order-item" key={item.id}>
                            <img src={item.photo.image.publicUrlTransformed} alt={item.title} />
                            <div className="item-details">
                                <h2>{item.name}</h2>
                                <p>Qty: {item.quantity}</p>
                                <p>Each: {formatMoney(item.price)}</p>
                                <p>Sub Total: {formatMoney(item.price * item.quantity)}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </OrderStyles>
        </div>
    )
}