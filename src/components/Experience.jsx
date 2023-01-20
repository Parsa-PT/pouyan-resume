import React from 'react'
import Htmlpic from '../assets/HTML5_Badge.svg.png'
import Csspic from '../assets/CSS3_logo.svg.png'
import pythonpic from '../assets/Python-logo-notext.svg.png'
import djangopic from '../assets/django.png'
import postresqlpic from '../assets/Postgresql_elephant.svg.png'
import linuxpic from '../assets/LINUX-LOGO.png'
import redispic from '../assets/redis2.svg'
import Scroll from './Scroll'


const Experience = () => {

    const Skill = [
        {
            id : 1,
            src: Htmlpic,
            Title : 'Html',
            Style : 'shadow-[#F16528]'
        },
        {
            id : 2,
            src: Csspic,
            Title : 'Css',
            Style : 'shadow-[#2622F1]'
        },
        {
            id : 3,
            src: pythonpic,
            Title : 'Python',
            Style : 'shadow-[#F9DC5C]'
        },
        {
            id : 4,
            src: djangopic,
            Title : 'django',
            Style : 'shadow-[#14AFBB]'
        },
        {
            id : 5,
            src: postresqlpic,
            Title : 'postresql',
            Style : 'shadow-[#61DAFB]'
        },
        {
            id : 6,
            src: linuxpic,
            Title : 'Linux',
            Style : 'shadow-[#ffff] '
        },
        {
            id : 7,
            src: redispic,
            Title : 'Redis',
            Style : 'shadow-[#F04A4C]'
        },
    ]

  return (
    <div id='experience' className=' relative'>
    <div className='max-w-screen-lg w-full h-full mx-auto flex flex-col justify-center items-center relative'>
      <div className='w-full grid grid-cols-2  sm:grid-cols-3 gap-6 py-36 px-[5rem] md:px-16  text-white text-center'>
        {Skill.map((item)=>{
            return (
                <div key={item.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${item.Style}`}>
                     <img src={item.src} alt="" className='w-10 sm:w-[4rem] md:w-[5rem] mx-auto mb-4' />
                    <p>{item.Title}</p>
                </div>
            )
        })}
        
      </div>


    </div>
    <Scroll ScrollTitle='Experience' DIV='Div-3' TEXTCO='text-container-3'/>
    </div>      
  )
}

export default Experience
