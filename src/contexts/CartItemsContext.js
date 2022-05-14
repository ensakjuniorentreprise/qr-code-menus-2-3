import {createContext, useEffect, useState} from 'react';

const CartItemsContext = createContext()

export function CartContextProvider({children}) {
    
    const [cartItems, setCartItems] = useState([]);

    const addCartItem = item => {
        if (cartItems.find(i => i.id == item.id))
            updateCartItem(item.id, item.quntity)
        else
            setCartItems(prev => [...prev, item]);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    const removeCartItem = id => {
        setCartItems(prev => prev.filter(i => i.id != id));
        if (cartItems.length <= 1) localStorage.setItem('cart', '');
        else localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    const updateCartItem = (id, quantity) => {
        if (quantity > 0) {
            setCartItems(prev => {
                const newItemList = []
                prev.forEach(item => {
                    if (item.id !== id) newItemList.push(item);
                    else {
                        item.quantity = quantity;
                        newItemList.push(item);
                    }
                });
                localStorage.setItem('cart', JSON.stringify(newItemList));
                return newItemList;
            });
        }
    }

    useEffect(() => {
        if (typeof window != 'undefined') {
            setCartItems(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);  
        }
    }, [typeof window]);
    

    return (
        <CartItemsContext.Provider value={{cartItems, addCartItem, removeCartItem, updateCartItem}} >
            {children}
        </CartItemsContext.Provider>
    )
}


export default CartItemsContext;