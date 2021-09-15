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
  const mystyle = {
    height: "100%",
    width: "100%"
  };

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
                <div class="w-80 h-96 border-yellow-500 border-2">
                    <div class="w-full h-5/6  bg-blue-500">
                       <img style={mystyle} src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                    </div>
                    <div class="w-full h-1/6  bg-green-500">
                       <div class=""></div>
                    </div>
                    
                </div>
                <div class="w-80 h-96 border-yellow-500 border-2">
                    <div class="w-full h-5/6  bg-blue-500">
                       <img style={mystyle} src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                    </div>
                    <div class="w-full h-1/6  bg-green-500">
                       <div class=""></div>
                    </div>
                    
                </div>
                <div class="w-80 h-96 border-yellow-500 border-2">
                    <div class="w-full h-5/6  bg-blue-500">
                       <img style={mystyle} src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                    </div>
                    <div class="w-full h-1/6  bg-green-500">
                       <div class=""></div>
                    </div>
                    
                </div>
                <div class="w-80 h-96 border-yellow-500 border-2">
                    <div class="w-full h-5/6  bg-blue-500">
                       <img style={mystyle} src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                    </div>
                    <div class="w-full h-1/6  bg-green-500">
                       <div class=""></div>
                    </div>
                    
                </div>
                <div class="w-80 h-96 border-yellow-500 border-2">
                    <div class="w-full h-5/6  bg-blue-500">
                       <img style={mystyle} src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                    </div>
                    <div class="w-full h-1/6  bg-green-500">
                       <div class=""></div>
                    </div>
                    
                </div>
              
            </div>
           
        );
    }
}