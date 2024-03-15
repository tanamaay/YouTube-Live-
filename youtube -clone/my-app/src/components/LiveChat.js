import React, { useEffect, useState } from 'react'
import ChatMassage from './ChatMassage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';



const LiveChat = () => {

  const[liveMessage,setLiveMessage] = useState("");
//dispatch
   const dispatch = useDispatch();
   const ChatMassages = useSelector((store) => store.chat.messages);

  // polling use in Useeffect
  useEffect(()=>{
  const i=  setInterval(()=>{
  //    Api polling
      //console.log("API Polling");

     dispatch ( 
      addMessage({
        name : generateRandomName(),
        message: makeRandomMessage(30)
      }))

    },2000);
      return () => clearInterval(i);
  },[]);

  return (
    <>
    <div className=" w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
     <div> 
      {
     
     ChatMassages.map((c,i) =>(
      // i is the indx means second parameter over here
       <ChatMassage key={i} name={c.name} massage={c.message} />
     ))
     }
      </div>
    </div>
    {/* Becuse outside means it is overflow in live chat thats why  */}
     <form className='w-full  p-2 ml-2 border border-black'
     
     onSubmit={(e)=>{
      e.preventDefault();// cancel the event
      console.log("ON Form Submit ",liveMessage);
      // Send massage for the chat sections
      dispatch(
        addMessage({
        name:"Tanamay",
        message: liveMessage, 
      }))
     }}
     
     >
     <input className=' px-2 w-96' type='text' value={liveMessage} onChange={(e)=>{
      setLiveMessage(e.target.value)
     }}/>
     
     <button  className=' className="hover:scale-90 text-xl w-[20%]'>Send</button>
   </form>
   </>
  );
};

export default LiveChat