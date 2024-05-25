import Image from "next/image"
import Link from "next/link"
import heroImg from '/public/imgs/hero.jpg'

export default async function HeroSection () {



    return (
        <section className="w-full h-[calc(100vh-116px)] z-10 relative flex justify-center items-center">
            <Image alt="" className="object-cover -z-10" src={heroImg} fill={true}/>
            <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.42)] -z-10"></div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-6xl font-bold mb-4 tracking-[3px]">Painting & Decoration</h1>
                <p className="mb-8 text-xl tracking-[1px]">Painting & Decoration services for your house and apartment!</p>
                <Link href='/#contacts'
                className="py-4 px-8 bg-complimentary font-bold tracking-[3px] border-2 border-solid border-complimentary
                hover:bg-[rgba(212,176,70,0.25)] transition-all
                "

                >GET A FREE QUOTE</Link>
            </div>
        </section>
    )
}