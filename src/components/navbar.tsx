
import logo from '/logo.png';
import { Button } from './ui/button';
import { NavLink } from './nav-link';
import { Logs } from 'lucide-react';

import {
    Drawer,
    DrawerContent,

    DrawerHeader,

    DrawerTrigger,
} from "./ui/drawer"
import { variables } from '@/lib/consts';

export function Navbar() {
    return (
        <nav className="bg-background bg-[url('/Vector.svg')] fixed z-40 w-screen py-2 shadow-lg shadow-ring">
            <div className=" px-8 mx-auto flex justify-between items-center ">
                <a href={variables.default}>
                    <img src={logo} className="w-28 h-12 md:w-36 md:h-16 "></img>
                </a>
                <div id='nav-desktop' className="hidden md:flex space-x-4">
                    <NavLink link={`${variables.default}/#second-section`} value='Nos Conheça'></NavLink>
                    <NavLink link={`${variables.default}/#third-section`} value='Planos'></NavLink>
                    <NavLink link={`${variables.default}/#fourth-section`} value='Sucessos'></NavLink>
                    <NavLink link={`${variables.default}/#fifth-section`} value='Perguntas'></NavLink>
                </div>

                <Button variant={'outline'} onClick={() => {
                    ///public/welle: Unreachable code error
                    window.location.href = "https://t.me/+ix77EIb2KaNmYjdh";
                }} className="md:flex hidden">Fale Conosco</Button>

                <div className='md:hidden'>
                    <Drawer >
                        <DrawerTrigger>
                            <Logs className='text-foreground md:hidden cursor-pointer drop-shadow-md' size={36} />
                        </DrawerTrigger>
                        <DrawerContent className='h-1/2 shadow-2xl shadow-primary bg-[url(/Vector.svg)] border-t-2 border-muted'>
                            <DrawerHeader className='flex flex-col gap-4'>

                            </DrawerHeader>
                            <div id='nav-cell' className="md:hidden w-full justify-center items-center flex flex-col gap-y-4">
                                <NavLink link='#' value='Nos Conheça'></NavLink>
                                <NavLink link='#' value='Planos'></NavLink>
                                <NavLink link='#' value='Depoimentos'></NavLink>
                                <NavLink link='#' value='Perguntas'></NavLink>
                                <Button variant={'outline'} onClick={() => {
                                    ///public/welle: Unreachable code error
                                    window.location.href = "https://t.me/+ix77EIb2KaNmYjdh";
                                }} className="md:flex">Fale Conosco</Button>
                            </div>

                        </DrawerContent>
                    </Drawer>
                </div>



                {/* <div className='w-screen h-full absolute bg-zinc-600 opacity-60 px-4 -z-10 -left-0.5 blur-xl'></div> */}
            </div>

        </nav>
    );
};

;