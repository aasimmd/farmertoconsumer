import React, { useEffect } from 'react';
//import axios from 'axios'; and removing useState
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
    // REMOVING REACT HOOKS and using REDUX
    // //react hook : default value of products is [] | to change state use setproduct
    // const [products, setProducts] = useState([]);

    // //loading
    // const [loading, setLoading] = useState(false);

    // //errors
    // const [error, setError] = useState(false);

    //component didmount executes only ones | handler , dependencies

    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {loading, error, products} = productList;

    useEffect(()=>{
        // //ajax request
        // const fetchData = async ()=>{
        //     try
        //     {
        //         setLoading(true);
        //         const {data} = await axios.get('/api/products');
        //         setLoading(false);
        //         setProducts(data);
        //     }
        //     catch(err)
        //     {
        //         setError(err.message);
        //         setLoading(false);
        //     }
            
        // };
        // fetchData();

        dispatch(listProducts());

    }, [dispatch]);
    
    return (
        <div>

            {
                loading? 
                (<LoadingBox></LoadingBox>)
                : error ? 
                (<MessageBox variant="error">{error}</MessageBox>)
                : (

                    <div className="row center">

                        {
                            products.map((product)=>
                            
                                <Product key={product._id} product={product}></Product>

                            )
                        }

                    </div>

                )
            }

            
        </div>
    );
};

export default HomeScreen;