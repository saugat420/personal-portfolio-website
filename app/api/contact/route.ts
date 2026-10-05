import { NextResponse } from "next/server";

const formSubmitEndpoint="https://formsubmit.co/ajax/saugatraina01@gmail.com";
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value:unknown,maxLength:number){
  return String(value??"").trim().slice(0,maxLength);
}

export async function POST(request:Request){
  try{
    const siteOrigin=new URL(request.url).origin;
    const body=await request.json();
    const name=text(body.name,120);
    const email=text(body.email,254);
    const challenge=text(body.challenge,3000);
    if(name.length<2||!emailPattern.test(email)||challenge.length<10)return NextResponse.json({error:"Please complete all required fields."},{status:400});

    // Bots commonly fill hidden fields. Return success without forwarding spam.
    if(text(body.companyWebsite,200))return NextResponse.json({ok:true});

    const submission={
      "Full Name":name,
      "Business Name":text(body.business,160)||"Not provided",
      email,
      "Phone / WhatsApp":text(body.phone,80)||"Not provided",
      Website:text(body.website,500)||"Not provided",
      "Service Needed":text(body.service,120)||"Not sure yet",
      "Biggest Marketing Challenge":challenge,
      "3–6 Month Goal":text(body.goal,3000)||"Not provided",
      _replyto:email,
      _subject:`New marketing consultation request from ${name}`,
      _template:"table",
    };

    const response=await fetch(formSubmitEndpoint,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Origin:siteOrigin,
        Referer:`${siteOrigin}/contact`,
      },
      body:JSON.stringify(submission),
      cache:"no-store",
    });

    const result=await response.json().catch(()=>null) as {success?:boolean|string}|null;
    const delivered=result?.success===true||result?.success==="true";
    if(!response.ok||!delivered)return NextResponse.json({error:"The message could not be delivered."},{status:502});
    return NextResponse.json({ok:true});
  }catch{return NextResponse.json({error:"The message could not be delivered."},{status:500})}
}
