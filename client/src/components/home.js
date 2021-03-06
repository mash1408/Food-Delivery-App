import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import logo from "../img/logo.png";
import filter from "../img/filter.png";
import Round from "../img/Round.png";
import locator from "../img/locator.png";
import Rectangle15 from "../img/Rectangle 15.png";
import emaillogo from "../img/email-logo.png";
import fblogo from "../img/fb-logo.png";
import instalogo from "../img/insta-logo.png";
import twitterlogo from "../img/twitter-logo.png";
import Asset1 from "../img/Asset 1.png";
import Asset2 from "../img/Asset 2.png";
import Asset3 from "../img/Asset 3.png";
import Asset4 from "../img/Asset 4.png";
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
                <h3 class="font-bold text-lg">HUNGRY?</h3>
                <p class="px-8 mb-4 text-sm leading-none font-bold text-gray-400 mb-2">
                  Order your favourite home-cooked meals from amazing <br />
                  home-chefs!
                </p>

                <div class="flex items-center justify-center ">
                  <div class="flex border-2 border-black rounded">
                    <input
                      type="text"
                      class="px-4 py-2 w-80 placeholder-black"
                      placeholder="Enter your delivery location"
                    />
                    <button class="px-4 text-black font-bold bg-yellow-500 border-l hover:bg-yellow-400">
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

        <div class="flex flex-wrap">
          <div class=" w-60 sm:flex-grow h-64 bg-red-400 mt-10">
            <div class="mx-auto">
              <img
                class=" mx-auto my-0 mb-0 mx-14  "
                src={Rectangle15}
                alt="iimage"
              />
            </div>
          </div>
          <div class="w-40  sm:flex-grow h-70 bg-yellow-500 ">
            <h2 class="mb-10 mt-9 text-3xl text-white font-bold">ABOUT US</h2>
            <div class="mx-20 my-10 text-2xl text-white">
              <p>
                Away from home? Craving some home cooked nutricious meal? Don???t
                worry! We???ve got you covered. We at <br />
                Gharguthi are a bunch of <br /> home-cooks who serve comfort
                food made with love! Gharguthi provide a platform to those
                housewives and home-cooks who want to provide home-cooked meals
                made with care and in return would benefit the home-cooks to
                become financially independent by doing what they love!
                Gharguthi is a platform that caters varieties of cuisine,
                prepared with utmost hygiene a to take care of your
                <br /> hunger.
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap  ">
          <div class=" w-48 sm:flex-grow sm:px-32 h-64  mt-40">
            <div class="flex w-52 ">
              <div class="w-52">
                <img src={Asset3} alt="Asset3" />
                <p class="font-bold text-xl">Shakuntala Devi</p>
                <p class="text-lg">Maharashtra</p>
              </div>
            </div>
          </div>
          <div class="w-48 sm:flex-grow  h-64  mt-40">
            <div class="flex mt-14 ml-10 w-52">
              <div class="  w-52">
                <img src={Asset4} alt="Asset4" />
                <div>
                  <p class="font-bold text-xl">Vanadana Naik</p>
                  <p class="text-lg">Goa</p>
                </div>
              </div>
            </div>
          </div>
          <div class=" w-48 sm:flex-grow  h-64  mt-40">
            <div class=" flex ml-10 w-52 ">
              <div class="w-52 ">
                <img src={Asset1} alt="Asset1" />
                <p class="font-bold text-xl">Rukmini Patel</p>
                <p class="text-lg">Gujarat</p>
              </div>
            </div>
          </div>
          <div class=" w-48 sm:flex-grow h-64  mt-40">
            <div class="flex mt-14 ml-10 w-52">
              <div class="w-52">
                <img src={Asset2} alt="Asset2" />
                <p class="font-bold text-xl">Seema Gaus</p>
                <p class="text-lg">Karnataka</p>
              </div>
            </div>
          </div>
        </div>

        <div class="justify-center flex flex-wrap bg-yellow-500">
          <div class="flex-grow sm:flex-grow-0 sm:px-64  bg-yellow-500">
            <form action="#">
              <h2 class="mb-10 mt-12 text-3xl text-white font-bold">
                Contact Us
              </h2>
              <div class=" flex">
                <div class="w-1/2 flex items-center border-b border-yellow-200 ">
                  <input
                    class=" mr-8 appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-yellow-100"
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                    required
                  />
                </div>
                <div class="ml-10 w-1/2 flex items-center border-b border-yellow-200">
                  <input
                    class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-yellow-100"
                    type="text"
                    placeholder="Phone Number"
                    aria-label="phone"
                    required
                  />
                </div>
              </div>

              <div className=" mt-2 flex items-center border-b border-yellow-200">
                <input
                  className="appearance-none shadow-b bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-yellow-100"
                  type="text"
                  placeholder="Email"
                  aria-label="Email"
                  required
                />
              </div>
              <div className="mt-2 flex items-center border-b border-yellow-200">
                <textarea
                  class=" pb-20 appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-yellow-100"
                  type="text"
                  placeholder="Message"
                  aria-label="Message"
                  required
                ></textarea>
              </div>
              <div class="mt-4 ">
                <input
                  type="button"
                  class="w-full mb-2 rounded text-lg text-white font-semibold border-none py-1 bg-yellow-400 shadow-lg hover:bg-yellow-600"
                  value="SEND MESSAGE"
                />
              </div>
            </form>
            <div class="mt-10">
              <p class="font-bold text-lg text-white">
                <img class="inline-block mr-5 " src={emaillogo} alt="e-logo" />
                gharguthi@gmail.com
              </p>
            </div>
            <div class="mt-10">
              <p class="font-bold text-lg text-white ">
                Follow us at:
                <img
                  class="inline-block ml-5 mr-5 "
                  src={instalogo}
                  alt="e-logo"
                />
                <img class="inline-block mr-5 " src={fblogo} alt="e-logo" />
                <img
                  class="inline-block mr-5 "
                  src={twitterlogo}
                  alt="e-logo"
                />
              </p>
            </div>
            <div class="mt-5">
              <p class="text-white">
                &copy; 2021, Gharguthi.com, Inc. or its affiliates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
