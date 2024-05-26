import Link from "next/link"
import Image from "next/image"

import Services1Img from '/public/imgs/services1.jpg'
import Services2Img from '/public/imgs/services2.jpg'
import Services3Img from '/public/imgs/services3.jpg'

export default function ServicesSection () {
    return (
        <section id="services" className="flex flex-col h-fit gap-12 items-center justify-center px-[7.5vw] md:px-[12.5vw] py-24 scroll-mt-[80px]">
            <h2 className="text-4xl font-semibold tracking-[3px]">OUR SERVICES</h2>
            <div className="w-full h-[1px] bg-complimentary opacity-75"></div>
            <div className="flex flex-col gap-8 w-full items-stretch md:flex-row">
                <div className="flex flex-col flex-1 p-8 relative z-10 boxShadow">
                    <Image className="object-cover absolute top-0 left-0 -z-10" src={Services1Img} fill/>
                    <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.6)] -z-10"></div>
                    <h3 className="text-xl font-bold mb-2 text-complimentary">INTERIOR PAINTING</h3>
                    <p className="text-sm mb-12">ImperialLux brings your dream interior to life. Our expert painters use top-quality paints to create a flawless look in your home. We meticulously prepare the workspace, protecting your furniture throughout. With ImperialLux, you'll enjoy clear communication and a stress-free experience. Let us transform your space with a beautiful, lasting finish.</p>
                    <Link href="/#contacts" className="mt-auto flex text-sm justify-center items-center py-2 bg-complimentary font-semibold
                    border-2 border-solid border-complimentary tracking-[1px]
                    hover:bg-[rgba(212,176,70,0.25)] transition-all
                    ">CONTACT US</Link>
                </div>
                <div className="flex flex-col flex-1 p-8 relative z-10 boxShadow">
                    <Image className="object-cover absolute top-0 left-0 -z-10" src={Services2Img} fill/>
                    <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.6)] -z-10"></div>
                    <h3 className="text-xl font-bold mb-2 text-complimentary">EXTERIOR PAINTING</h3>
                    <p className="text-sm mb-12">Give your home a stunning makeover with ImperialLux exterior painting! Our skilled crew uses premium paints to shield your house and enhance its curb appeal. We meticulously prepare surfaces, ensuring a durable, weather-resistant finish. Expect clear communication throughout the project. Choose ImperialLux for a stress-free experience that results in a beautiful, long-lasting exterior.</p>
                    <Link href="/#contacts" className="mt-auto flex text-sm justify-center items-center py-2 bg-complimentary font-semibold
                    border-2 border-solid border-complimentary tracking-[1px]
                    hover:bg-[rgba(212,176,70,0.25)] transition-all
                    ">CONTACT US</Link>
                </div>
                <div className="flex flex-col flex-1 p-8 relative z-10 boxShadow">
                    <Image className="object-cover absolute top-0 left-0 -z-10" src={Services3Img} fill/>
                    <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.6)] -z-10"></div>
                    <h3 className="text-xl font-bold mb-2 text-complimentary">FURNITURE & DECORATION</h3>
                    <p className="text-sm mb-12">Craft your dream interior with ImperialLux furniture and décor.  Our exquisite furniture collections boast elegance and functionality, catering to every room's needs.  Curate your space further with our wide selection of decorative accents, designed to reflect your unique style.  ImperialLux offers expert consultations to guide you in creating a harmonious and luxurious living environment.</p>
                    <Link href="/#contacts" className="mt-auto flex text-sm justify-center items-center py-2 bg-complimentary font-semibold
                    border-2 border-solid border-complimentary tracking-[1px]
                    hover:bg-[rgba(212,176,70,0.25)] transition-all
                    ">CONTACT US</Link>
                </div>
                
               
            
            </div>
        </section>
    )
}