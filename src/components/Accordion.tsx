import { useState } from "react";
import iconArrow from "../assets/images/icon-arrow-down.svg"
// import iconArrow from "../assets/images/icon-arrow-down.svg"
type AccordionType = {
    question: string;
    answer: string
}
function Accordion({ question, answer }: AccordionType) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full cursor-pointer">
            <p className="flex justify-between items-center hover:text-soft-red" onClick={() => setIsOpen(!isOpen)}><span className={`${isOpen && "font-bold"}`}>{question}</span> <img className={`w-4 h-3 transition-transform ease-in duration-75 ${isOpen && "rotate-180"}`} src={iconArrow} alt="down arrow" /></p>
            <div className={`transition-all ease-in duration-75 ${isOpen ? " visible" : "h-0 invisible"} overflow-clip `}>
                {answer}
            </div>
        </div>
    )
}

export default Accordion