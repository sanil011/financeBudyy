import React, { useState,useRef } from 'react'
import { ReciveMessage, SendMessage } from '../component/MessageReceive'
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
    return (
        <div className=''>
            <div className='my-20 max-w-7xl mx-auto h-screen border-2 border-violet-200 rounded-lg h-[80vh]'>
                <div className='h-[90%] overflow-y-auto pb-2 px-2'>
                    <ReciveMessage data={"garv"} />
                    <SendMessage data={"garv"} />
                    <div ref={bottomRef}/>
                </div>
                <InputBox />
            </div>
        </div>
    )
}

export default ChatPage