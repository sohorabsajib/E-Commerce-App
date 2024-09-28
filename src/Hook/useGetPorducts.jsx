import React, { useEffect, useState } from 'react';

const useGetPorducts = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    return [products];
};

export default useGetPorducts;