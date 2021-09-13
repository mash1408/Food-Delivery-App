import React, {Component} from "react";
import {Link} from 'react-router-dom';
import logout from "./logout"
import Modal from './orderDetails.js';


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            hello: "hello",
            date: new Date().toLocaleString()
        };
           this.showModal = this.showModal.bind(this);
           this.hideModal = this.hideModal.bind(this);
      }
      showModal(){
        this.setState({show: true});
      }
      hideModal(){
        console.log('sd')
        this.setState({show: false});
      }
    render(){
        return (
            <div class="mt-0 ">
            <div class="flex justify-center flex-wrap bg-yellow-500 to-white shadow-xl text-white">
                <div class="flex-grow border-2 border-yellow-600">All</div>
                <div class="flex-grow  border-2">Receiving</div>
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
                    <th scope="col">Account</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Period</th>
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
                    <tr>
                    <td scope="row" data-label="Account">Visa - 6076</td>
                    <td data-label="Due Date">03/01/2016</td>
                    <td data-label="Amount">$2,443</td>
                    <td data-label="Period">02/01/2016 - 02/29/2016</td>
                    </tr>
                    <tr>
                    <td scope="row" data-label="Account">Corporate AMEX</td>
                    <td data-label="Due Date">03/01/2016</td>
                    <td data-label="Amount">$1,181</td>
                    <td data-label="Period">02/01/2016 - 02/29/2016</td>
                    </tr>
                    <tr>
                    <td scope="row" data-label="Acount">Visa - 3412</td>
                    <td data-label="Due Date">02/01/2016</td>
                    <td data-label="Amount">$842</td>
                    <td data-label="Period">01/01/2016 - 01/31/2016</td>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    }
} 