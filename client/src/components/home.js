import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import logo from "../img/logo.png";
import filter from "../img/filter.png";
import Round from "../img/Round.png";
import locator from "../img/locator.png";
import "../App.css";
import Navbar from "./navbar.component";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFzaDE0MDgiLCJhIjoiY2tybWlxcmgxMWthYjJ3dGoxMXRlZ3YyZSJ9.Ler-SblIXMyAWcVNeyyAcg";

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
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-104.9876, 39.7405],
      zoom: 12.5,
      viewPort: {
        width: 100,
        height: 100,
        zoom: 4,
      },
    }); // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="App">
      <Navbar />
      <div class=" grid grid-rows-5  grid-flow-col gap-4">
        <div class="h-screen flex flex-wrap ">
          <div class=" sm:flex-grow">
            <div class="mr-10 text-right">
              <button class="mt-10">
                <a class="w-4 px-5 py-2 mr-4 font-bold" href="#">
                  LOG IN
                </a>
              </button>
              <button class="mt-10">
                <a
                  class="w-4 px-5 py-2 font-bold bg-yellow-500 rounded"
                  href="#"
                >
                  SIGN UP
                </a>
              </button>
              <div class="mx-auto">
                <img
                  class="mx-auto my-8 mb-0 mx-14 w-96"
                  src={logo}
                  alt="logo"
                />
              </div>

              <div class="text-center">
                <h3 class="font-bold">HUNGRY?</h3>
                <p class="px-8 mb-4 text-sm leading-none">
                  Order your favourite home-cooked meals from amazing
                  home-chefs!
                </p>

                <div class="flex items-center justify-center ">
                  <div class="flex border-2 border-black rounded">
                    <input
                      type="text"
                      class="px-4 py-2 w-80 placeholder-black"
                      placeholder="Enter your delivery location"
                    />
                    <button class="px-4 text-white bg-yellow-500 border-l ">
                      Find Food
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-11/12 sm:w-1/2 " ref={mapContainerRef}></div>
        </div>

        <div class="flex flex-wrap ">
          <div class=" w-48 sm:flex-grow  sm:px-32 h-64 ">
            <div class=" mt-40 w-48">
              <div class="mx-auto">
                <img
                  class="mx-auto my-8 mb-0 mx-14 w-96 p-5"
                  src={locator}
                  alt="logo"
                />
              </div>
              <h4 class="font-bold text-lg">Map System Locator</h4>
              <p class="items-center">
                Locate the nearby home-cooks for delicious food!
              </p>
            </div>
          </div>
          <div class=" w-48 sm:flex-grow  sm:px-32 h-64 ">
            <div class=" mt-40 w-48">
              <div class="mx-auto">
                <img
                  class="mx-auto my-8 mb-0 mx-14 w-96 p-5"
                  src={filter}
                  alt="logo"
                />
              </div>
              <h4 class="font-bold text-lg">Filter Your Options</h4>
              <p class="items-center">
                Choose from a variety of veg/non-veg multicuisine dishes!
              </p>
            </div>
          </div>
          <div class=" w-48 sm:flex-grow  sm:px-32 h-64 ">
            <div class=" mt-40 w-52">
              <div class="mx-auto">
                <img
                  class="mx-auto my-8 mb-0 mx-14 w-96 p-5"
                  src={Round}
                  alt="logo"
                />
              </div>
              <h4 class="font-bold text-lg">Lightening-Fast Delivery</h4>
              <p class="items-center">
                Experience superfast delivery straight from home kitchens!
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap bg-green-300">
          <div class=" w-64 sm:flex-grow h-64 bg-red-400"></div>
          <div class="w-64  sm:flex-grow h-64 bg-blue-400"></div>
        </div>

        <div class="flex flex-wrap bg-red-300">
          <div class=" w-48 sm:flex-grow  sm:px-32 h-64 bg-yellow-400">
            <div class="sm:mt-16 p-16 bg-pink-400"></div>
          </div>
          <div class="w-48  sm:flex-grow sm:px-32 h-64 bg-yellow-100">
            <div class="sm:mb-16 p-16 bg-pink-400"></div>
          </div>
          <div class=" w-48 sm:flex-grow sm:px-32 h-64 bg-yellow-400">
            <div class="sm:mt-16 p-16 bg-pink-400"></div>
          </div>
          <div class=" w-48 sm:flex-grow sm:px-32 h-64 bg-yellow-200">
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
