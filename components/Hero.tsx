import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {
    const [ text, count ] = useTypewriter({
        words: [
            "Yo! I'm Thuta", 
            "<Business Analyst, Project Manager />", 
            "coffeeLover.tsx"
        ],

        loop:true,
        delaySpeed:2000,  
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/313419494_1235200787330577_6790955573888250978_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z9ybjzozoaIAX9htbzs&_nc_ht=scontent-syd2-1.xx&oh=00_AfBS97Rz60AU4lOX1VePdJ5IoCgleOusOUyylmq8tVevMw&oe=640A6342" 
            alt="" 
        />

        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
                A Technical Enthusiast 
            </h2>
        </div>

        <h1 className='text-2xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'> { text } </span>  
            <Cursor cursorColor='gray'/>
        </h1>
        
        <div className='pt-5 z-20'>
            <Link href="#about">
                <button className='heroButton'>About</button>
            </Link>

            <Link href="#experience">            
                <button className='heroButton'>Experience</button>
            </Link>

            <Link href="#skills">
             <button className='heroButton'>Skills</button>
            </Link>

            <Link href="#projects">
             <button className='heroButton'>Projects</button>
            </Link>
            
        </div>
    </div>

    
  )
}

export default Hero