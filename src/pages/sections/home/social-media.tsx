import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { InstagramLogo, TelegramLogo, XLogo } from '@phosphor-icons/react'


export function SocialMedia() {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0'>
            <Card className="border-primary bg-[url(/Vector.svg)] w-66 text-center bg-no-repeat bg-center shadow-lg shadow-primary p-4">
                <CardContent className='flex flex-col justify-center gap-5'>
                    <XLogo className='size-12 text-primary m-auto' weight='fill'></XLogo>
                    <h1 className='text-2xl font-title text-foreground'>X (Twitter)</h1>
                    <h2 className='text-lg text-muted-foreground'>@TropaPromo</h2>
                    <Button onClick={() => { window.location.href = "https://x.com/TropaPromo" }}>Seguir</Button>

                </CardContent>
            </Card>

            <Card className="border-primary bg-[url(/Vector.svg)] w-66 text-center bg-no-repeat bg-center shadow-lg shadow-primary p-4">
                <CardContent className='flex flex-col justify-center gap-5'>
                    <TelegramLogo className='size-12 text-primary m-auto' weight='fill'></TelegramLogo>
                    <h1 className='text-2xl font-title text-foreground'>Telegram</h1>
                    <h2 className='text-lg text-muted-foreground'>Canal Oficial</h2>
                    <Button onClick={() => { window.location.href = "https://t.me/+ix77EIb2KaNmYjdh" }}> Entrar</Button>

                </CardContent>
            </Card>

            <Card className="border-primary bg-[url(/Vector.svg)] w-66 text-center bg-no-repeat bg-center shadow-lg shadow-primary p-4">
                <CardContent className='flex flex-col justify-center gap-5'>
                    <InstagramLogo className='size-12 text-primary m-auto' weight='fill'></InstagramLogo>
                    <h1 className='text-2xl font-title text-foreground'>Instagram</h1>
                    <h2 className='text-lg text-muted-foreground'>@tropadomloficial</h2>
                    <Button onClick={() => { window.location.href = "https://www.instagram.com/tropadomloficial/" }}> Entrar</Button>

                </CardContent>
            </Card>
        </div>
    )
}

