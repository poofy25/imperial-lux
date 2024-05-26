'use client'

export default function ContactsForm () {
    return (
        <form className="flex flex-col w-full md:w-fit gap-6">
            <div className="flex flex-col relative">
                <label className="absolute left-2 top-0 translate-y-[-50%] bg-primary px-3 font-semibold">Name</label>
                <input type="text" placeholder="Your name"></input>
            </div>
            <div className="flex flex-col relative">
                <label className="absolute left-2 top-0 translate-y-[-50%] bg-primary px-3 font-semibold">Email or Phone</label>
                <input type="text" placeholder="Your email or phone number"></input>
            </div>
            <div className="flex flex-col relative">
                <label className="absolute left-2 top-0 translate-y-[-50%] bg-primary px-3 font-semibold">Details</label>
                <textarea placeholder="Details about what you need"></textarea>
            </div>
            
            <button type="submit"
            className="
            p-3 px-4 w-full md:w-[500px] bg-complimentary border-2 border-solid border-complimentary font-bold text-base tracking-[1px]
            hover:bg-[rgba(212,176,70,0.25)] transition-all
            "
            >REQUEST A QUOTE</button>
        </form>
    )
}