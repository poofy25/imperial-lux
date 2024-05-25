import Image from 'next/image'
import Link from 'next/link'

import CallSvg from '/public/svgs/call.svg'
import EmailSvg from '/public/svgs/email.svg'
import FacebookSvg from '/public/svgs/facebook.svg'
import InstagramSvg from '/public/svgs/instagram.svg'

import ContactsForm from './ContactsForm'


export default function ContactsSection () {
    return (
        <section id='contacts' className="flex flex-col min-h-[100vh] gap-12 items-center px-[12.5vw] py-16">
        <h2 className="text-4xl font-semibold tracking-[3px]">CONTACT US AND GET A FREE QUOTE</h2>
        <div className="w-full h-[1px] bg-complimentary opacity-75"></div>
        
        <div className='w-full flex justify-between'>
            <div className='w-[30%] flex flex-col gap-4 tracking-[1px]'>
                
            <Link href='#' className='flex justify-center items-center gap-4 font-Inter w-fit hover:text-complimentary transition-all'>
                <Image src={CallSvg} width='32' height='32' className='hover:opacity-50 transition-all'/> +353 043 32 412
            </Link>
            <Link href='#' className='flex justify-center items-center gap-4 font-Inter w-fit hover:text-complimentary transition-all'>
                <Image src={EmailSvg} width='32' height='32' className='hover:opacity-50 transition-all'/> email@gmail.com
            </Link>

            <Link href='#' className='flex justify-center items-center gap-4 font-Inter w-fit hover:text-complimentary transition-all'>
                <Image src={FacebookSvg} width='32' height='32' className='hover:opacity-50 transition-all'/> @ImperialLux 
            </Link>

            <Link href='#' className='flex justify-center items-center gap-4 font-Inter w-fit hover:text-complimentary transition-all'>
                <Image src={InstagramSvg} width='32' height='32' className='hover:opacity-50 transition-all'/> @imperiallux.painting
            </Link>



            </div>
            <ContactsForm/>
        </div>
           
        
    </section>
    )
}