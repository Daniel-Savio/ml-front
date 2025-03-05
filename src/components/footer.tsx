import { InstagramLogo, TelegramLogo, XLogo } from "@phosphor-icons/react";

export function Footer() {
    return (
        <div className="bg-[url(/hash-patter.svg)] bg-background bg-cover shadow shadow-primary block md:flex justify-around items-center h-20">
            <div>
                <img className="hidden md:block w-26 h-10" src="/logo.png" alt="" />
            </div>
            <div className="text-foreground text-center mb-1">
                <h1 className="font-title">All rights reserved to: Tropa do ML </h1>
                <h2 className="text-muted-foreground">Developed by: Daniel Sávio</h2>
            </div>
            <div className="flex gap-2 justify-around">
                <a href="https://t.me/+ix77EIb2KaNmYjdh"><TelegramLogo className="size-7 text-primary" weight="fill" /></a>
                <a href="https://x.com/TropaPromo"><XLogo className="size-7 text-primary" weight="fill" /></a>
                <a href="https://www.instagram.com/tropadomloficial/"><InstagramLogo className="size-7 text-primary" weight="fill" /></a>
            </div>
        </div>
    )
}

