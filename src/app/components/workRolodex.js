'use client';
import { useEffect, useState } from 'react';

let workTitles = [
    {name: 'playboy', genre: 'wardrobe styling', img_path: ''},
    {name: 'lil dicky', genre: 'tv and film', img_path: ''},
    {name: 'darwins playhouse', genre: 'costume design', img_path: ''},
    {name: 'hbo', genre: 'tv and film', img_path: ''},
    {name: 'fx', genre: 'tv and film', img_path: ''},
    {name: 'key art', genre: 'tv and film', img_path: ''},
    {name: 'jesse mccartney', genre: 'wardrobe styling', img_path: ''},
    {name: 'allison brooke evans', genre: 'wardrobe styling', img_path: ''},
    {name: 'lolahika', genre: 'wardrobe styling', img_path: ''},
    {name: 'jp saxe', genre: 'wardrobe styling', img_path: ''},
    {name: 'strays', genre: 'tv and film', img_path: ''},
    {name: 'assistant work', genre: 'tv and film', img_path: ''},
];
let titleHeight = 92;// This is the current size of the standard work title element

export default function WorkRolodex(){
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(()=>{
        titleHeight = document.getElementById('0').offsetHeight;

    }, [scrollPosition])


    // Track how far the user has scrolled
    const handleScroll = () => {
        const position = event.deltaY;// Might need to be replaced later since event is deprecated
        setScrollPosition(prev=>Math.min(Math.abs(prev+position), 4000));// Might have to be made scalable to the users screen later
    };
    useEffect(() => {
        document.getElementById('work-title-list').addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            //document.getElementById('work-title-list').removeEventListener('wheel', handleScroll);
        };
    }, []);    
    

    return(
        <div className='flex justify-left'>
            <p className='text-4xl  px-12'>see more of</p>
            <div id='work-title-list' className=" overflow-scroll snap-y snap-mandatory bg-green-700 h-96 ">
                {workTitles.concat(workTitles).map((currentTitle, key) =>{// Simplify later on                    
                    return(
                        <h1 key={key} id={key} className="text-6xl font-extrabold pb-9 snap-start select-none" >{currentTitle.name}</h1>
                    )
                })}
            </div>
        </div>
    )
}