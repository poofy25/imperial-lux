'use client'

import { useState } from "react"

import Image from "next/image"
import Link from "next/link"


import logoImg from '/public/imgs/logo.png'
import FacebookSvg from '/public/svgs/facebook.svg'
import InstagramSvg from '/public/svgs/instagram.svg'


import NavBarMenu from './NavBarMenu'


export default function NavBar () {

    const [isMenuOpen , setIsMenuOpen] = useState(false)

    return (
        <>
            <div className="w-full h-[36px] bg-background-invert text-text-invert flex justify-between items-center px-[12.5vw] box-border z-40 relative top-0">
                <Link href='tel:+353852067151' className="font-bold font-Inter text-sm">+353 85 206 7151</Link>
                <div className="flex gap-2 items-center justify-center grayscale brightness-0">
                    <Link href='#'><Image src={FacebookSvg} width='24' height='24'/></Link>
                    <Link href='#'><Image src={InstagramSvg} width='24' height='24'/></Link>
                </div>
            </div>
            <nav id='navbar'
            className={` navBar border-0 border-b border-solid border-[rgba(255,255,255,0.1)]
            flex flex-row items-center w-full h-[80px] overflow-hidden px-[12.5vw] 
            justify-between box-border sticky top-[0px] z-40 transition-all bg-background
            `}
            >
                {/* Logo */}
                <div onClick={()=>setIsMenuOpen(false)} className="relative h-full flex flex-col justify-center items-center">
                    <Link href='/' className="relative aspect-square h-[100%] flex">
                        <Image layout='fill' objectFit='contain' src={logoImg} priority={true}/>
                    </Link>
                </div>

                {/* Navbar menu */}
                <NavBarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

                {/* Hamburger button */}
                <div className="relative h-full flex flex-col justify-center items-center sm:hidden ">

                    <button onClick={()=>setIsMenuOpen(current=>!current)}
                    className="relative w-[30px] h-[22px] p-0 bg-transparent hover:bg-transparent">


                        <div className={`w-full h-[3px] absolute top-0 left-0 bg-white rounded transition-all
                        ${isMenuOpen ? "rotate-45 translate-y-[10px]" : ""}
                        `}></div>
                        <div className={`w-full h-[3px] absolute left-0 translate-y-[-50%] bg-white rounded transition-all
                        ${isMenuOpen ? "translate-x-[100px]" : ""}
                    
                        `}></div>
                        <div className={`w-full h-[3px] absolute bottom-0 left-0 bg-white rounded transition-all
                        ${isMenuOpen ? "-rotate-45 translate-y-[-9px]" : ""}
                        `}></div>
                    </button>
                </div>


                

                {/* Nav buttons */}
                <div className="hidden font-bold gap-8 text-xs font-Raleway tracking-[3px] [&_*]:py-4 sm:flex">
                    <Link href='/#hero' className='hover:text-complimentary transition-all'>HOME</Link>
                    <Link href='/#services' className='hover:text-complimentary transition-all'>SERVICES</Link>
                    <Link href='/#works' className='hover:text-complimentary transition-all'>WORKS</Link>
                    <Link href='/#contacts' className='hover:text-complimentary transition-all'>CONTACTS</Link>
                </div>

                <Link className="hidden font-bold bg-complimentary py-4 px-8 text-xs tracking-[3px] border-2 border-solid border-complimentary hover:bg-[rgba(212,176,70,0.25)] transition-all sm:flex" href='/contacts'>
                    GET QUOTE
                </Link>

            
            </nav>
        </>
    )
}