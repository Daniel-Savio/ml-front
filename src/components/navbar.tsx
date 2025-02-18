
import logo from '../../public/logo.png';
import { Button } from './ui/button';
import { NavLink } from './nav-link';

export function Navbar() {
    return (
        <nav className="bg-transparent py-4">
            <div className=" px-8 mx-auto flex justify-between items-center">
                <img src={logo} className="w-36 h-16"></img>
                <div className="flex space-x-4">
                    <NavLink link='#' value='Nos Conheça'></NavLink>
                    <NavLink link='#' value='Planos'></NavLink>
                    <NavLink link='#' value='Depoimentos'></NavLink>
                    <NavLink link='#' value='Perguntas'></NavLink>
                </div>
                <Button variant={'outline'} className="">Fale Conosco</Button>
            </div>
        </nav>
    );
};

;