import React, { useState, useRef, useContext } from 'react'
import { ReciveMessage, SendMessage } from '../component/MessageReceive'
import Header from '../component/header';
import FormQuestion from '../component/FormQuestion';
import { AuthContext } from '../context/AuthContext';
const InputBox = () => {
    const [message, setMessage] = useState();
    const sendMessage = () => {

    }
    return (
        <div className='h-[72px] p-[10px] flex bg-slate-100 items-center'>
            <input value={message} onChange={(e) => setMessage(e.target.value)} className='rounded-lg grow border-2 p-3 w-11/12' placeholder='Type Here' />
            <div onClick={sendMessage} className='ml-2 p-3 cursor-pointer rounded-2xl bg-violet-600 text-white font-semibold text-xl'>Send</div>
        </div>
    )
}
function ChatPage() {
    const bottomRef = useRef(null);
    const { userDetails } = useContext(AuthContext)
    console.log(userDetails);
    return (
        <div className=''>
            <Header />
            <div className='my-10 max-w-7xl mx-auto  border-2 border-violet-200 rounded-lg h-[75vh]'>
                <div className='h-[89%] overflow-y-auto pb-2 px-2 bg-slate-50'>
                    <ReciveMessage data={userDetails.name} />
                    <FormQuestion />
                    <div ref={bottomRef} />
                </div>
                <InputBox />
            </div>
        </div>
    )
}

export default ChatPage