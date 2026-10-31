import { ChevronLeft } from 'lucide-react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { chats, conversation, meAvatar, themAvatar } from '../../../assets/seeds'

const ChatScreen = () => {
  
    const {id} = useParams<{id:string}>()
    const chat = chats.find((c)=> c.id === id)

    if(!chat) return <Navigate to = "/chats" replace/>
  return (
    <div className="flex h-full flex-col bg-white">
        <header className="relative grid h-12 shrink-0 place-items-center border-b border-line md:h-16 md:place-items-center">
            <Link 
                to="/chats"
                aria-label="Back to chats"
                className="absolute left-2.5 top-0.5 grid h-9 w-9 -translate-y-0.5 place-items-center rounded-full bg-transparent text-ink transition duration-200 ease-smooth hover:-translate-x-0.5 hover:bg-[#f1f1f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink md:hidden "
            >
                <ChevronLeft size={26} strokeWidth={2.2}/>
                </Link> 
           <h1 className="m-0 text-[15px] font-medium md:text-lg">{chat.name}</h1>   
        </header>
        <div key={chat.id} className='flex-1 overflow-y-auto px-3.5 py-[26px] md:px-8 md:py-10'>
            <div className='mx-auto flex w-full max-w-3xl flex-col gap-[22px]'>
                {conversation.map((m,i)=>{
                    const mine = m.from === 'me'
                    const avatar = (
                        <img
                            src={mine ? meAvatar : themAvatar}
                            alt=''
                            className='h-7 w-7 shrink-0 rounded-full bg-[#ddd] object-cover md:h-9 md:w-9'
                        />    
                    )
                    return(
                        <div
                            key={m.id}
                            className={`flex items-start gap-2.5 ${mine ? 'justify-end' : 'justify-start'}`} 
                        >
                            {!mine && avatar}
                            <p 
                              style={{animationDelay: `${i * 80}ms`}}
                              className={`m-0 animate-pop rounded-[3px] bg-bubble py-3.5 pl-2.5 pr-4 text-xs leading-normal text-[#1c1c1c] motion-reduce:animate-none md:px-4 md:text-sm ${
                                mine ? 'max-w-[76%] md:max-w-[70%]' : 'ml-1 mt-0.5 max-w-[82%] md:max-w-[70%]'
                              }`}
                            >
                                {m.text}
                            </p>
                            {mine && avatar}
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
   
  )
}

export default ChatScreen