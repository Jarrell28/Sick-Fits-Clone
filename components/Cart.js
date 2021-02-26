import styled from 'styled-components';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import { useUser } from './User';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import RemoveFromCart from './RemoveFromCart';
import { Checkout } from './Checkout';

const CartItemStyles = styled.li`
    padding: 1rem 0;
    border-bottom: 1px solid var(--lightGrey);
    display: grid;
    grid-template-columns: auto 1fr auto;

    img {
        margin-right: 10px;
    }

    h3,p {
        margin: 0;
    }
`
// Component displaying Single Cart Item that takes in a single cart item object as an argument
function CartItem({ cartItem }) {
    const product = cartItem.product;
    if (!product) return null;
    return <CartItemStyles>
        <img width="100" src={product.photo.image.publicUrlTransformed} alt={product.name} />
        <div>
            <h3>{product.name}</h3>
            <p>{
                formatMoney(product.price * cartItem.quantity)} - <em>{cartItem.quantity} &times; {formatMoney(product.price)}</em>
            </p>
        </div>
        <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>;
}

//Component showing the Cart UI
export default function Cart() {
    //Gets the current user logged in
    const me = useUser();
    //Uses methods from cartState.js to track the state of cart and toggle visibility
    const { cartOpen, closeCart, toggleCart } = useCart();

    //If no user is logged in, return null
    if (!me) return null;
    return (
        <CartStyles open={cartOpen}>
            <header>
                <Supreme>{me?.name}'s Cart</Supreme>
                <CloseButton type="button" onClick={closeCart}>X</CloseButton>
            </header>
            <ul>
                {/* Looping cart items of current user and rendering each item in a list */}
                {me.cart.map(cartItem => (<CartItem key={cartItem.id} cartItem={cartItem} />))}
            </ul>
            <footer>
                <p>{formatMoney(calcTotalPrice(me.cart))}</p>
                <Checkout />
            </footer>
        </CartStyles>
    )
}