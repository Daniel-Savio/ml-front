import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { CircleHelp, LoaderCircle } from "lucide-react";
import { easeIn, motion } from 'motion/react';
import { useState } from 'react';
import axios from 'axios';


interface FormData {
    nick: string;
}

export function PaymentForm({ link }: { link: string }) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [toolTip, setToolTip] = useState(false);
    const [loading, setLoading] = useState(false)



    const onSubmit = async (data: FormData) => {
        setLoading(true)
        try {
            const response = await axios.post(link, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.data) {
                //setLoading(false)
                window.location.href = response.data;
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const tooltipAnimation = {
        visible: { opacity: 1, transition: { easeIn }, },
        hidden: { opacity: 0, transition: { easeIn }, },
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-center gap-8">
                <div className='flex flex-col justify-center'>
                    <div className="flex justify-around items-center">

                        <label className='text-foreground font-bold' htmlFor="nick">Nickname do Discord</label>
                        <div className="cursor-pointer relative">
                            <motion.span onMouseOver={() => { setToolTip(true) }} onMouseOut={() => { setToolTip(false) }} onTouchStart={() => { setToolTip(true) }} onTouchEnd={() => { setToolTip(false) }} className='text-foreground'>
                                <CircleHelp className="text-foreground size-4 " />
                            </motion.span>
                            <motion.span animate={`${toolTip ? "visible" : "hidden"}`} variants={tooltipAnimation} className='absolute text-foreground bg-zinc-900 p-2 text-xs rounded-md shadow-lg -top-10 left-10'>
                                O nick do discord é necessário para te adicionar ao servidor
                            </motion.span>
                        </div>
                    </div>
                    <input
                        className='bg-zinc-900 text-sm border-2 border-ring text-foreground outline-none rounded-md p-1 mt-2'
                        id="nick"
                        {...register('nick', { required: true, minLength: 3 })}
                    />
                    {errors.nick && <span className='text-red-400 text-sm mt-1'>Insira um nick válido </span>}
                </div>

                <Button className='font-bold' type="submit">Ir para o pagamento <LoaderCircle className={`animate-spin ${loading ? "" : "hidden"}`} size={8} /></Button>
            </div>
        </form>
    );
};

