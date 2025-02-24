
import logo from '/logo.png';
import { Button } from './ui/button';
import { NavLink } from './nav-link';
import { Logs } from 'lucide-react';

import {
    Drawer,
    DrawerContent,

    DrawerFooter,
    DrawerHeader,

    DrawerTrigger,
} from "./ui/drawer"

export function Navbar() {
    return (
        <nav className="bg-background bg-[url('/public/Vector.svg')] fixed z-40 w-screen py-2 shadow-lg shadow-ring">
            <div className=" px-8 mx-auto flex justify-between items-center ">
                <a href="http://localhost:5173/">
                    <img src={logo} className="w-28 h-12 md:w-36 md:h-16 "></img>
                </a>
                <div id='nav-desktop' className="hidden md:flex space-x-4">
                    <NavLink link='http://localhost:5173/#second-section' value='Nos Conheça'></NavLink>
                    <NavLink link='http://localhost:5173/#third-section' value='Planos'></NavLink>
                    <NavLink link='http://localhost:5173/#fourth-section' value='Sucessos'></NavLink>
                    <NavLink link='http://localhost:5173/#third-section' value='Perguntas'></NavLink>
                </div>
                <Button variant={'outline'} className="md:flex hidden">Fale Conosco</Button>

                <div className='md:hidden'>
                    <Drawer >
                        <DrawerTrigger>
                            <Logs className='text-foreground md:hidden cursor-pointer drop-shadow-md' size={36} />
                        </DrawerTrigger>
                        <DrawerContent className='h-1/3 shadow-2xl shadow-primary bg-[url(/Vector.svg)] border-t-2 border-muted'>
                            <DrawerHeader className='flex flex-col gap-4'>

                            </DrawerHeader>
                            <div id='nav-cell' className="md:hidden w-full justify-center items-center flex flex-col gap-y-4">
                                <NavLink link='#' value='Nos Conheça'></NavLink>
                                <NavLink link='#' value='Planos'></NavLink>
                                <NavLink link='#' value='Depoimentos'></NavLink>
                                <NavLink link='#' value='Perguntas'></NavLink>
                            </div>
                            <DrawerFooter className='mb-10'>
                                <Button variant={'outline'} className="md:flex">Fale Conosco</Button>

                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>



                {/* <div className='w-screen h-full absolute bg-zinc-600 opacity-60 px-4 -z-10 -left-0.5 blur-xl'></div> */}
            </div>

        </nav>
    );
};

;