import { useRef,useEffect } from "react";

import "../App.css";

  
function AddDish() {
   
    return (
        
      <div className="App">
            <div class="flex flex-wrap bg-red-300">
                <div class="p-64 w-2/3 bg-blue-300"></div>
                <div class="p-64 w-1/3 bg-pink-300"></div>
            </div>
            <div class="flex flex-wrap bg-green-300">
            <div class="p-64 w-2/3 bg-blue-300"></div>
                <div class="p-64 w-1/3 bg-pink-300"></div>
            </div>
      </div>
      
    );
  }
  
  export default AddDish;