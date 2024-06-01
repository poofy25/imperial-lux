import Link from "next/link"
import Image from "next/image"


import Works1Img from '/public/imgs/works/works1.jpg'
import Works2Img from '/public/imgs/works/works2.jpg'
import Works3Img from '/public/imgs/works/works3.jpg'
import Works4Img from '/public/imgs/works/works4.jpg'
import Works5Img from '/public/imgs/works/works5.jpg'
import Works6Img from '/public/imgs/works/works6.jpg'
import Works7Img from '/public/imgs/works/works7.jpg'
import Works8Img from '/public/imgs/works/works8.jpg'

export default function WorksSection () {
    return (
        <section id="works" className="flex flex-col min-h-[100vh] w-full gap-12 items-center px-[7.5vw] lg:px-[12.5vw] py-24 bg-background-invert scroll-mt-[80px]">
        <h2 className="text-4xl text-center font-semibold tracking-[3px] text-text-invert">OUR LATEST WORKS</h2>
        <div className="w-full h-[1px] bg-primary opacity-75"></div>
        <div className="grid grid-cols-1 gap-y-8 lg:gap-x-8 lg:gap-y-8 lg:grid-cols-2 w-full">
            <div className="flex flex-col w-full p-8 relative z-10 boxShadow aspect-[10/7]">
                <Image alt="Work image" className="object-cover absolute top-0 left-0 -z-10" src={Works1Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            </div>
            <div className="flex flex-col w-full  p-8 relative z-10 boxShadow aspect-[10/7] ">
                <Image alt="Work image" className="object-cover absolute top-0 left-0 -z-10" src={Works2Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            </div>
            <div className="flex flex-col w-full  p-8 relative z-10 boxShadow aspect-[10/7]">
                <Image alt="Work image" className="object-cover absolute top-0 left-0 -z-10" src={Works3Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            
            </div>
            <div className="flex flex-col w-full  p-8 relative z-10 boxShadow aspect-[10/7]">
                <Image alt="Work image" className="object-cover absolute top-0 left-0 -z-10" src={Works4Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            </div>
            <div className="flex flex-col w-full  p-8 relative z-10 boxShadow aspect-[10/7]">
                <Image alt="Work image" className="object-cover absolute top-0 left-0 -z-10" src={Works5Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            
            </div>
            <div className="flex flex-col w-full  p-8 relative z-10 boxShadow aspect-[10/7]">
                <Image alt="Work image" className="object-cover absolute top-0 left-0 -z-10" src={Works6Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            </div>
            <div className="flex flex-col w-full  p-8 relative z-10 boxShadow aspect-[10/7]">
                <Image alt="Work image" className="object-cover absolute top-0 left-0 -z-10" src={Works7Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            
            </div>
            <div className="flex flex-col w-full  p-8 relative z-10 boxShadow aspect-[10/7]">
                <Image alt="Work image" className="object-cover absolute top-0 left-0 -z-10" src={Works8Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            </div>
            
        
        </div>
    </section>
    )
}