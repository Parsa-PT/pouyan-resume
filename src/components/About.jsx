import React from 'react'
import Scroll from './Scroll'
import './about.css'
import { useState } from 'react'

const About = () => {

  let [lang , setLang] = useState('En')

  const ChangeLang = ()=>{
    setLang(lang = !lang)
  }


  return (
    <div>
        <main id='about' className='backMain w-full h-64 relative  px-20 flex items-center justify-center'>
            <div className='about flex justify-center   flex-col-reverse items-center'>
              {lang  ?
                <h1 className='text-white text-lg  pt-5'>I am Pouyan jahanshahlo, 2 years of experience in back-end programming with Python and Django , I am interested in learning and doing teamwork and a member of the Reglat team.</h1>
              : <h1 className='text-white pt-5 text-center text-lg font-[Lalezar]'> پویان جهانشاهلو هستم، 2 سال سابقه برنامه نویسی بک اند با پایتون و جنگو، علاقه مند به یادگیری و انجام کار گروهی و عضوی از تیم رگلات</h1>}

              {lang ? 
                <button onClick={ChangeLang} className='btn-bg z-10   w-20 text-white px-4 py-2 rounded-md '>Fa</button>
               : <button onClick={ChangeLang} className='btn-bg z-10  w-20 text-white px-4 py-2 rounded-md '>En</button>}
            </div>

            <Scroll ScrollTitle='ABOUT' DIV='Div-2' TEXTCO='text-container-2'/>
        </main>
    </div>
  )
}

export default About
