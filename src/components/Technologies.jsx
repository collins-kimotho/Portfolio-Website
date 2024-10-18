import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";





const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaReact className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNextjsLine  className='text-7xl'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb  className='text-7xl text-green-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiRedis className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-red-700'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiPostgresql className='text-7xl text-sky-700'/>
            </div>
        </div>

    </div>
  )
}

export default Technologies