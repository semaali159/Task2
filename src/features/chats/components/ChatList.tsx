import React from 'react'
import { NavLink, Outlet, useMatch } from 'react-router-dom'
import { chats } from '../../../assets/seeds'

const ChatList = () => {
    const hasChat = useMatch('/chats/:id') !== null
    
  return (
    <div className="flex h-full bg-white">
    <aside
      className={`${
        hasChat ? "hidden" : "flex"
      } w-full shrink-0 flex-col border-line md:flex md:w-85 md:border-r lg:w-100`}
    >
            <header className="grid h-12 shrink-0 place-items-center border-b border-line md:h-16 md:place-items-start md:px-6 md:pt-5">
                <h1 className="m-0 text-[15px] font-medium md:text-xl">Chats</h1>
            </header>
            <ul>
                {chats.map((c)=>(
                    <li key={c.id}>
                        <NavLink 
                            to={`/chats/${c.id}`}
                            className={({isActive})=>
                            `flex min-h-24.5 w-full items-center gap-3.5 border-b border-line py-4 pl-2 pr-5 text-left text-inherit no-underline transition-all duration-200 ease-smooth hover:bg-[#f8f8f8] hover:pl-3 active:bg-[#f0f0f0] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink ${
                    isActive ? 'md:bg-[#f3f3f3]' : 'bg-white'
                  }`}
                  >
                    <img
                        src={c.avatar}
                        alt= ""
                        loading='lazy'
                        className='h-16.5 w-16.5 shrink-0 rounded-full bg-[#ddd] object-cover'
                        />
                        <span className="flex min-w-0 flex-col gap-1.5">
                        <span className="text-xs font-bold md:text-sm">{c.name}</span>
                            <span className="line-clamp-2 text-xs leading-[1.45] text-[#1c1c1c] md:text-[13px]">
                                {c.preview}
                            </span>
                        </span>
                  </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
        <section className={`${hasChat ? 'flex' : 'hidden'} min-w-0 flex-1 flex-col md:flex`}>
            <Outlet/>
        </section>
    </div>
  )
}
export function EmptyChat() {
  return (
    <div className="grid h-full place-items-center text-sm text-[#777]">Select a conversation</div>
  );
}

export default ChatList