import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'

export default function Layout() {
    return (
        <>
            <main className=" bg-zinc-900 min-h-screen bg-[url('public/bg-image.png')] bg-no-repeat">
                <Navbar />
                <Outlet></Outlet>
            </main>
        </>
    )
}
