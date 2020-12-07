import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const RegisterScreen = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userRegister = useSelector((state) => state.userRegister);
    const {userInfo, loading, error} = userRegister;
    
    const dispatch = useDispatch();

    const submitHandler= (e) =>{
        e.preventDefault(); //dont refresh
        dispatch(register(name, email, password));
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
                    <h1>Register</h1>
                </div>
                <div>
                    { loading && <LoadingBox></LoadingBox> }
                    { error && <MessageBox variant="error">{error}</MessageBox> }
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="name" id="name" placeholder="Enter name" required onChange={(e)=>setName(e.target.value)}></input>
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
                    <button className="primary" type="submit">Register</button>
                </div>
                <div>
                    <label/>
                    <div>
                        Have an existing account? {' '}
                        <Link to="/signin">Sign In</Link>
                    </div>
                </div>
                <div>{' '}</div>
            </form>
        </div>
    );
};

export default RegisterScreen;