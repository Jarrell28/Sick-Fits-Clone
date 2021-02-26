import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

//Using Context API to make Cart state available throughout application
const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

//function to establish provider and helper methods
function CartStateProvider({ children }) {

    //Using hooks to track open state of cart
    const [cartOpen, setCartOpen] = useState(false);

    function toggleCart() {
        setCartOpen(!cartOpen);
    }

    function closeCart() {
        setCartOpen(false);
    }

    function openCart() {
        setCartOpen(true);
    }

    return <LocalStateProvider value={{ cartOpen, setCartOpen, toggleCart, closeCart, openCart }}>{children}</LocalStateProvider>
}


//custom hook for accessing cart
//Used in components to allow access to cart state methods
function useCart() {
    const all = useContext(LocalStateContext);
    return all;
}

export { CartStateProvider, useCart };