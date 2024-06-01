import Link from "next/link"
import Image from "next/image"

import CallSvg from '/public/svgs/call.svg'
import EmailSvg from '/public/svgs/email.svg'
import FacebookSvg from '/public/svgs/facebook.svg'
import InstagramSvg from '/public/svgs/instagram.svg'


import LogoImg from '/public/imgs/logo.png'

export default function Footer () {
    return (
        <footer className="pt-[2rem] w-full flex flex-col bg-background text-text-invert text-sm">
            <div className="flex flex-col items-center md:items-start md:flex-row w-full px-[12.5vw] text-text pb-16 gap-12 md:gap-32">
                <div className="flex flex-col flex-1 gap-8 items-center md:items-start">
                    <Link href='/#' className="w-fit">
                        <Image alt='icon' className="w-[150px] h-[100px] object-contain" src={LogoImg} width='420' height='320'/>
                    </Link>
                    <p className="opacity-75 text-center md:text-start">                 
                        The ImperialLux company's main activity is Repairs and Interior Design of apartments, houses, commercial spaces, home furnishing. Our specialists have extensive experience in these fields.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1 items-center md:items-start">
                    <h3 className="text-2xl font-semibold mb-2">Navigate</h3>
                    <Link href='/#' className="opacity-75 hover:opacity-100 transition-all w-fit">Home</Link>
                    <Link href='/#services' className="opacity-75 hover:opacity-100 transition-all w-fit">Services</Link>
                    <Link href='/#works' className="opacity-75 hover:opacity-100 transition-all w-fit">Works</Link> 
                    <Link href='/#contacts' className="opacity-75 hover:opacity-100 transition-all w-fit">Contacts</Link>
                </div>
                <div className="flex flex-col gap-2 flex-1 items-center md:items-start">
                    <h3 className="text-2xl font-semibold mb-2">Contacts</h3>
                    <Link href='tel:+353852067151' className="opacity-75 hover:opacity-100 transition-all w-fit font-Inter">+353 85 206 7151</Link> 
                    <Link href='mailto:vgperonalmail@gmail.com' className="opacity-75 hover:opacity-100 transition-all w-fit">vgperonalmail@gmail.com</Link>
                    <div className="flex gap-2">
                        <Link href='https://www.facebook.com/profile.php?id=61552154207088' target="_blank" className='flex justify-center items-center gap-4 font-Inter w-fit hover:text-complimentary transition-all'>
                            <Image alt='icon' src={FacebookSvg} width='24' height='24' className='hover:opacity-50 transition-all'/>
                        </Link>

                        <Link href='https://www.instagram.com/imperiallux.painting' target="_blank" className='flex justify-center items-center gap-4 font-Inter w-fit hover:text-complimentary transition-all'>
                            <Image alt='icon' src={InstagramSvg} width='24' height='24' className='hover:opacity-50 transition-all'/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-0 items-center md:items-start md:flex-row w-full px-[12.5vw] py-6 justify-between bg-black text-text">
                <div className="opacity-75 text-center md:text-start">
                IMPERIALLUX ©2024 All rights reserved | <Link href="#"> by Buza Cristian</Link>
                </div>
                <div className="flex gap-2 brightness-[500]">
                        <Link href='https://www.facebook.com/profile.php?id=61552154207088' target="_blank" className='flex justify-center items-center gap-4 font-Inter w-fit hover:text-complimentary transition-all'>
                            <Image alt='icon' src={FacebookSvg} width='24' height='24' className='hover:opacity-50 transition-all'/>
                        </Link>

                        <Link href='https://www.instagram.com/imperiallux.painting' target="_blank" className='flex justify-center items-center gap-4 font-Inter w-fit hover:text-complimentary transition-all'>
                            <Image alt='icon' src={InstagramSvg} width='24' height='24' className='hover:opacity-50 transition-all'/>
                        </Link>
                </div>
            </div>
        </footer>
    )
}