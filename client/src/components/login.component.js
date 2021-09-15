import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession, setUserType, setCookDetails} from '../Utils/common';
import {Link, useHistory} from 'react-router-dom';
import Navbar from './navbar.component';
 
function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [isCook, setIsCook] = useState(true);
  const history = useHistory();

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);

    if(isCook){
        axios.post('http://localhost:3005/cook/login', { email: username.value, password: password.value }).then(response => {
        setLoading(false);
        setUserSession(response.data.token);
        setUserType('cook');
        setCookDetails(response.data.cook)
        //console.log(response.data)
        history.push('/dashboard');
      }).catch(error => {
        setLoading(false);
      //   if (error.response.status === 401) setError(error.response.data.message);
      //   else setError("Something went wrong. Please try again later.");
      });
    }
    else{
      axios.post('http://localhost:3005/customer/login', { email: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data);
      setUserType('customer');
      console.log(response.data)
      history.push('/');
      }).catch(error => {
        setLoading(false);
      //   if (error.response.status === 401) setError(error.response.data.message);
      //   else setError("Something went wrong. Please try again later.");
      });
    }
    
  }
 
  const setAccount = (e) => {
      if(e.target.value == "cook")
        setIsCook(true);
      else
        setIsCook(false);
  }

  return (   
    <div>
      <Navbar/>
  <div className="flex justify-center">
  <div className="border-4 border-yellow-500 px-8 py-4 rounded-lg w-96 mt-10">
  <div>
      <p className="text-2xl font-semibold mt-2">Sign In</p>
  </div>
  <form className="my-2">

    <div>
        <label className="block text-gray-700 mb-1 text-left text-sm" >
            Login as
        </label>
        <button type="button" value="cook" className={ isCook ? "border-2 border-yellow-500 bg-yellow-500 rounded-l px-3 py-1" : "border-2 border-yellow-500 bg-white rounded-l px-3 py-1"} onClick={setAccount}>Cook</button>
        <button type="button" value="customer" className={ isCook ? "border-2 border-yellow-500 bg-white rounded-r px-3 py-1" : "border-2 border-yellow-500 bg-yellow-500 rounded-r px-3 py-1"} onClick={setAccount}>Customer</button>
    </div>
  
  <div className="mb-2">
      <label className="block text-gray-700 mb-1 text-left text-sm" htmlFor="phone">
          Email
      </label>
      <input  className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" type="text" {...username} autoComplete="new-password" />
  </div>

  <div className="mb-4">
      <label className="block text-gray-700 mb-1 text-left text-sm" htmlFor="password">
          Passoword
      </label>
      <input className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700  text-sm font-semibold  leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" type="password" {...password} autoComplete="new-password" />
     
  </div>

  <div className="mb-2">
      <input type="button" className="w-full mb-2 rounded text-lg text-white font-semibold border py-1 bg-yellow-500 shadow-lg hover:bg-yellow-600" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
      
  </div>
  </form>

  <div className="mt-6">   
      <div className="h-4 border-b-2 border-yellow-500">
          <span className="bg-white px-2 text-xs">
              New to Ghatgutti?
          </span>
      </div>

      <div className="mt-4">
      <Link to="/register" className="block w-full mb-2 rounded text-lg text-white font-semibold border py-1 px-2 bg-yellow-500 shadow-lg hover:bg-yellow-600">Create an account</Link>
      </div>
  </div>
  
  </div>
</div>
</div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;