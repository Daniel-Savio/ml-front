import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="flex flex-col justify-center container mx-auto pt-8 gap-16 md:gap-40">


            <section>
                <div className=" flex flex-col text-center justify-center items-center">
                    <h1 className="font-title text-foreground md:text-3xl text-2xl text-center">
                        Repense seu modo de
                    </h1>
                    <motion.svg className="w-full">
                        <motion.text
                            initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                            animate={{ strokeDashoffset: 0, fill: "red" }}
                            transition={{ duration: 6, ease: "easeOut", repeat: Infinity, delay: .5, repeatType: "reverse" }}
                            x="50%" y="50%" text-anchor="middle"
                            className="font-title shadow-2xl text-foreground md:text-5xl text-3xl text-wrap fill-transparent stroke-primary stroke-2">
                            GANHAR DINHEIRO
                        </motion.text>
                    </motion.svg>
                </div>

                <div className="m-auto text-center space-y-2">
                    <Button className="text-lg font-bold">Comece com a gente</Button>
                    <h2 className="text-foreground text-center">Faça parte do nosso time</h2>
                </div>

            </section>

            <section>

                <div className="flex flex-col justify-center text-center">
                    <h2 className="font-title text-foreground md:text-3xl text-2xl text-center leading-relaxed">
                        Conheça o projeto pelos próprios
                    </h2>
                    <h1 className="font-title text-primary md:text-5xl text-3xl text-center leading-relaxed">
                        IDEALIZADORES
                    </h1>
                </div>


            </section>

            <br /><br /><br />

        </div >
    )
}
