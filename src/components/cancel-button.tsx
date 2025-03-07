import { CancelForm } from "./cancel-form";
import { Button } from "./ui/button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function CancelButton() {
    return (
        <div className="">
            <Dialog>
                <DialogTrigger><Button className="" variant={"destructive"}>Cancelar assinatura</Button></DialogTrigger>
                <DialogContent className="bg-[url(/Vector.svg)]">
                    <DialogHeader>
                        <DialogTitle>Tem certeza?</DialogTitle>
                        <DialogDescription>
                            Caso deseje cancelar o seu plano, basta preencher com o e-mail cadastrado que você será redirecionado à página de cancelamento. Em caso de dúvida, entre em contato conosco.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center w-full">
                        <CancelForm></CancelForm>
                    </div>
                </DialogContent>
            </Dialog>

        </div>
    )
}

