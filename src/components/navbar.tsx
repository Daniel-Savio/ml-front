
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
        <nav className="bg-transparent py-4">
            <div className=" px-8 mx-auto flex justify-between items-center">
                <img src={logo} className="w-28 h-12 md:w-36 md:h-16 "></img>
                <div id='nav-desktop' className="hidden md:flex space-x-4">
                    <NavLink link='#' value='Nos Conheça'></NavLink>
                    <NavLink link='#' value='Planos'></NavLink>
                    <NavLink link='#' value='Depoimentos'></NavLink>
                    <NavLink link='#' value='Perguntas'></NavLink>
                </div>
                <Button variant={'outline'} className="md:flex hidden">Fale Conosco</Button>

                <div className='md:hidden'>
                    <Drawer >
                        <DrawerTrigger>
                            <Logs className='text-foreground md:hidden cursor-pointer drop-shadow-md' size={36} />
                        </DrawerTrigger>
                        <DrawerContent className='h-2/3 shadow-2xl shadow-primary bg-linear-to-t from-primary/10 border-t-2 border-muted'>
                            <DrawerHeader className='flex flex-col gap-4'>

                            </DrawerHeader>
                            <div id='nav-cell' className="md:hidden w-full justify-center items-center flex flex-col gap-y-4">
                                <NavLink link='#' value='Nos Conheça'></NavLink>
                                <NavLink link='#' value='Planos'></NavLink>
                                <NavLink link='#' value='Depoimentos'></NavLink>
                                <NavLink link='#' value='Perguntas'></NavLink>
                            </div>
                            <DrawerFooter>
                                <Button variant={'outline'} className="md:flex">Fale Conosco</Button>

                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>


            </div>
        </nav>
    );
};

;