import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img 
            initial = {{ x:-200, opacity:0 }}
            transition = {{ duration:1.2 }}
            whileInView = {{ x:0, opacity: 1 }}
            viewport = {{ once:true }}
            src='https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/313419494_1235200787330577_6790955573888250978_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z9ybjzozoaIAX9htbzs&_nc_ht=scontent-syd2-1.xx&oh=00_AfBS97Rz60AU4lOX1VePdJ5IoCgleOusOUyylmq8tVevMw&oe=640A6342'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[300px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-3xl font-semibold'>Here is a little background</h4>
        </div>
        
    </div>
  )
}

export default About