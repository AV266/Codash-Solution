
import React from 'react';
import { Card } from 'primereact/card';
import Header from './header';
import { FaGithub } from 'react-icons/fa'
import BackgroundImg from '../Images/homeBackground.jpeg'
import {BiCodeBlock} from 'react-icons/bi'
import {AiOutlineMobile} from 'react-icons/ai'
import {MdOutlineDesignServices} from 'react-icons/md'

function CodashCard() {

    const mydata = [
        { id: '1', content: <div className='p-1 text-center'>WEB DEVLOPMENT</div>, icon: <FaGithub className='h-28 sm:w-20 w-10 mx-auto ' /> },
        { id: '2', content: <div className='p-1 text-center'>MOBILE DEVLOPMENT</div> , icon: <AiOutlineMobile className='h-28 sm:w-20 w-10  mx-auto ' /> },
        { id: '3', content: <div className='p-1 text-center'>PRODUCT DESIGN</div>, icon: <MdOutlineDesignServices className='h-28 sm:w-20 w-10 mx-auto ' /> },
        { id: '4', content: <div className='p-1 text-center'>PRODU DESIGN</div>, icon: <MdOutlineDesignServices className='h-28 sm:w-20 w-10 mx-auto ' /> }
    ];

    // function myCurry (para1,fun1) => { } wanted to make a curry for botth card function and li functions
    {/*yeh function hoga jisme mydata aur item params honge*/}
    const list = mydata.map(item => (
        <Card key={item.id} header={item.icon} title={item.content} subTitle={item.content} className='lg:w-80 w-60 h-80 md:h-96 shadow-black'>
            {/* <Card className="taillwind classes here"> */}
            {item.content}
        </Card>
    ))

    return (
        <>
        <div className='flex flex-col h-96 bg-center bg-cover' style={{ background: `url(${BackgroundImg}) ` }}>
            <div   className='w-full flex flex-col items-center justify-center my-auto h-48'>
                <h1 className='sm:-mb-30 animate-slide-top font-serif text-lg sm:text-4xl text-slate-100 font-medium text-center'>
                Leading Website And Apps Devlopment Company
                </h1>
                <div className='py-6 flex flex-col items-center justify-center'>
                <p className='text-slate-100 font-medium animate-slide-top text-center text-xs'>Turn your great ideas into profitable mobile and software products with our <br/>excellent
                mobile app development and software development services</p>
                </div>

            </div>    
        </div>
        <div className="-mt-20 transition-all grid grid-cols-1 gap-4 lg:grid-cols-3 md:gap-8 md:grid-cols-2 top-48 mx-auto">
                {list}
                </div>
        </>
    )
}

export default CodashCard