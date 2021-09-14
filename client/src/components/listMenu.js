import React, { Component } from 'react';
import axios from "axios";
import load from "../Rainbow.gif"
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

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: [],
            items: [],
            loading: true
        };
       
    }
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }
    itemsList(){
        return this.state.items.map(currentitem => {
            return <Item item={currentitem} key={currentitem._id}/>
        });
    }

    componentDidMount() {
        axios.get("http://localhost:3005/home/menu")
        .then(response => {
            console.log(response.data)
            this.setState({items: response.data})
        })
        .catch((error) => {
            console.log(error);
        }) 
        fetch('http://localhost:3005/home/dish-all')
        .then((res) => res.json())
        .then((data) => {
             var base64Flag = 'data:image/jpeg;base64,';
            var temp=[]
            this.state.loading= false
            data.forEach(element => {
                var imageStr = this.arrayBufferToBase64(element.img.data.data);
                temp.push(base64Flag + imageStr)
            });

            this.setState({
                img: temp
            })
        })

    }
    render() {
         const img = this.state.img;
         const dishes = []
         const mystyle = {
            height: "100%",
            width: "100%"
          };
         for (const [index, value] of img.entries()) {
            dishes.push(
            <div
            key={index}
            className="w-80 h-96 border-yellow-500 border-2"
            >
                <div
                className=" w-full h-5/6  bg-blue-500"
                >
                        <img
                            src={value}
                            style={mystyle}
                            alt='Helpful alt text'
                        />
                </div>
                        <div class="w-full h-1/6  bg-green-500">
                                    <div class=""></div>
                        </div>
            </div>
                )
        }
        const loading= this.state.loading
        return (
            <div>
                <img src={load} style={{display: this.state.loading?'block': 'none' }}></img>
            <div className="flex flex-wrap gap-10 justify-center" >
            
            {dishes}
           
          </div>
          
          </div>
          

         )
    }





}


export default Menu; 