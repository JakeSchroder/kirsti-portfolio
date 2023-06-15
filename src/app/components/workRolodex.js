'use client';
import { useEffect, useState, useRef } from 'react';

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

export default function WorkRolodex(){
    const firstElement = useRef(null);
    const lastElement = useRef(null);
    const workTitleList = useRef(null);

    useEffect(()=>{// Page starting state
        console.log(firstElement.current.getBoundingClientRect().y, firstElement.current.getBoundingClientRect().y)
        workTitleList.current.scrollTop = firstElement.current.getBoundingClientRect().y;
    })

    const trackScrollPosition = () => {
        const scrollWorkTitleList = workTitleList.current;
        const scrollPosition = scrollWorkTitleList.scrollTop;
        let firstElementPosition = firstElement.current.getBoundingClientRect().y;
        let lastElementPosition = lastElement.current.getBoundingClientRect().y;

        console.log(firstElementPosition, lastElementPosition, scrollPosition)
        if(scrollPosition >= lastElementPosition){// Scroll to the top when reaching the bottom
            scrollWorkTitleList.scrollTop = firstElementPosition;
        }
      };
    
    return(
        <div className='flex justify-left'>
            <p className=' relative text-4xl px-12 top-28'>see more of</p>
            <div id='work-title-list' ref={workTitleList} className=" overflow-scroll snap-y snap-mandatory h-96 no-scrollbar" onScroll={trackScrollPosition}>
                {workTitles.concat(workTitles).concat(workTitles).map((currentTitle, key) =>{// Simplify later on
                    if(key === workTitles.length-5){// First element to track
                        return(
                            <h1 key={key} id={key} ref={firstElement} alt={currentTitle.name} className="text-6xl font-extrabold pb-9 snap-start select-none" >{currentTitle.name}</h1>
                        )
                    }
                    else if(key === (workTitles.length*2)-4){// Second element to track
                        return(
                            <h1 key={key} id={key} ref={lastElement} alt={currentTitle.name} className="text-6xl font-extrabold pb-9 snap-start select-none" >{currentTitle.name}</h1>
                        )
                    }    
                    else{                       
                        return(
                            <h1 key={key} id={key} alt={currentTitle.name} className="text-6xl font-extrabold pb-9 snap-start select-none" >{currentTitle.name}</h1>
                        )
                    }
                })}
            </div>
        </div>
    )
}