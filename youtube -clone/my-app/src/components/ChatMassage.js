import React from 'react'

    const ChatMassage = ({name, massage}) => {
    return (
        <div className=" flex items-center shadow-sm p-2 ">
            <img 
            className="h-8"
                alt="user"
                src="https://static.vecteezy.com/system/resources/previews/007/296/443/non_2x/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"
            />
            <span className='font-bold px-2'>{name}</span>
            <span>{massage}</span>

        </div>
    )
}

export default ChatMassage 