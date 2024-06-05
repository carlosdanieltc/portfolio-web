import { useRef, useState } from "react";

const [currentCard, setCurrentCard] = useState(0) 
const scrollContainerRef = useRef(null);

export const scrollLeft = () => {
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: -427, behavior: 'smooth' });
    }
    if(currentCard == 0){
        console.log("a")
    }
};

const scrollRight = () => {
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 427, behavior: 'smooth' });
    }
};