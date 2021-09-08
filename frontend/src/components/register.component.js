import React, {Component,useState } from "react";
import {Link} from 'react-router-dom';
import axios  from "axios";

function Register(props) {
    const [loading, setLoading] = useState(false);
    const name =useFormInput('');
    const email =useFormInput('');
    const phone =useFormInput('');
    const password = useFormInput('');
    const address = useFormInput('');
    const account = useFormInput('');
    const confirmPassword = useFormInput('');
    const [error, setError] = useState(null);
    const [selectedAccount, setSelectedAccount] = useState('cook');

    const handleRegister = () => {    
    const request={
        "name": name.value,
        "email": email.value,
        "phone": phone.value,
        "address": address.value,
        "password": password.value,
    }
    setError(null);
    setLoading(true);
    if(selectedAccount == "cook"){
        axios.post('http://localhost:3005/cook/register', request).then(response => {
        setLoading(false);
        console.log(response)
        
        }).catch(error => {
        setLoading(false);
            console.log(error)
        });
    }
    else{
        axios.post('http://localhost:3005/customer/register', request).then(response => {
        setLoading(false);
        console.log(response)
        
        }).catch(error => {
        setLoading(false);
            console.log(error)
        });
    }
    
  }

  const handleAccountChange = (e) => {
      console.log(e.target.value)
      setSelectedAccount(e.target.value)
  }
 
  return ( 
    <div className="flex justify-center">
    <div className="border-4 border-yellow-500 px-8 py-4 rounded-lg w-auto">
    <div>
        <p className="text-2xl font-semibold mt-2">Sign Up</p>
    </div>
    <form className="my-2">

    <div className="mb-2">
        <label className="block text-gray-700 mb-1 text-left text-sm" for="full-name">
            Full Name
        </label>
        <input {...name}  className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="full-name" type="text" placeholder="Full Name" required/>
    </div>

    <div className="flex gap-3">
        <div className="mb-2">
            <label className="block text-gray-700 mb-1 text-left text-sm" for="email" >
                Email
            </label>
            <input {...email} className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="email" type="email" placeholder="Email" required/>
        </div>

        <div className="mb-2">
            <label className="block text-gray-700 mb-1 text-left text-sm" for="phone">
                Phone
            </label>
            <input {...phone} className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="phone" type="text" placeholder="Phone Number" required/>
        </div>
    </div>

    <div className="mb-2">
        <label className="block text-gray-700 mb-1 text-left text-sm" for="address">
            Address
        </label>
        <input {...address}  className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="address" type="text" placeholder="Address" required/>
    </div>

    <div className="flex gap-3">
        <div className="mb-6">
            <label className="block text-gray-700 mb-1 text-left text-sm" for="password">
                Password
            </label>
            <input {...password} className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700  text-sm font-semibold  leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="password" type="password" placeholder="Password" required/>
        </div>

        <div className="mb-2">
            <label className="block text-gray-700 mb-1 text-left text-sm" for="confirm-password">
                Confirm Password
            </label>
            <input {...confirmPassword} className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700  text-sm font-semibold  leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="confirm-password" type="password" placeholder="Confirm Password" required/>
        </div>
    </div>

    <div className="mb-6">
        <label className="block text-gray-700 mb-1 text-left text-sm" for="full-name">
        Register as
        </label>
        <div className="flex">
            <label className="inline-flex items-center">
            <input type="radio" className="form-radio" name="account" value="cook" checked={selectedAccount === 'cook'} onClick={handleAccountChange}/>
            <span className="ml-1">Cook</span>
            </label>
            <label className="inline-flex items-center ml-3">
            <input type="radio" className="form-radio" name="account" value="customer" checked={selectedAccount === 'customer'} onClick={handleAccountChange}/>
            <span className="ml-1">Customer</span>
            </label>
        </div>
    </div>

    <div className="mb-2">
    <input type="submit" className="w-full mb-2 rounded text-lg text-white font-semibold border py-1 bg-yellow-500 shadow-lg hover:bg-yellow-600" value={loading ? 'Loading...' : 'Register'} onClick={handleRegister} disabled={loading} /><br />
    </div>
    </form>

    <div className="mt-6">   
        <div className="h-4 border-b-2 border-yellow-500">
            <span className="bg-white px-2 text-xs">
                Already have an account?
            </span>
        </div>

        <div className="mt-4">
        <Link to="/login" className="block w-full mb-2 rounded text-lg text-white font-semibold border py-1 px-2 bg-yellow-500 shadow-lg hover:bg-yellow-600">Sign In Now</Link>
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