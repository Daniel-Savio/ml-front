

export function Footer() {
    return (
        <div className="bg-[url(/public/hash-patter.svg)] bg-cover shadow shadow-primary flex justify-around items-center h-20">
            <div>
                <img className="hidden md:block w-32 h-16" src="/public/logo.png" alt="" />
            </div>
            <div className="text-foreground text-center">
                <h1 className="font-title">All rights reserved to: Tropa do ML </h1>
                <h2 className="text-muted-foreground">Developed by: Daniel Sávio</h2>
            </div>
            <div className="hidden md:block w-20">

            </div>
        </div>
    )
}

