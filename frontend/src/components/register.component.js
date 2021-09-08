import React, {Component,useState } from "react";
import {Link} from 'react-router-dom';
import axios  from "axios";

function Register(props) {
    const [loading, setLoading] = useState(false);
    const chefName =useFormInput('');
    const address =useFormInput('');
    const age =useFormInput('');
    const password = useFormInput('');
    const confirmPassword = useFormInput('');
    const [error, setError] = useState(null);

    const handleRegister = () => {    
    const request={
        "chefName": chefName.value,
        "address": address.value,
        "age": age.value,
        "email": "shjashdja@hf.com",
        "password": password.value
    }
    console.log(request)
    setError(null);
    setLoading(true);
    axios.post('http://localhost:3005/cook/register', request).then(response => {
      setLoading(false);
      console.log(response)
      
    }).catch(error => {
      setLoading(false);
        console.log(error)
    });
  }
 
  return ( 
    <div class="flex justify-center">
    <div class="border-4 border-yellow-500 px-8 py-4 rounded-lg w-auto mt-10">
    <div>
        <p class="text-2xl font-semibold mt-2">Sign Up</p>
    </div>
    <form class="my-2">

    <div class="mb-2">
        <label class="block text-gray-700 mb-1 text-left text-sm" for="full-name">
            Full Name
        </label>
        <input {...chefName}  class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="full-name" type="text" placeholder="Full Name"/>
    </div>

    <div className="flex gap-3">
        <div class="mb-2">
            <label class="block text-gray-700 mb-1 text-left text-sm" for="address">
                Address
            </label>
            <input {...address} class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="address" type="text" placeholder="Address"/>
        </div>

        <div class="mb-2">
            <label class="block text-gray-700 mb-1 text-left text-sm" for="phone">
                Age
            </label>
            <input {...age} class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="phone" type="text" placeholder="Phone Number"/>
        </div>
    </div>

    <div class="flex gap-3">
        <div class="mb-4">
            <label class="block text-gray-700 mb-1 text-left text-sm" for="password">
                Password
            </label>
            <input {...password} class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700  text-sm font-semibold  leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="password" type="password" placeholder="Password"/>
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 mb-1 text-left text-sm" for="confirm-password">
                Confirm Password
            </label>
            <input {...confirmPassword} class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700  text-sm font-semibold  leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="confirm-password" type="password" placeholder="Confirm Password"/>
        </div>
    </div>

    <div class="mb-2">
    <input type="button" class="w-full mb-2 rounded text-lg text-white font-semibold border py-1 bg-yellow-500 shadow-lg hover:bg-yellow-600"value={loading ? 'Loading...' : 'Register'} onClick={handleRegister} disabled={loading} /><br />
    </div>
    </form>

    <div className="mt-6">   
        <div className="h-4 border-b-2 border-yellow-500">
            <span className="bg-white px-2 text-xs">
                Already have an account?
            </span>
        </div>

        <div className="mt-4">
        <Link to="/login" class="block w-full mb-2 rounded text-lg text-white font-semibold border py-1 px-2 bg-yellow-500 shadow-lg hover:bg-yellow-600">Sign In Now</Link>
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
 
export default Register;