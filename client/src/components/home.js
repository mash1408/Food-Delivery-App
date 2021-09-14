import { useEffect } from "react";

import "../App.css";


  
function Home() {
    // const dispatch = useDispatch();
  
    // useEffect(() => {
    //   dispatch(getAllPosts());
    // }, []);
  
    // const handleLogout = () => {
    //   localStorage.clear();
    //   window.location.pathname = "/signin";
    // };
    return (
        
      <div className="App">
        <div class=" grid grid-rows-5  grid-flow-col gap-4">
            <div class="flex flex-wrap bg-red-300">
                <div class=" px-64 sm:flex-grow py-64 bg-red-400"></div>
                <div class="px-64  sm:flex-grow py-64 bg-blue-400"></div>
            </div>
            <div class="flex flex-wrap bg-red-300">
                <div class=" px-48 sm:flex-grow  sm:px-32 py-64 bg-yellow-400">
                        <div class="sm:mt-16 p-16 bg-pink-400"></div>
                </div>
                <div class=" px-48 sm:flex-grow  sm:px-32 py-64 bg-yellow-400">
                        <div class="sm:mt-16 p-16 bg-pink-400"></div>
                </div>
                <div class=" px-48 sm:flex-grow  sm:px-32 py-64 bg-yellow-400">
                        <div class="sm:mt-16 p-16 bg-pink-400"></div>
                </div>
            </div>
            <div class="flex flex-wrap bg-green-300">
            <div class=" px-64 sm:flex-grow py-64 bg-red-400"></div>
                <div class="px-64  sm:flex-grow py-64 bg-blue-400"></div>
            </div>
            
           

            <div class="flex flex-wrap bg-red-300">
                <div class=" px-48 sm:flex-grow  sm:px-32 py-64 bg-yellow-400">
                        <div class="sm:mt-16 p-16 bg-pink-400"></div>
                </div>
                <div class="px-48  sm:flex-grow sm:px-32 py-64 bg-yellow-100">
                         <div class="sm:mb-16 p-16 bg-pink-400"></div>
                </div>
                <div class=" px-48 sm:flex-grow sm:px-32 py-64 bg-yellow-400">
                        <div class="sm:mt-16 p-16 bg-pink-400"></div>
                </div>
                <div class=" px-48 sm:flex-grow sm:px-32 py-64 bg-yellow-200">
                        <div class="sm:mb-16 p-16 bg-pink-400"></div>
                </div>
            </div>

            <div class="flex flex-wrap bg-green-300">
                <div class=" px-64 sm:flex-grow py-64 bg-red-400"></div>
                    <div class="px-64  sm:flex-grow py-64 bg-blue-400"></div>
            </div>

            
        </div>
      </div>
      
    );
  }
  
  export default Home;