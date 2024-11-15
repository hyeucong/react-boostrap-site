import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    increaseQuantity: () => { },
    decreaseQuantity: () => { },
    clearCart: () => { },
});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        let existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        const newCart = cart.filter(item => item.id !== itemId);
        setCart(newCart);
    };

    const increaseQuantity = (itemId) => {
        setCart(cart.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (itemId) => {
        setCart(cart.map(item =>
            item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        ));
    };


    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
