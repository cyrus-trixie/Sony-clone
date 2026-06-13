"use client";
import { useState } from 'react';
import Nav from '../../components/nav';
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function Home(){

const cards= [
    {
        
        product:'Sony Alpha 7 IV',
        title:'Camera',
        description:'Capture your moments with precision and clarity.',
        image:'../assets/camera.jpeg',
    },
      {
        product:'TV',
        title:'Cinema is Coming Home',
        description:'Experience stunning visuals and immersive sound.',
        image:'../assets/livingRoom.jpeg',
    },  {
     
        product:'Movie',
           title:'A New era of Evil',
        description:'Experience the thrill of a new era of evil with our latest movie release.',
        image:'../assets/movie.jpeg',
    }
]

    return(
        <div>
            <Nav />
         <div className="w-full h-screen bg-blue-800">

 <div className="flex flex-col items-center  h-full gap-12">
    
    <div className="flex gap-8 mt-2 ">
       {cards.map((card) => (
         <div className='w-[750px] h-[420px] rounded-md bg-gray-200  ' style={{ backgroundImage: `url(${card.image})`,
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
         }}>
         </div>
       ))}
    </div>

<div className='flex justify-center -translate-y-6 items-center gap-4'>
    <ChevronLeft size={60} color="white" className="hover:cursor-pointer" />
<div className='flex flex-col gap-1 text-black'>
{cards.map((card)=>{
    return(
        <div key={card.product} >
<h1>{card.product}</h1>
<p>{card.title}</p>
<p>{card.description}</p>
        </div>
    )
})}
</div>
    <ChevronRight size={60} color="white" className="hover:cursor-pointer" />
</div>

 </div>

         </div>
        </div>
    );
}