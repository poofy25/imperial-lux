'use client'

import { useState } from "react"

import Image from "next/image"
import Link from "next/link"
import { useMessages } from "next-intl"


import logoImg from '/public/imgs/logo.png'

import NavBarMenu from './NavBarMenu'

export default function NavBar () {

    const [isMenuOpen , setIsMenuOpen] = useState(false)
    const messages = useMessages();
    const t = messages.Navbar


    return (
        <>
            <div className="w-full h-[60px] bg-primary flex justify-between items-center px-[7.5vw] box-border z-40 fixed top-0">
                <Link href='tel:0000000'>+353 043 32 412</Link>
                <Link href='/contacts'>{t['button']}</Link>
            </div>
            <nav id='navbar'
            className={` navBar
            flex flex-row items-center w-full h-[80px] overflow-hidden px-[7.5vw]
            justify-between box-border fixed top-[60px] z-40  transition-all bg-primary  bg-[linear-gradient(0deg,rgba(0,0,0,0)0%,rgba(17,17,17,1)75%)]
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
                <div className="hidden font-semibold gap-8 [&_*]:py-4 sm:flex">
                    <Link href='/works' className='hover:text-complimentary transition-all'>{t['works']}</Link>
                    {/* <Link href='/servicii'>Servicii</Link> */}
                    <Link href='/services' className='hover:text-complimentary transition-all'>{t['services']}</Link>
                    <Link href='/testimonials' className='hover:text-complimentary transition-all'>{t['testimonials']}</Link>
                    <Link href='/contacts' className='hover:text-complimentary transition-all'>{t['contacts']}</Link>
                </div>

                <Link className="hidden sm:flex" href='/contacts'>
                    {t['button']}
                </Link>

            
            </nav>
        </>
    )
}