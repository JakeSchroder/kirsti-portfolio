'use client';
import anime from 'animejs/lib/anime.es.js';
import { useEffect, useState } from 'react';

let workTitles = [];
for(let i=0; i<=30; i++){
    workTitles.push(`project ${i}`)
}

export default function WorkRolodex(){
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(()=>{
        anime({
            targets: 'div',
            duration: 0
          });
    }, [scrollPosition])

    const handleScroll = () => {
        const position = event.deltaY;// Might need to be replaced later since event is deprecated
        setScrollPosition(prev=>Math.min(Math.abs(prev+position), 8000));// Might have to be made scalable to the users screen later
    };
    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);    
    

    let minWorkIndex = Math.min(workTitles.length-2, Math.floor(scrollPosition/250));
    let maxWorkIndex = Math.min(workTitles.length-1, Math.ceil(scrollPosition/250)+6);
    return(
        <div className="grid">
            <text>{scrollPosition}</text>
            {workTitles.slice(minWorkIndex, maxWorkIndex).map((currentTitle, key) =>{// Simplify later on
                let opacity = 1/key;
                let fontSize = 8-key;
                let paddingBottom = 6;
                
                return(
                    <h1 key={key} className="text-6xl font-extrabold text-slate-100" style={{opacity:opacity, fontSize:`${fontSize}vw`, paddingBottom:paddingBottom-key}} >{currentTitle}</h1>
                )
            })}
        </div>
    )
}