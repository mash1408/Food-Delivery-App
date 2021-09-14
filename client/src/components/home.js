import { useRef,useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import "../App.css";

mapboxgl.accessToken ='pk.eyJ1IjoibWFzaDE0MDgiLCJhIjoiY2tybWlxcmgxMWthYjJ3dGoxMXRlZ3YyZSJ9.Ler-SblIXMyAWcVNeyyAcg'
  
function Home() {
    const mapContainerRef = useRef(null);
    // const dispatch = useDispatch();
  
    // useEffect(() => {
    //   dispatch(getAllPosts());
    // }, []);
  
    // const handleLogout = () => {
    //   localStorage.clear();
    //   window.location.pathname = "/signin";
    // };
    useEffect(() => {
       
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          // See style options here: https://docs.mapbox.com/api/maps/#styles
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-104.9876, 39.7405],
          zoom: 12.5,
          viewPort: {
            width: 100,
            height: 100,
            zoom: 4
        }
        });// add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    
        // clean up on unmount
        return () => map.remove();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        
      <div className="App">
        <div class=" grid grid-rows-5  grid-flow-col gap-4">
            <div class="flex flex-wrap bg-red-300">
                <div class=" px-64 sm:flex-grow py-64 bg-red-400"></div>
                <div class="w-11/12 sm:w-1/2" ref={mapContainerRef}>
                </div>
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

            <div class="justify-center flex flex-wrap bg-yellow-500">
                <div class="flex-grow sm:flex-grow-0 sm:px-64 py-64 bg-red-400"></div>
                   
            </div>

            
        </div>
      </div>
      
    );
  }
  
  export default Home;