import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios  from "axios";

const Cook = props => (
    <div class="bg-white border-2 border-yellow-500">
        <div class="">
            <div class="shadow-lg hover:shadow-xl py-4">
            <div>
                <div class="px-4 py-2">
                <h1 class="text-xl text-left font-gray-700 font-bold">{props.cook.chefName}</h1>
                <div class="flex space-x-2 mt-2">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    </span>
                    <h3 class="text-lg text-gray-600 font-semibold mb-2">{props.cook.address}</h3>
                </div>
                <Link to={'/cooks/'+props.cook._id} class="text-center font-bold text-blue-500 py-2 rounded-lg px-3 py-2 hover:text-blue-700">View Menu</Link>
                </div>
            </div>
            </div>
        </div>
    </div>
  )

export default class CookList extends Component {
    constructor(props){
        super(props);

        this.state = {cooks: []};
    }

    componentDidMount(){
        axios.get("http://localhost:3005/home/cooks")
        .then(response => {
            this.setState({cooks: response.data})
        })
        .catch((error) => {
            console.log(error);
        }) 
    }

    itemsList(){
        return this.state.cooks.map(cook=> {
            return (<Cook cook={cook} key={cook._id} className="border"/>)
        });
    }

    render(){
        return (
            <div class="container mx-auto p-12 rounded-xl">
                <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
                    { this.itemsList() }
                </div>
            </div>
        );
    }
}