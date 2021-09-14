import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios  from "axios";

const Item = props => (
    <div>
        <tr>
            <td>{props.item._id}</td>
            <td>{props.item.dishName}</td>
            <td>{props.item.description}</td>
            <td>{props.item.price}</td>
            <td>{props.item.recipe}</td>
            <td>{props.item.cookid}</td>
        </tr>
    </div>
  )


export default class MenuList extends Component {
    constructor(props){
        super(props);

        this.state = {items: []};
    }

    componentDidMount(){
        axios.get("http://localhost:3005/home/menu")
        .then(response => {
            this.setState({items: response.data})
        })
        .catch((error) => {
            console.log(error);
        }) 
    }

    itemsList(){
        return this.state.items.map(currentitem => {
            return <Item item={currentitem} key={currentitem._id}/>
        });
    }

    render(){
        return (
              <div class="flex flex-wrap gap-10 justify-center">
                <div class=" border-yellow-500 border-2">
                    <div class="px-40 py-32  bg-blue-500"></div>
                    <div class="px-40 py-10  bg-green-500"></div>
                </div>
                <div class=" border-yellow-500 border-2">
                    <div class="px-40 py-32  bg-blue-500"></div>
                    <div class="px-40 py-10  bg-green-500"></div>
                </div>
                <div class=" border-yellow-500 border-2">
                    <div class="px-40 py-32  bg-blue-500"></div>
                    <div class="px-40 py-10  bg-green-500"></div>
                </div>
                <div class=" border-yellow-500 border-2">
                    <div class="px-40 py-32  bg-blue-500"></div>
                    <div class="px-40 py-10  bg-green-500"></div>
                </div>

                <div class=" border-yellow-500 border-2">
                    <div class="px-40 py-32  bg-blue-500"></div>
                    <div class="px-40 py-10  bg-green-500"></div>
                </div>
                <div class=" border-yellow-500 border-2">
                    <div class="px-40 py-32  bg-blue-500"></div>
                </div>
            </div>
            // { this.itemsList() }  
        );
    }
}