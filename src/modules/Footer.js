 import React from 'react'
 import {FaTwitterSquare} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

function Footer() {

  const mydata2F = [
    { id: '1', value: 'post 1',labelText:'Home' },
    { id: '2', value: 'post 2',labelText:"Our Work" },
    { id: '3', value: 'post 3',labelText:'Services' },
    { id: '4', value: 'post 3',labelText:'About us' },
    { id: '5', value: 'post 3',labelText:'Verticals' },
];
const list2F =mydata2F.map(item => (
    <span className="flex justify-center p-2" key={item.id} >
        {item.labelText}
    </span>
 
    ))
  return (
      <div className='w-full mt-12 bg-slate-600'>
        <div className='pt-20 flex justify-center'> <AiFillLinkedin className='w-8 h-8'/> <AiFillFacebook className='w-8 h-8'/> <FaTwitterSquare className='w-8 h-8'/>
        </div>
        <div className="pt-6 flex justify-center flex-col md:flex-row md:h-28 ">{list2F}</div>
    
    <div className="flex justify-center mt-4">© 2020 CharPixel Technologies LLP</div>
    </div> 
  )
}

export default Footer