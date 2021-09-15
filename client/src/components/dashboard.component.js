import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getToken, getCook } from "../Utils/common";
import { Redirect } from 'react-router';
import Navbar  from './navbar.component';
import axios  from "axios";

const MenuList = props => (
    <div class="bg-white border-2 border-yellow-500 inline-block">
        <div class="">
            <div class="shadow-lg hover:shadow-xl py-4">
            <div>
                <div class="px-4 py-2">
                <h1 class="text-xl text-left font-gray-700 font-bold">{props.item.dishName}</h1>
                <h2 class="text-xl text-left font-gray-700">Rs. {props.item.price}</h2>
                {/* <Link to={'/cooks/'+props.cook._id} class="text-center font-bold text-blue-500 py-2 rounded-lg px-3 py-2 hover:text-blue-700">View Menu</Link> */}
                </div>
            </div>
            </div>
        </div>
    </div>
  )

export default function Dashboard(props){
    const [showModal, setShowModal] = React.useState(false);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3005/home/menu/${getCook()._id}`)
        .then((response) => {
            setMenuItems(response.data)
        })
        .catch((err)=>{ console.log(err)})
    }, [])

    const getMenu = () => {
        return menuItems.map(item=> {
            return (<MenuList item={item} key={item._id} className="border"/>)
        });
    }

    if(getToken())
    return (
        <div>
            <Navbar/>
            <h1>Ghargutti</h1>

            <div className="bg-yellow-500">
                <div className="flex px-20 py-5 text-white text-left">
                    {/* <div className="">
                        <img src="data:image/jpeg;base64,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"/>
                    </div> */}
                    <div className="w-full">
                        <div className="text-4xl font-bold w-full border-b-2 my-4 py-2">{getCook().name}</div>
                        <div className="m-2"><FontAwesomeIcon icon={faMapMarker} /> {getCook().address}</div>
                        <div className="m-2"><FontAwesomeIcon icon={faPhone} /> {getCook().phone}</div>
                        <div className="m-2"><FontAwesomeIcon icon={faEnvelope} /> {getCook().email}</div>
                    </div>
                </div>
            </div>

            <div className="my-6">
                <div className="flex mx-20">
                    {getMenu()}
                </div>
                <button
                    className="bg-yellow-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Add dish
                </button>

                {showModal ? (
                    <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className=" relative w-auto my-6 mx-auto w-2/4">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-center w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-xl font-bold text-yellow-500">
                                Add Dish
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                                </span>
                            </button>       
                            </div>
                            {/*body*/}
                            <div className="border relative flex-auto w-full">
                                <form class="bg-white rounded px-8 my-6">
                                <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="dish-name">
                                    Dish Name
                                </label>
                                <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border-2 focus:border-yellow-500 focus:shadow-outline" id="dish-name" type="text" placeholder="Dish Name"/>
                                </div>
                                <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="description">
                                    Description
                                </label>
                                <textarea class="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-yellow-500 focus:shadow-outline resize-none" rows="4" id="description" placeholder="Description"></textarea>
                                </div>
                                <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="recipe">
                                    Recipe
                                </label>
                                <textarea class="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-yellow-500 focus:shadow-outline resize-none" rows="4" id="recipe" placeholder="Recipe"></textarea>
                                </div>
                                <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="price">
                                    Price
                                </label>
                                <input class="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-yellow-500 focus:shadow-outline" id="price" type="number" placeholder="Price"/>
                                </div>

                                <div className="flex items-center justify-end py-4 w-full rounded-b">
                                <button
                                    className="bg-red-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-yellow-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Save Changes
                                </button>
                                </div>
                            </form>
                            </div>
                            {/*footer*/}
                        </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
        </div>
    );
    else
    return (
        <Redirect to="/login"/>
    );

}