import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

const ProductScreen = (props) => {
    
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state)=> state.productDetails);
    const {loading, error, product} = productDetails;

    const [qty, setQty] = useState(1);

    useEffect(()=>{
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };

    return (

        <div>

            {
                loading? 
                (<LoadingBox></LoadingBox>)
                : error ? 
                (<MessageBox variant="error">{error}</MessageBox>)
                : (

                    <div className="row top">

                        
                        <div className="col-2">
                            <img className="large card" src={product.image} alt={product.name}/>
                        </div>

                        
                        <div className="col-1">
                            <ul>
                                <li>
                                    <h1>{product.name}</h1>
                                </li>
                                <li>
                                    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                                </li>
                                <li>
                                    Price : ₹{product.price}/kg
                                </li>
                                <li>
                                    Description :
                                    <p>{product.description}</p>
                                </li>
                            </ul>
                        </div>

                        
                        <div className="col-1">

                            <div className="card card-body">
                                <ul>
                                
                                    <li>
                                        <div className="row">
                                            <div>Price</div>
                                            <div class="price">₹{product.price}/kg</div>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="row">
                                            <div>Status</div>
                                            <div> 
                                                {
                                                product.countInStock>0 ?
                                                (<span className="success">In Stock</span>)
                                                :(<span className="stockerr">Unavailable</span>)
                                                }
                                            </div>
                                        </div>
                                    </li>

                                    {
                                        product.countInStock > 0 && (
                                            <>
                                                <li>
                                                    <div className="row">
                                                        <div>QTY</div>
                                                        <div>
                                                            <select value={qty} onChange={e=>setQty(e.target.value)}>
                                                                {
                                                                    [...Array(product.countInStock).keys()].map(x=>(
                                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <button onClick={addToCartHandler} className="primary block">Add to cart</button>
                                                </li>
                                            </>
                                        )
                                    }

                                    

                                </ul>
                            </div>
                        
                        </div>

                    </div>
                )
            }
            
        </div>
    );
};

export default ProductScreen;