import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'

export default function Layout() {
    return (
        <>
            <main className=" bg-zinc-950 min-h-screen bg-[url('/bg-image.png')] bg-cover bg-no-repeat">
                <Navbar />
                <Outlet></Outlet>
            </main>
        </>
    )
}
