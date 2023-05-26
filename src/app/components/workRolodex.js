'use client';
import anime from 'animejs/lib/anime.es.js';
import { useEffect, useState } from 'react';

export default function WorkRolodex(){
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(()=>{
        anime({
            targets: 'div',
            translateX: scrollPosition,
            backgroundColor: 'green',
            duration: 800
          });
    }, [scrollPosition])

    const handleScroll = () => {
        const position = event.deltaY;// Might need to be replaced later since event is deprecated
        setScrollPosition(prev=>Math.abs(prev+position));
    };
    
    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });
    
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    console.log(scrollPosition)
    
    
    return(
        <div className="grid">
            <text>{scrollPosition}</text>
            <text className="grid-item">Project 1</text>
            <text className="grid-item">Project 2</text>
            <text className="grid-item">Project 3</text>
            <text className="grid-item">Project 4</text>
            <text className="grid-item">Project 5</text>
            <text className="grid-item">Project 6</text>
            <text className="grid-item">Project 7</text>
            <text className="grid-item">Project 8</text>
            <text className="grid-item">Project 9</text>
            <text className="grid-item">Project 10</text>
        </div>
    )
}