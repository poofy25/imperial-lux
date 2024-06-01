'use client'
import { useState } from "react"

export default function ContactsForm () {

    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [message, setMessage] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setSuccess(null)

        const fetchResponse = await fetch('/api/email' , {
            method:"POST",
            body: JSON.stringify({
                name:name,
                contact:contact,
                message:message
            })
        })
        const response = await fetchResponse.json()
        console.log(response)

        setLoading(false)
        if(response.ok){
            setSuccess(true)
            setName('')
            setContact('')
            setMessage('')
        } 
        if(!response.ok) setError(true)
        


    }


    return (
        <form  onSubmit={handleSubmit} className="flex flex-col w-full md:w-fit gap-6">
            <div className="flex flex-col relative">
                <label className="absolute left-2 top-0 translate-y-[-50%] bg-primary px-3 font-semibold">Name</label>
                <input required onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Your name"></input>
            </div>
            <div className="flex flex-col relative">
                <label className="absolute left-2 top-0 translate-y-[-50%] bg-primary px-3 font-semibold">Email or Phone</label>
                <input required onChange={(e)=>setContact(e.target.value)} value={contact} type="text" placeholder="Your email or phone number"></input>
            </div>
            <div className="flex flex-col relative">
                <label className="absolute left-2 top-0 translate-y-[-50%] bg-primary px-3 font-semibold">Details</label>
                <textarea required onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Details about what you need"></textarea>
            </div>
            
            <button disabled={loading} type="submit"
            className="
            p-3 px-4 w-full md:w-[500px] bg-complimentary border-2 border-solid border-complimentary font-bold text-base tracking-[1px]
            hover:bg-[rgba(212,176,70,0.25)] transition-all disabled:opacity-50
            "
            >{loading ? "SENDING REQUEST..." : 'REQUEST A QUOTE'}</button>

            {error && <div className='erorrBox'>There was an error while sending the request!</div>}
            {success && <div className='sucessBox'>The request has been sent and we will contact you shortly!</div>}
        </form>
    )
}