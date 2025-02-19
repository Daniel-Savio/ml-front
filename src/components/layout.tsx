import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'
import { Footer } from './footer'

export default function Layout() {
    return (
        <>
            <main className=" bg-zinc-950 min-h-screen bg-[url('/bg-image.png')] bg-cover bg-no-repeat">
                <Navbar />
                <Outlet></Outlet>
                <Footer></Footer>
            </main>
        </>
    )
}
