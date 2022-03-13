import React from 'react'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
 

 

function EmailForm() {
   const setValue = ()=>{console.log("helo")}

   const mydata = [
    { id: '1', value: 'post 1',labelText:'Name' },
    { id: '2', value: 'post 2',labelText:"Email address" },
    { id: '3', value: 'post 3',labelText:'Subject' },
];
const list =mydata.map(item => (
    <span key={item.id} className="p-float-label">
    <InputText id={item.id} value={item.value} onChange={(e) => setValue(e.target.value)} />
    <label className='pt-1' htmlFor={item.id}>{item.labelText}</label>
</span>
 
    ))

  return (
    <div className ="relative px-10 mt-20 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-5 lg:gap-8 top-10 mx-auto">
        <div className='lg:row-span-3 text-xl font-sans text-center'>Write a message<div className='text-right mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolor est a cum molestias eum dolorum, veniam blanditiis excepturi cumque!</div></div>
        {list}
        <label className='pt-1 text-lg lg:col-span-3'>Message:</label>
        <InputTextarea className='lg:col-span-3 row-span-3' autoResize />
            
    </div>
    )
}

export default EmailForm