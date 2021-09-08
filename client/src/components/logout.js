import React from 'react';
import { getUser, removeUserSession } from '../Utils/common';
 
function logout(props) {
  // handle click event of logout button
  console.log('sda')  
  removeUserSession();
   //window.history.push('/login');

}
 
export default logout;