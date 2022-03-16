import React from 'react'
import { Card } from 'primereact/card';
import {SiSpeedtest} from 'react-icons/si'
import {BsFileBarGraph} from 'react-icons/bs'
import {AiTwotoneSecurityScan} from 'react-icons/ai'
import {SiGoogleanalytics} from 'react-icons/si'


function PerformanceDriven() {  //iska inspiration "we provide awesomeness from char pixel"
  const mydata = [
    { id: '1', name: ' lorem10asdnfdjas fbsdfbasdbf asbda kajsdbkjasdjkkja kajsdfkj adsjk sdalngjbasdgbaskdbgkbab a daskbga kd 1', icons: <SiSpeedtest className='h-9 w-9'/> },
    { id: '2', name: ' lorem10asdnfdjas fbsdfbasdbf asbda kajsdbkjasdjkkja kajsdfkj adsjk sdalngjbasdgbaskdbgkbab a daskbga kd 2', icons: <SiSpeedtest className='h-9 w-9'/> },
    { id: '3', name: ' lorem10asdnfdjas fbsdfbasdbf asbda kajsdbkjasdjkkja kajsdfkj adsjk sdalngjbasdgbaskdbgkbab a daskbga kd 3', icons: <BsFileBarGraph className='h-9 w-9'/> },
    { id: '4', name: ' lorem10asdnfdjas fbsdfbasdbf asbda kajsdbkjasdjkkja kajsdfkj adsjk sdalngjbasdgbaskdbgkbab a daskbga kd 4', icons: <AiTwotoneSecurityScan className='h-9 w-9'/> },
    { id: '5', name: ' lorem10asdnfdjas fbsdfbasdbf asbda kajsdbkjasdjkkja kajsdfkj adsjk sdalngjbasdgbaskdbgkbab a daskbga kd 5', icons: <SiSpeedtest className='h-9 w-9'/> },
    { id: '6', name: ' lorem10asdnfdjas fbsdfbasdbf asbda kajsdbkjasdjkkja kajsdfkj adsjk sdalngjbasdgbaskdbgkbab a daskbga kd 6',  icons: <SiGoogleanalytics className='h-9 w-9'/>},
];
const list =mydata.map(item => (
        <div className='text-slate-100 font-medium animate-slide-top text-center flex p-5 text-xl max-w-sm' key={item.id}>
              <div>{item.icons}</div>{item.name}
        </div>
    ))
  return (
    <div className='bg-cyan-700  mt-9 mx-auto h-fit'>
    <div className='flex justify-center text-3xl text-slate-100 pb-6'>we create awesomeness</div>
    <div className ="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-5 md:gap-8">
    {list}
    </div>
    </div>
  )
}

export default PerformanceDriven