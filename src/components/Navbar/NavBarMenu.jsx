'use client'

import Link from "next/link"
import Image from 'next/image'


export default function NavBarMenu ({isMenuOpen , setIsMenuOpen}) {
    return (
        <div 
        onClick={(e)=>{if(e.target === e.currentTarget) setIsMenuOpen(false)}}
        className={`
            ${isMenuOpen ? 'top-[80px] no-doc-scroll' : 'top-[-110%]'}
            w-full h-full fixed left-0 -z-30 transition-all
            bg-[rgba(0,0,0,0.5)] 
            flex lg:hidden
        `}>

            {/* Content */}
            <div className="flex flex-col justify-start items-center w-full h-full bg-primary z-20 textureBackground">

                {/* Background Image */}
                <div className="absolute w-full h-[100vh] -z-10 left-0 top-[-80px] bg-[url(/imgs/hero1.jpg)] lg:bg-[url(/imgs/hero2.jpg)] !bg-cover !bg-center"></div>
                <div className="absolute w-full h-[80px] z-10 left-0 top-[-80px] lightNavBarBackground "></div>
                {/* <div className="absolute w-full h-[100vh] left-0 top-[-80px] bg-[rgba(0,0,0,0.25)] -z-10"></div> */}


                {/* Links */}
                <div className=" text-3xl w-full h-full font-Raleway tracking-[3px]
                flex flex-col justify-start items-center gap-6  pt-[160px] box-border
                ">   
                    <Link onClick={()=>setIsMenuOpen(false)} href='/#' className='hover:text-complimentary transition-all'>HOME</Link>
                    <Link onClick={()=>setIsMenuOpen(false)} href='/#services' className='hover:text-complimentary transition-all'>SERVICES</Link>
                    <Link onClick={()=>setIsMenuOpen(false)} href='/#works' className='hover:text-complimentary transition-all'>WORKS</Link>
                    <Link onClick={()=>setIsMenuOpen(false)} href='/#contacts' className='hover:text-complimentary transition-all'>CONTACTS</Link>
                    
                </div>

            </div>

        </div>
    )
}