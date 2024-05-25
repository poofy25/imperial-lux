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
        <section id="works" className="flex flex-col min-h-[100vh] w-full gap-12 items-center px-[12.5vw] py-16 bg-background-invert">
        <h2 className="text-4xl font-semibold tracking-[3px] text-text-invert">OUR LATEST WORKS</h2>
        <div className="w-full h-[1px] bg-primary opacity-75"></div>
        <div className="flex gap-8 gap-y-16 w-full items-stretch flex-wrap">
            <div className="flex flex-col w-[calc(50%-16px)] p-8 relative z-10 boxShadow aspect-[10/7]">
                <Image className="object-cover absolute top-0 left-0 -z-10" src={Works1Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            
            </div>
            <div className="flex flex-col w-[calc(50%-16px)] p-8 relative z-10 boxShadow">
                <Image className="object-cover absolute top-0 left-0 -z-10" src={Works2Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            </div>
            <div className="flex flex-col w-[calc(50%-16px)] p-8 relative z-10 boxShadow aspect-[10/7]">
                <Image className="object-cover absolute top-0 left-0 -z-10" src={Works3Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            
            </div>
            <div className="flex flex-col w-[calc(50%-16px)] p-8 relative z-10 boxShadow">
                <Image className="object-cover absolute top-0 left-0 -z-10" src={Works4Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            </div>
            <div className="flex flex-col w-[calc(50%-16px)] p-8 relative z-10 boxShadow aspect-[10/7]">
                <Image className="object-cover absolute top-0 left-0 -z-10" src={Works5Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            
            </div>
            <div className="flex flex-col w-[calc(50%-16px)] p-8 relative z-10 boxShadow">
                <Image className="object-cover absolute top-0 left-0 -z-10" src={Works6Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            </div>
            <div className="flex flex-col w-[calc(50%-16px)] p-8 relative z-10 boxShadow aspect-[10/7]">
                <Image className="object-cover absolute top-0 left-0 -z-10" src={Works7Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            
            </div>
            <div className="flex flex-col w-[calc(50%-16px)] p-8 relative z-10 boxShadow">
                <Image className="object-cover absolute top-0 left-0 -z-10" src={Works8Img} fill/>
                <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.25)] -z-10"></div>
            </div>
            
        
        </div>
    </section>
    )
}