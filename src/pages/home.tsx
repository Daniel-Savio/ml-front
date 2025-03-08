import { BronzePlanCard, GoldPlanCard } from "@/components/plan-cards";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sucessos } from "./sections/home/sucessos";
import { FAQS } from "./sections/home/faqs";
import { variables } from "@/lib/consts";
import { SocialMedia } from "./sections/home/social-media";
import { CancelButton } from "@/components/cancel-button";
import axios from "axios";

export default function Home() {

    const [yagoHoverd, setYagoHoverd] = useState(false);
    const [wellHoverd, setWellHoverd] = useState(false);

    useEffect(() => {
        axios.get(`${variables.api}/keep-alive`)
            .then(response => {
                // Handle response
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        // Set up interval for subsequent requests (10 minutes = 600000 milliseconds)
        const intervalId = setInterval(() => {
            axios.get('/your-endpoint')
                .then(response => {
                    // Handle response
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }, 600000);

        return () => clearInterval(intervalId);
    })

    return (
        <div className="flex flex-col justify-center container mx-auto pt-8 gap-16 md:gap-40">

            {/* First Section */}
            <section className="mt-24">
                <div className=" flex flex-col text-center justify-center items-center gap-3">
                    <h1 className="font-title text-foreground md:text-3xl text-2xl text-center">
                        Aprenda a lucrar de verdade dentro do
                    </h1>
                    <motion.svg className="w-full">
                        <motion.text
                            initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                            animate={{ strokeDashoffset: 0, fill: "red" }}
                            transition={{ duration: 4, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                            x="50%" y="50%" text-anchor="middle"
                            className="font-title shadow-2xl text-foreground md:text-7xl text-3xl text-wrap fill-transparent stroke-primary stroke-2">
                            MERCADO LIVRE!
                        </motion.text>
                    </motion.svg>
                </div>

                <div className="m-auto text-center space-y-2">
                    <Button className="text-lg font-bold" onClick={() => { window.location.href = `${variables.default}/#third-section` }}>Comece com a gente</Button>
                    <h2 className="text-foreground text-center">Entre para nossa comunidade e aproveite as melhores promoções e oportunidades de ganho!</h2>
                </div>

            </section>

            {/* Sixth section */}
            <section id="sixth-section">
                <div className="flex flex-col justify-center text-center">

                    <motion.div whileInView={{ width: 200 }} className={`border-t-4 mx-auto border-primary transition-all w-0  my-5`}></motion.div>
                    <h2 className="font-title text-foreground md:text-3xl text-2xl text-center leading-relaxed">
                        Nossas
                    </h2>
                    <h1 className="font-title text-primary md:text-5xl text-3xl text-center leading-relaxed">
                        Redes Sociais
                    </h1>
                    <motion.div whileInView={{ width: 300 }} className={`border-t-4 mx-auto border-primary transition-all w-0  my-5`}></motion.div>
                </div>
                <SocialMedia></SocialMedia>
            </section>

            {/* Second Section */}
            <section id="second-section" className="mt-16">

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
                        <p className="text-foreground text-lg font-bold">"Nosso grupo no Discord é o lugar perfeito para quem busca oportunidades únicas! Aqui, você encontra promoções imperdíveis, passagens aéreas com descontos e ofertas exclusivas no Mercado Livre. Tudo organizado para você economizar tempo e dinheiro."</p>
                    </div>

                    <motion.div
                        onHoverStart={() => { setYagoHoverd(true) }}
                        onHoverEnd={() => { setYagoHoverd(false) }}
                        onTouchStart={() => { setYagoHoverd(true) }}
                        onTouchEnd={() => { setYagoHoverd(false) }}
                        className={`rounded-full bg-background border-2 border-primary size-80 md:size-96 md:-translate-x-15 shadow-lg shadow-secondary bg-[url(/yago.jpeg)] bg-cover bg-center transition-all ${yagoHoverd ? "" : "saturate-50"} justify-center flex items-center`}>
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
                        className={`rounded-full bg-background border-2 border-primary size-80 md:size-96 md:translate-x-18 shadow-lg shadow-secondary bg-[url(/well.jpeg)] bg-cover bg-center transition-all ${wellHoverd ? "" : "saturate-50"} justify-center flex items-center`}>
                        <motion.h1
                            animate={{ scale: wellHoverd ? 1.1 : 1, translateY: wellHoverd ? 0 : 100, opacity: wellHoverd ? 1 : 0 }}
                            className={`font-title text-5xl text-primary `}>Well</motion.h1>
                    </motion.div>

                    <div className="bg-background border-2 border-primary py-4 px-4 text-justify md:text-right md:pl-32 md:pr-16 rounded-md mx-2 md:w-1/2 shadow-lg shadow-secondary">
                        <p className="text-foreground text-lg font-bold">"Além de encontrar promoções, você também pode vender seus produtos no Mercado Livre com dicas valiosas que compartilhamos. Nosso grupo é uma comunidade ativa, onde todos se ajudam a aproveitar as melhores oportunidades. Junte-se a nós e não perca mais nada!"</p>
                    </div>


                </div>


            </section >

            {/* Third Section */}
            <section id="third-section" className="flex flex-col ">
                <div className="flex flex-col justify-center text-center">

                    <motion.div whileInView={{ width: 300 }} className={`border-t-4 mx-auto border-primary transition-all w-0  my-5`}></motion.div>
                    <h2 className="font-title text-foreground md:text-3xl text-2xl text-center leading-relaxed">
                        Nossos planos
                    </h2>
                    <h1 className="font-title text-primary md:text-5xl text-3xl text-center leading-relaxed">
                        SEU CRESCIMENTO
                    </h1>
                    <motion.div whileInView={{ width: 200 }} className={`border-t-4 mx-auto border-primary transition-all w-0  my-5`}></motion.div>
                </div>


                <div className="flex flex-col md:flex-row justify-center w-full items-center gap-16">
                    <BronzePlanCard
                        price="29,99"
                        period="1 mês - renova automaticamente"
                        options={['Acesso ao servidor', 'Bot de ofertas e promoções', 'Contato com todos os membros', 'Acesso a ofertas exclusivas', 'Acessos às novas ferramentas ']}>

                    </BronzePlanCard>
                    <GoldPlanCard
                        price="59.99"
                        period="3 meses - renova automaticamente"
                        options={['Acesso ao servidor', 'Bot de ofertas e promoções', 'Contato com todos os membros', 'Acesso a ofertas exclusivas', 'Acessos às novas ferramentas ']}>

                    </GoldPlanCard>
                </div>

                <div className="mx-auto mt-16">
                    <CancelButton></CancelButton>
                </div>

            </section>

            {/* Fourth Section */}
            <section id="fourth-section">
                <div className="flex flex-col justify-center text-center">

                    <motion.div whileInView={{ width: 200 }} className={`border-t-4 mx-auto border-primary transition-all w-0  my-5`}></motion.div>
                    <h2 className="font-title text-foreground md:text-3xl text-2xl text-center leading-relaxed">
                        Conheça um pouquinho mais das
                    </h2>
                    <h1 className="font-title text-primary md:text-5xl text-3xl text-center leading-relaxed">
                        VANTAGENS E SUCESSOS
                    </h1>
                    <motion.div whileInView={{ width: 300 }} className={`border-t-4 mx-auto border-primary transition-all w-0  my-5`}></motion.div>
                </div>
                <Sucessos></Sucessos>
            </section>

            {/* Fifth Section */}
            <section id="fifth-section" className="flex flex-col justify-center">
                <div className="flex flex-col justify-center text-center">

                    <motion.div whileInView={{ width: 300 }} className={`border-t-4 mx-auto border-primary transition-all w-0  my-5`}></motion.div>
                    <h2 className="font-title text-foreground md:text-3xl text-2xl text-center leading-relaxed">
                        Tire suas dúvidas
                    </h2>
                    <h1 className="font-title text-primary md:text-5xl text-3xl text-center leading-relaxed">
                        PERGUNTAS FREQUENTES
                    </h1>
                    <motion.div whileInView={{ width: 200 }} className={`border-t-4 mx-auto border-primary transition-all w-0  my-5`}></motion.div>
                </div>


                <FAQS></FAQS>

            </section>



            <br /><br /><br />

        </div >
    )
}
