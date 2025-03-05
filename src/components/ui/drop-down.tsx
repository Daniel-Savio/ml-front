import { ChevronDown } from "lucide-react"
import { easeIn, motion } from "motion/react"
import { useState } from "react"

interface DropDownType {
    title: string
    desc: string
}



export function DropDown({ title, desc }: DropDownType) {

    const tooltipAnimation = {
        visible: { opacity: 1, scale: 1, display: "block", transition: { easeIn }, },
        hidden: { opacity: 0, scale: 0, display: "none", transition: { easeIn }, },
    }


    const [isVisible, setIsVisible] = useState(true)

    return (
        <motion.div
            layout
            transition={{
                type: "spring",
                visualDuration: 0.2,
                bounce: 0.2,
            }}
            className="transition-all cursor-pointer border-b-1 border-primary max-w-96 text-center flex flex-col justify-center"
            onClick={() => { setIsVisible(!isVisible) }}>
            <h1 className="m-auto font-title text-primary text-2xl pb-1 flex gap-1 items-center">{title} <ChevronDown className="text-foreground" /></h1>
            <motion.div animate={`${isVisible ? "hidden" : "visible"}`} variants={tooltipAnimation} className="p-2">
                <span>{desc}</span>
            </motion.div>
        </motion.div>
    )
}
