'use server'

import { NextResponse } from "next/server";
import { sendMail } from "../../../service/mailService";

export async function POST(req){

    const data = await req.json()
    if (!data.name || !data.contact || !data.message) return NextResponse.json({ok:false,msg:"No name, contact or message specified"})

    const message = `New quote request from: ${data.name} \nContact: ${data.contact} \nDetails: ${data.message}`
    const response = await sendMail(
        message
    );
    // console.log(response)
    if(!response.error) return NextResponse.json({ok:true,msg:"Sent succesfuly"})
    return NextResponse.json({ok:false,msg:"A server error has accoured", error:response.error})
}