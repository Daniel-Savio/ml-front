import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export function Sucessos() {
    return (
        <div className="flex flex-col justify-center items-center gap-8 mt-16">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/1">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold"><img src={`/sucesso-${index + 1}.jpeg`} alt="" /></span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </div>
    )
}

