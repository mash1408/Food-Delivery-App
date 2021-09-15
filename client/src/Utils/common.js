// return the user data from the session storage
export const getCook = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
  }

  export const setUserType = (account) => {
    sessionStorage.setItem('account', account)
  }
  
  export const getUserType = () => {
    return sessionStorage.getItem('account');
  }

  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }
   
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }

  export const setCookDetails = (cook) => {
    sessionStorage.setItem('user', JSON.stringify(cook));
  }
   
  // set the token and user from the session storage
  export const setUserSession = (token) => {
    sessionStorage.setItem('token', token);
    //console.log(JSON.stringify(data.cook))
  }