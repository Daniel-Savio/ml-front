import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { variables } from '@/lib/consts';
import { toast } from 'sonner';

const CompletePage: React.FC = () => {

    const { sessionId } = useParams()

    const handleRedirect = () => {

        window.location.href = variables.discord;
    };

    useEffect(() => {
        console.log(sessionId);
        axios.post(`${variables.api}/add-costumer`, { sessionId: sessionId })
            .then((response) => { toast.success(response.data); })
            .catch((error) => { toast.error("Algo deu errado verifique seu pagamento e contate nossos administradores" + error); });
    }, [sessionId]);

    return (
        <section className="bg-background bg-[url('//hash-patter.svg')] h-screen w-full flex flex-col items-center justify-center">
            <div className=" flex flex-col text-center justify-center items-center ">
                <motion.svg className="w-screen">
                    <motion.text
                        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                        animate={{ strokeDashoffset: 0, fill: "red" }}
                        transition={{ duration: 4, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                        x="50%" y="50%" text-anchor="middle"
                        className="font-title shadow-2xl text-foreground md:text-7xl md:block hidden  text-wrap fill-transparent stroke-primary stroke-2">
                        PAGAMENTO  COMPLETO
                    </motion.text>
                    <motion.text
                        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                        animate={{ strokeDashoffset: 0, fill: "red" }}
                        transition={{ duration: 4, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                        x="50%" y="50%" text-anchor="middle"
                        className="font-title shadow-2xl text-foreground text-4xl md:hidden  text-wrap fill-transparent stroke-primary stroke-2">
                        PAGAMENTO

                    </motion.text>
                    <motion.text
                        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                        animate={{ strokeDashoffset: 0, fill: "red" }}
                        transition={{ duration: 4, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                        x="50%" y="80%" text-anchor="middle"
                        className="font-title shadow-2xl text-foreground text-4xl md:hidden  text-wrap fill-transparent stroke-primary stroke-2">
                        COMPLETO

                    </motion.text>


                </motion.svg>
            </div>

            <div className="mx-auto text-center mt-8 md:mt-0 space-y-2">
                <Button onClick={handleRedirect} className="text-lg font-bold">Ir para o discord <ChevronRight size={10} /></Button>
                <h2 className="text-foreground text-center">Faça parte do nosso time</h2>
            </div>

        </section>
    );
};

export default CompletePage;