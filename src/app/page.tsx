"use client"
import Features from "@/components/features-1";
import TextHoverEffectDemo from "@/components/text-hover-effect-demo";
import Image from "next/image";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import gif from "./../../public/3260_R1NUIEpPUyAxMzQtMjc.jpg"
import Link from 'next/link'
import { LoginForm } from '../components/login.tsx'

export default function Home() {
  const formClass = "absolute h-[17%] w-[25%] inset-0 m-auto flex items-center z-10 justify-center top-[-5%] scale-100 transition-transform rounded-3xl duration-300 "
  const [login, setLogin] = useState(false)
  return (
    <>
  <LoginForm className={(login)? formClass : "scale-0 h-[17%] w-[25%] inset-0 m-auto transition-transform top-[-10%] absolute duration-300 "} />
  <div onClick={()=>{if(login){setLogin(false)}}} className={(!login)?"h-screen w-screen flex flex-col items-center bg-white" : "h-screen w-screen flex flex-col items-center bg-white brightness-50 "}>
      <div className="dash flex flex-row bg-white h-[11%] w-screen drop-shadow-[0_5px_20px_rgba(0,0,0,0.01)]">
        <div className="flex w-[12%] mr-[8%] h-full items-center justify-center">
          <h5 className="text-black pl-6 text-2xl font-bold">CodeCollab</h5>
        </div>
        <div className="flex w-[48%] ml-auto mr-auto items-center justify-center">
          <h5 className="mr-[5%] font-bold text-zinc-600 cursor-pointer">Solutions</h5>
          <h5 className="mr-[5%] font-bold text-zinc-600 cursor-pointer">Stack</h5>
          <h5 className="mr-[5%] font-bold text-zinc-600 cursor-pointer">About</h5>
        </div>
        <div className="flex w-[15%] mr-[4%] ml-[1%] items-center justify-around">
          <Button
            variant="secondary"
            className="bg-white border-1 border-zinc-800 cursor-pointer rounded-[2rem]"
            onClick={()=>{setLogin(true)}}
          >
            <p className="text-zinc-600 text-[135%] font-bold tracking-tighter hover:text-zinc-800">
              Get Started 
            </p>
          </Button>
        </div>
      </div>
      <div className="main flex h-[89%] w-screen flex-row items-center justify-center">
        <div className="w-[45%] h-full flex items-start justify-start pt-[3%] pt-[6%]  pl-[3%] flex-col">
          <h4 className="text-black drop-shadow-[0_2.8px_2.8px_rgba(0,0,0,0.3)] font-serif text-[3.7rem] leading-16 tracking-tight font-extrabold mb-[3%] text-black w-full">Code together, ship faster.</h4>
          <h6 className="text-zinc-600 font-mono text-[0.8rem] font-bold text-black mb-[5%]">
            Our app lets developers work together in real-time, sharing ideas and building projects as a team, no matter where they are.<br/> Every line of code is a conversation, every edit a spark of innovation.<br/> With seamless integration and instant updates, your team moves faster, smarter, and more connected than ever turning individual effort into collective brilliance.
          </h6>
          <Button className="bg-green-500 w-[25%] font-extrabold text-md" onClick={()=>{setLogin(true)}}>
            Get Started
          </Button>
        </div>
        <div className="w-[55%] h-full flex items-center justify-center">
          <Image src={gif} width={600}></Image>
        </div>
      </div>
    </div>
    </>
    );
}
