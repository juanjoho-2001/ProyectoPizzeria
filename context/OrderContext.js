import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([null, null, null]);

    const addOrder = (order) => {
        const emptyIndex = orders.findIndex(o => o === null);
        if (emptyIndex !== -1) {
            const newOrders = [...orders];
            newOrders[emptyIndex] = order;
            setOrders(newOrders);
        } else {
            alert('No se pueden agregar más pedidos. Limpie un campo primero.');
        }
    };

    const takeOrder = (index) => {
        const newOrders = [...orders];
        newOrders[index] = null;
        setOrders(newOrders);
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder, takeOrder }}>
            {children}
        </OrderContext.Provider>
    );
};