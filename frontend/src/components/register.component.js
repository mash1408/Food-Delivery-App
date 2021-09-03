import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios  from "axios";

export default class Register extends Component {
    render(){
        return(
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
                    <input class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="full-name" type="text" placeholder="Full Name"/>
                </div>

                <div className="flex gap-3">
                    <div class="mb-2">
                        <label class="block text-gray-700 mb-1 text-left text-sm" for="address">
                            Address
                        </label>
                        <input class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="address" type="text" placeholder="Address"/>
                    </div>

                    <div class="mb-2">
                        <label class="block text-gray-700 mb-1 text-left text-sm" for="phone">
                            Phone number
                        </label>
                        <input class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="phone" type="text" placeholder="Phone Number"/>
                    </div>
                </div>

                <div class="flex gap-3">
                    <div class="mb-4">
                        <label class="block text-gray-700 mb-1 text-left text-sm" for="password">
                            Password
                        </label>
                        <input class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700  text-sm font-semibold  leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="password" type="password" placeholder="Password"/>
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 mb-1 text-left text-sm" for="confirm-password">
                            Confirm Password
                        </label>
                        <input class="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700  text-sm font-semibold  leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500" id="confirm-password" type="password" placeholder="Confirm Password"/>
                    </div>
                </div>

                <div class="mb-2">
                    <button type="submit" class="w-full mb-2 rounded text-lg text-white font-semibold border py-1 bg-yellow-500 shadow-lg hover:bg-yellow-600">Sign Up</button>
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
}