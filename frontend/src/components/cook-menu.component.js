import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios  from "axios";

export default class CookList extends Component {
    constructor(props){
        super(props);

        this.state = {menuList: []};
    }

    render(){
        return (
            <div>
               Menu List
            </div>
        );
    }
}