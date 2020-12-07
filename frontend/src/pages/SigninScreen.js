import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const SigninScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo, loading, error} = userSignin;
    
    const dispatch = useDispatch();

    const submitHandler= (e) =>{
        e.preventDefault(); //dont refresh
        dispatch(signin(email, password));
    };

    useEffect(()=>{
        if(userInfo)
        {
            props.history.push('/');
        }
    },[props.history, userInfo]);

    return (
        <div>
            <form class="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    { loading && <LoadingBox></LoadingBox> }
                    { error && <MessageBox variant="error">{error}</MessageBox> }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter email" required onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" required onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit">Sign In</button>
                </div>
                <div>
                    <label/>
                    <div>
                        New to F2C? {' '}
                        <Link to="/register">Register</Link>
                    </div>
                </div>
                <div>{' '}</div>
            </form>
        </div>
    );
};

export default SigninScreen;