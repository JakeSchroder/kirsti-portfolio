'use client';
import { useEffect, useState, useRef } from 'react';
import { useInView, InView } from 'react-intersection-observer';

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
    const titleRef = useRef(null);
    const topBound = 9;
    const bottomBound = 27;

    useEffect(() => {
        titleRef.current.scrollTop = document.getElementById('7').getBoundingClientRect().y; // Position center of div scroll
    }, []);

    return(
        <div className='flex justify-left'>
            <p className=' relative text-4xl px-12 top-28'>see more of</p>
            <div id='work-title-list' ref={titleRef} className=" overflow-auto s h-96 no-scrollbar snap-y " >
                <ul>
                    {workTitles.concat(workTitles).concat(workTitles).map((currentTitle, key) =>{// Simplify later on
                            if(key === topBound){
                                return(// Scroll to bottom when reaching top bound
                                    <InView key={key} className="text-6xl font-extrabold pb-9 snap-start select-none" as='li' onChange={(inView, entry) => inView ? titleRef.current.scrollTop = document.getElementById('28').getBoundingClientRect().y : ''}>
                                        {currentTitle.name}
                                    </InView>
                                )
                            }
                            else if(key === bottomBound){
                                return(// Scroll to top when reaching bottom bound
                                    <InView key={key} className="text-6xl font-extrabold pb-9 snap-start select-none" as='li' onChange={(inView, entry) => inView ? titleRef.current.scrollTop = 1056 /* Get rid of hard number */: ''}>
                                        {currentTitle.name}
                                    </InView>
                                )
                            }
                            else{
                                return(
                                    <li key={key} id={key} alt={currentTitle.name} className="text-6xl font-extrabold pb-9 snap-start select-none" >{currentTitle.name}</li>
                                )
                            }
                    })}
   


                </ul>
            </div>
        </div>
    )
}