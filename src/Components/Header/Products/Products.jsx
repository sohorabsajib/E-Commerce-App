import React from 'react';
import ProductsCard from './ProductsCard';
import useGetProducts from '../../../Hook/useGetPorducts';

const Products = ({products}) => {



    console.log(products);
    return (
        <div className='py-10'>
            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10'>
                {
                    products?.map(product=><ProductsCard key={product.id} product={product}></ProductsCard> )
                }
            </div>
        </div>
    );
};

export default Products;