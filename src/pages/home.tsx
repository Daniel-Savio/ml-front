import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="flex flex-col justify-center container mx-auto max-w-full pt-8">
            <div className=" flex flex-col text-center justify-center items-center">
                <h1 className="font-title text-foreground text-3xl text-center">
                    Repense seu modo de
                </h1>
                <motion.svg className="w-full">
                    <motion.text
                        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                        animate={{ strokeDashoffset: 0, fill: "red" }}
                        transition={{ duration: 6, ease: "easeOut", repeat: Infinity, delay: .5, repeatType: "reverse" }}

                        x="50%" y="50%" text-anchor="middle"
                        className="font-title shadow-2xl text-foreground text-5xl fill-transparent stroke-primary stroke-2">
                        GANHAR DINHEIRO
                    </motion.text>
                </motion.svg>
            </div>

            <div className="m-auto space-y-2">
                <Button className="text-lg font-bold">Comece com a gente</Button>
                <h2 className="text-foreground text-center">Faça parte do nosso time</h2>
            </div>



        </div >
    )
}
