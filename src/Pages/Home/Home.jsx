
import Sidebar from '../../Components/Header/Sidebar';
import useGetPorducts from '../../Hook/useGetPorducts';
import Products from '../../Components/Header/Products/Products';

const Home = () => {
    const [products]=useGetPorducts();
    return (
        <div className='mt-50  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6'>
            <div className='col-span-1'>
            <Sidebar></Sidebar>
            </div>
            
            <div className='col-span-5'>
            <Products products={products} ></Products>
            </div>
            
        </div>
    );
};

export default Home;