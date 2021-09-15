import React from 'react';
import { getUser, removeUserSession } from '../Utils/common';
import {Redirect} from 'react-router-dom';
 
function Logout(props) {
  // handle click event of logout button
  console.log('sda')  
  removeUserSession();
  return(
    <Redirect to="/login"/>
  );
}
 
export default Logout;