import { BronzePlanCard, GoldPlanCard } from "@/components/plan-cards";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {

    const [yagoHoverd, setYagoHoverd] = useState(false);
    const [wellHoverd, setWellHoverd] = useState(false);

    return (
        <div className="flex flex-col justify-center container mx-auto pt-8 gap-16 md:gap-40">

            {/* First Section */}
            <section className="mt-8">
                <div className=" flex flex-col text-center justify-center items-center gap-3">
                    <h1 className="font-title text-foreground md:text-3xl text-2xl text-center">
                        Repense seu modo de
                    </h1>
                    <motion.svg className="w-full">
                        <motion.text
                            initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                            animate={{ strokeDashoffset: 0, fill: "red" }}
                            transition={{ duration: 4, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                            x="50%" y="50%" text-anchor="middle"
                            className="font-title shadow-2xl text-foreground md:text-7xl text-3xl text-wrap fill-transparent stroke-primary stroke-2">
                            GANHAR DINHEIRO
                        </motion.text>
                    </motion.svg>
                </div>

                <div className="m-auto text-center space-y-2">
                    <Button className="text-lg font-bold">Comece com a gente</Button>
                    <h2 className="text-foreground text-center">Faça parte do nosso time</h2>
                </div>

            </section>

            {/* Second Section */}
            <section>

                <div className="flex flex-col justify-center text-center">
                    <h2 className="font-title text-foreground md:text-3xl text-2xl text-center leading-relaxed">
                        Conheça o projeto pelos próprios
                    </h2>
                    <h1 className="font-title text-primary md:text-5xl text-3xl text-center leading-relaxed">
                        IDEALIZADORES
                    </h1>
                </div>

                {/* YAGO */}
                <div className="flex flex-col md:flex-row justify-center mt-16 items-center gap-8">
                    <div className="bg-background border-2 border-primary py-4 px-4 text-justify md:text-left md:pl-16 md:pr-32 rounded-md mx-2 md:w-1/2 shadow-lg shadow-secondary">
                        <p className="text-foreground text-lg font-bold">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, libero eum! Tenetur voluptate obcaecati doloribus, aut laboriosam dolore, non hic sed porro harum possimus ad quaerat iste velit consequuntur ullam."</p>
                    </div>

                    <motion.div
                        onHoverStart={() => { setYagoHoverd(true) }}
                        onHoverEnd={() => { setYagoHoverd(false) }}
                        onTouchStart={() => { setYagoHoverd(true) }}
                        onTouchEnd={() => { setYagoHoverd(false) }}
                        className={`rounded-full bg-background border-2 border-primary size-96 md:-translate-x-15 shadow-lg shadow-secondary bg-[url(/public/yago.jpeg)] bg-cover bg-center transition-all ${yagoHoverd ? "" : "saturate-50"} justify-center flex items-center`}>
                        <motion.h1
                            animate={{ scale: yagoHoverd ? 1.1 : 1, translateY: yagoHoverd ? 0 : 100, opacity: yagoHoverd ? 1 : 0 }}
                            className={`font-title text-5xl text-primary `}>Yago</motion.h1>
                    </motion.div>
                </div>

                {/* WELL */}
                <div className="flex flex-col md:flex-row mt-16 justify-center items-center gap-8">

                    <motion.div
                        onHoverStart={() => { setWellHoverd(true) }}
                        onHoverEnd={() => { setWellHoverd(false) }}
                        onTouchStart={() => { setWellHoverd(true) }}
                        onTouchEnd={() => { setWellHoverd(false) }}
                        className={`rounded-full bg-background border-2 border-primary size-96 md:translate-x-15 shadow-lg shadow-secondary bg-[url(/public/well.jpeg)] bg-cover bg-center transition-all ${wellHoverd ? "" : "saturate-50"} justify-center flex items-center`}>
                        <motion.h1
                            animate={{ scale: wellHoverd ? 1.1 : 1, translateY: wellHoverd ? 0 : 100, opacity: wellHoverd ? 1 : 0 }}
                            className={`font-title text-5xl text-primary `}>Well</motion.h1>
                    </motion.div>

                    <div className="bg-background border-2 border-primary py-4 px-4 text-justify md:text-right md:pl- md:pr-16 rounded-md mx-2 md:w-1/2 shadow-lg shadow-secondary">
                        <p className="text-foreground text-lg font-bold">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, libero eum! Tenetur voluptate obcaecati doloribus, aut laboriosam dolore, non hic sed porro harum possimus ad quaerat iste velit consequuntur ullam."</p>
                    </div>


                </div>


            </section >

            {/* Third Section */}
            <section>
                <div className="flex flex-col justify-center text-center">

                    <motion.div whileInView={{ width: 200 }} className={`border-t-4 mx-auto border-primary transition-all w-0  my-5`}></motion.div>
                    <h2 className="font-title text-foreground md:text-3xl text-2xl text-center leading-relaxed">
                        Nossos planos
                    </h2>
                    <h1 className="font-title text-primary md:text-5xl text-3xl text-center leading-relaxed">
                        SEU CRESCIMENTO
                    </h1>
                    <motion.div whileInView={{ width: 300 }} className={`border-t-4 mx-auto border-primary transition-all w-0  my-5`}></motion.div>
                </div>
                <div className="flex flex-col md:flex-row justify-center w-full items-center gap-16">
                    <BronzePlanCard
                        price="15,00"
                        period="1 mês"
                        options={['Acesso ao servidor', 'Bot de ofertas e promoções', 'Contato com todos os membros']}>

                    </BronzePlanCard>
                    <GoldPlanCard
                        price="15.00"
                        period="1 mês"
                        options={['Acesso ao servidor', 'Bot de ofertas e promoções', 'Contato com todos os membros', 'Acesso a ofertas exclusivas', 'Acessos às novas ferramentas ']}>

                    </GoldPlanCard>
                </div>

            </section>
            <br /><br /><br />

        </div >
    )
}
