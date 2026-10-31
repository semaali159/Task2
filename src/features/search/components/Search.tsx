import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { images } from '../../../assets/seeds'
const PAGE = 12 

const Search = () => {
    const [params, setParams] = useSearchParams()
    const query = params.get('q')  ?? 'dogs'
    const [count,setCount] = useState(PAGE)
    const result= useMemo(()=>{
        const q = query.trim().toLocaleLowerCase()
        if(!q) return []
        return images.filter((i)=> i.tag.includes(q) || q.includes(i.tag))
    },[query])
    const visible  =result.slice(0,count)
  return (
    <div className='flex h-full flex-col bg-white'>
        <div className='flex-1 overflow-y-auto px-4 pb-6 pt-4.5 md:px-10 md:pb-12 md:pt-10'>
            <div className='mx-auto w-full max-w-5xl'>
                <h1 className="mb-5.5 mt-0 font-display text-[34px] font-normal tracking-[0.2px] md:mb-8 md:text-5xl" >
                    Search
                </h1>
                <input 
                    type='search'
                    value={query}
                    onChange={(e)=>{
                        setParams({q:e.target.value}, {replace:true})
                        setCount(PAGE)
                    }}
                    placeholder='Search'
                    aria-label='Search'
                    className='block h-12.5 w-full appearance-none rounded-none border-2 border-ink bg-white px-3.5 text-xs text-ink outline-none transition duration-200 ease-smooth hover:bg-[#fafafa] focus:shadow-[0_0_0_3px_rgba(255,45,120,0.25)] md:h-14 md:text-sm'
                />
                <h2 className='mb-3 mt-5.5 text-[10px] font-black uppercase tracking-[0.6px] md:mb-4 md:mt-8 md:text-xs'>
                    All result 
                </h2>    
                {visible.length > 0 ? (
                    <ul className="m-0 grid list-none grid-cols-3 gap-1.5 p-0 sm:grid-cols-4 sm:gap-2 lg:grid-cols-6 lg:gap-3">
                        {visible.map((img)=>(
                            <li key={img.id}>
                                <button
                                    type='button'
                                    aria-label={img.alt}
                                    className='block aspect-square w-full overflow-hidden border-0 bg-[#e4e4e4] p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'
                                >
                                    <img 
                                        src={img.src}
                                        alt={img.alt}
                                        loading='lazy'
                                        className='block h-full w-full object-cover transition duration-300 ease-smooth hover:scale-[1.07] hover:brightness-105'
                                    />    
                                </button>
                            </li>
                        ))}
                    </ul>
                ):(
                    <p className='my-7 text-center text-xs text-[#666] md:text-sm'>No results.</p>
                )
            }
            {result.length > count && (
                <button
                    type='button'
                    onClick={()=> setCount((c)=> c + PAGE)}
                    className='mt-5.5 block h-12.5 w-full border-2 border-ink bg-white text-[11px] font-black uppercase tracking-[0.6px] text-ink transition duration-200 ease-smooth hover:bg-ink hover:text-white active:scale-[0.98] focus-visible:outline-[3px] focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-[rgba(255,45,120,0.45)] md:mx-auto md:mt-8 md:h-14 md:max-w-xs md:text-xs'
                >
                    See more
                </button>
            )}
            </div>
        </div>
    </div>
  )
}

export default Search