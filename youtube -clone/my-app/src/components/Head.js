//import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
//import { YOUTUBE_SEARCH_API } from '../utils/contants';
//import axios from 'axios';
const Head = () => {
    // const [searchQuery, setSearchQuery] = useState("");
    // const [suggestions,setSuggestions] = useState([]);
    // const [showSuggestions,setSuggestions] = useState(false); 

    // useEffect(() => {
    //     //API CALL
    //     console.log(searchQuery);
    //     // to make an api call after every key press
    //     // but if the diff bewteen 2 api calls is <200ms
    //     // decline the Api call and
    //  const timer =  setTimeout(()=> getSearchSugestions(),3000);
    //  return()=>{
    //     clearTimeout(timer);
    //  }; 
    // }, [searchQuery]);

    // //lets understand debouncing 
    // /**
    //  *  key -i
    //  * -reander componet
    //  * - useEffect();
    //  * -start and time -> make a api call 200ms
    //  * 
    //  * key -ip
    //  * -destroy the component(useEffect return methode)
    //  * renther the component
    //  * useEffect()
    //  * start Time => make api call after 200 ms
    //  * 
    //  * 
    //  * 
    //  * setTimeOut(200 )- automatical make an api call 
    //  * 
    //  */

    // // every time i am typeing somthing then my search query will be change
    
     // Make it funtction API Call

    //     const getSearchSugestions = async () => {
    //     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    //     const json = await data.json();
    //     console.log(json[1]);

        
    //     // try {
    //     //     const res = await axios.get(YOUTUBE_SEARCH_API + searchQuery)
    //     //     console.log(res.data);
    //     // } catch (error) {
    //     //     console.log(error);
    //     // }
    

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-8 cursor-pointer"
                    alt="menu"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcs_n6e7k-ckj8QB2gTEKTJlc1O3RbyJf9Ig&usqp=CAU" />

                <a href="/">
                    <img className="h-9 mx-2"
                        alt="youtube-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/500px-YouTube_Logo_2017.svg.png "
                    />
                </a>
            </div>

            <div className="col-span-10  px-10">
                <input
                    className="w-1/2 border border-gray-400 p-2  rounded-l-full"
                    type='text'
                    //value={searchQuery}
                   // onChange={(e) => setSearchQuery(e.target.value)}
                   // onfoucs{(e)=> setShowSuggestion(true)}
                   // onBlure{() => setShowSuggestion(false)}
                   //

                />
                <button className=" border border-gray-400 p-2 rounded-r-full bg-gray-100 ">Search</button>
            </div>
            <div className="col-span-1 ">
                <img className="h-8"
                    alt="user"
                    src="https://static.vecteezy.com/system/resources/previews/007/296/443/non_2x/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" />
            </div>
        </div>
    );
};
export default Head;
