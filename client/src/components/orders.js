import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Modal from './orderDetails.js';
import axios from  "axios"
import {getToken} from "../Utils/common"

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            show: false,
            hello: true,
            date: new Date().toLocaleString()
        };
           this.showModal = this.showModal.bind(this);
           this.hideModal = this.hideModal.bind(this);
      }
      componentDidMount() {
          this.getOrders()

    }
    getOrders(){
        console.log(getToken())
        axios.get("http://localhost:3005/order/cook/orders",{
            headers: {
                'auth-token-cook':  getToken() //the token is a variable which holds the token
              }
        })
        .then(response => {
            console.log(response.data)
            this.setState({items: response.data})
        })
        .catch((error) => {
            console.log(error);
        }) 
    }
      showModal(){
        this.setState({show: true});
      }
      hideModal(){
        console.log('sd')
        this.setState({show: false});
      }
      refreshOrders(status){
        console.log('sd')
        //set items based on status
      }
    render(){
        const orders = this.state.items;
        const orderDivs = []
        for (const [index, value] of orders.entries()) {
            orderDivs.push(
                <tr>
                    <td scope="row" data-label="Account">Visa - 6076</td>
                    <td data-label="Due Date">03/01/2016</td>
                    <td data-label="Amount">$2,443</td>
                    <td data-label="Period">02/01/2016 - 02/29/2016</td>
                    <td data-label="CustomerName">02/01/2016 - 02/29/2016</td>
                </tr>
            
        )
        }
        return (
            <div class="mt-0 ">
            <div class="flex justify-center flex-wrap bg-yellow-500 to-white shadow-xl text-white">
                <div class="flex-grow border-2 border-yellow-600">All</div>
                <div class="flex-grow  border-2" onClick={()=>{this.refreshOrders("receiving")}}>Receiving</div>
                <div class="flex-grow border-2">Preparing</div>
                <div class="flex-grow  border-2">Delivered</div>
                <div class="flex-grow  border-2">Cancelled</div>
            </div>
            <div class="flex justify-center sm:justify-start">
            <div class=" px-10 mt-10 mb-6 text-yellow-500  font-bold font-mono text-xl border-4 rounded-3xl shadow-2xl border-none to-white "> MY ORDERS</div>
            </div>
            <table class="table-auto">

                <thead class="bg-gradient-to-r from-yellow-500 to-white">
                    <tr>
                    <th scope="col">Dish</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Status</th>
                    <th scope="col">CustomerName</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={this.showModal}>
                    <Modal show={this.state.show} test={this.state.hello} date={this.state.date} handleClose={this.hideModal}>
                    <p>Modal</p>
                    </Modal>
                    <td data-label="Account">Visa - 3412</td>
                    <td data-label="Due Date">04/01/2016</td>
                    <td data-label="Amount">$1,190</td>
                    <td data-label="Period">03/01/2016 - 03/31/2016</td>
                    </tr>
                    {orderDivs}
                </tbody>
                </table>
            </div>
        );
    }
} 