import { Home, MessageCircle, Plus, Search, User, type LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';
interface Tab{
    label: string;
    Icon: LucideIcon;
    to?:string;
    primary?: boolean
}
const TABS:Tab[]=[
    {label:'Home', Icon: Home},
    {label:'Search', Icon:Search, to:'/search'},
    {label:'create', Icon:Plus, primary:true},
    {label:'Chats', Icon:MessageCircle, to:'/chats'},
    {label:'Profile', Icon:User},
]

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';


const primaryCls = `grid h-10 w-20 place-items-center rounded-full bg-brand text-white shadow-brand transition duration-200 ease-smooth hover:-translate-y-px hover:scale-[1.03] hover:brightness-105 active:scale-95 md:h-12 md:w-12 ${focusRing} `
const tabCls = (active:boolean) => 
    `grid h-11 w-11 place-items-center rounded-full bg-transparent transition duration-200 ease-smooth hover:bg-[#f3f3f3] hover:text-ink active:scale-90 ${
    active ? 'text-ink' : 'text-[#4a4a4a]'
  } ${focusRing}`;
const TabBar = () => {
  return (
    <nav
        aria-label='Primary'
        className='shrink-0 border-t border-line bg-white pb-[max(8px,env(safe-area-inset-bottom))] md:order-first md:w-[76px] md:border-r md:border-t-0 md:pb-0'
    >
        <ul className='m-0 flex list-none items-center justify-between px-[18px] pb-2.5 pt-3.5 md:flex-col md:justify-start md:gap-4 md:px-0 md:pb-0 md:pt-8'>
            {TABS.map(({label, Icon, to, primary})=>(
                <li key={label} className='flex flex-1 justify-center md:flex-none'>
                    {primary ? (
                        <button type='button' aria-label={label} className={primaryCls}>
                            <Icon size={20} strokeWidth={2.5}/>
                        </button>
                    ) : to ? (
                        <NavLink to={to} aria-label={label} className={({isActive})=>tabCls(isActive)}>
                            <Icon size={22} strokeWidth={1.6}/>
                        </NavLink>
                    ) : (
                        <button type='button' aria-label={label} className={tabCls(false)}>
                            <Icon size={22} strokeWidth={1.6}/>
                        </button>
                    )
                    }
                </li>
            ))}
        </ul>
        <span 
            aria-hidden="true"
            className='mx-auto mt-1.5 block h-[5px] w-[134px] rounded-[3px] bg-ink md:hidden '
        />
    </nav>
  )
}

export default TabBar