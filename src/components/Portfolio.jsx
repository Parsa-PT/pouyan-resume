import React from 'react'
import fristpic from '../assets/book.png'
import midpic from '../assets/Api-Formaloo.png'
import latspic from '../assets/Screen Shot 1401-10-29 at 21.36.35.png'
import Scroll from './Scroll'

const Portfolio = () => {

const Portfolio = () => {

  const project = [
    {
      id: 1,
      title : 'BookRun',
      url : fristpic,
      address : 'https://github.com/Pouyanjh/BookRun',
    },
    {
      id: 2,
      title : 'Digital product',
      url : midpic,
      address : 'https://github.com/Pouyanjh/digita_product1'
    },
    {
      id: 3,
      title : 'Tech-finder',
      url : latspic,
      address : 'https://github.com/Pouyanjh/TechFinder',
      liveMode: 'https://pouyandev1.pythonanywhere.com'
    },
  ]
  return (
    <div id='portfolio' className=' relative'>
      <div className='grid grid-cols-1 px-20 py-20 gap-10 sm:grid-cols-2 md:grid-cols-3'>
        

          {project.map((item)=>{
            return(
              <div className='w-full overflow-hidden rounded-lg  gap-4 flex flex-col items-center bg-[#2d0c658f]'>
                  <img className=' hover:scale-105 duration-150' src={item.url} alt="mypic" />
                  <p className='text-white'>{item.title}</p>
                   <div className='lg:flex lg:gap-4 px-3'>
                  <a target={'_blank'} rel="noreferrer" className='btn-bg w-[10rem] mb-3 text-white px-4 py-2 rounded-md flex  justify-center' href={item.address}>GitHub </a>
                  <a target={'_blank'}  rel="noreferrer" className='btn-bg w-[10rem] mb-3 text-white px-4 py-2 rounded-md flex  justify-center' href={item.liveMode}>Live </a>
                  </div>
              </div>
            )
          })}

        
      </div>

      <Scroll ScrollTitle='Portfolio' DIV='Div-5' TEXTCO='text-container-5'/>
    </div>
  )
}

export default Portfolio
