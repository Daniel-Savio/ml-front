import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { LoaderCircle } from "lucide-react";

import { useState } from 'react';
import axios from 'axios';
import { variables } from '@/lib/consts';

interface FormData {
    email: string;
}


export function CancelForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [loading, setLoading] = useState(false)



    const onSubmit = async (data: FormData) => {
        setLoading(true)
        try {
            const response = await axios.post(`${variables.api}/cancel-signature`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.data) {
                window.location.href = response.data;
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-center gap-8">
                <div className='flex flex-col justify-center'>
                    <div className="flex justify-around items-center">

                        <label className='text-foreground font-bold' htmlFor="email">Email cadastrado</label>

                    </div>
                    <input
                        className='bg-zinc-900 text-sm border-2 border-ring text-foreground outline-none rounded-md p-1 mt-2'
                        id="email"
                        {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                    />
                    {errors.email && <span className='text-red-400 text-sm mt-1'>Insira um email válido </span>}
                </div>

                <Button className='font-bold' type="submit">Ir para o pagamento <LoaderCircle className={`animate-spin ${loading ? "" : "hidden"}`} size={8} /></Button>
            </div>
        </form>
    );
};

