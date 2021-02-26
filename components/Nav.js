import Link from "next/link";
import { useCart } from "../lib/cartState";
import CartCount from "./CartCount";
import SignOut from "./signout";
import NavStyles from './styles/NavStyles';
import { useUser } from "./User";

export default function Nav() {
    //Receives current user logged in
    const user = useUser();
    //Receives the cart via context api
    const { openCart } = useCart();

    return <NavStyles>
        <Link href="/products">Products</Link>
        {user && (
            <>
                <Link href="/sell">Sell</Link>
                <Link href="/orders">Orders</Link>
                <Link href="/account">Account</Link>
                <SignOut />
                <button type="button" onClick={openCart}>My Cart
                {/* Using reduce method to count number of items in cart */}
                    <CartCount count={user.cart.reduce((tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0), 0)} />
                </button>
            </>
        )}
        {!user && (
            <>
                <Link href="/signin">Sign In</Link>
            </>
        )}

    </NavStyles>
}