import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { motion } from "motion/react"
import { Separator } from "@radix-ui/react-separator"
import { CircleCheckBig } from "lucide-react"
import { Button } from "./ui/button"
import Tilt from "react-parallax-tilt"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PaymentForm } from "./payment-form"
import { variables } from "@/lib/consts"

interface PlanProps {
  price: string
  period: string
  options?: string[]
}

const listAnimation = {
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.3 }, },
  hidden: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 }, },
}

const itemAnimation = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 100, velocity: 100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 100 },
    },
  },
}



export function BronzePlanCard({ price, period, options }: PlanProps) {
  return (
    <>
      <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <Card className="border-ring bg-[url(/Vector.svg)]  bg-no-repeat bg-center shadow-lg shadow-secondary">
          <CardHeader className="flex flex-col text-center justify-center">
            <CardTitle className="font-title text-4xl text-secondary py-2">Mensal</CardTitle>

            <Separator orientation="horizontal" className="bg-muted-foreground w-full h-0.5 rounded" />

            <CardTitle className="font-title text-3xl text-foreground py-2">{`R$ ${price}`}</CardTitle>

            <CardDescription>{`Acesso por ${period}`}</CardDescription>
            <Separator orientation="horizontal" className="bg-muted-foreground w-full h-0.5 rounded" />

          </CardHeader>
          <CardContent className="h-60">
            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={listAnimation}
              className="space-y-4 ">
              {
                options && (options.map((option, index) => (
                  <motion.li variants={itemAnimation} key={index} className="flex items-left text-left gap-2">
                    <CircleCheckBig className="text-secondary" />
                    <p className="text-foreground">{option}</p>
                  </motion.li>
                ))
                )
              }
            </motion.ul>


          </CardContent>
          <CardFooter className="flex justify-center">
            <Dialog>
              <DialogTrigger className="w-full"><Button variant={"secondary"} className="w-full">Comece a ganhar</Button></DialogTrigger>

              <DialogContent className="bg-[url(/public/Vector.svg)]  bg-center shadow-md shadow-secondary">
                <DialogHeader className="font-title text-2xl text-primary">
                  <DialogTitle>Suas informações</DialogTitle>
                  <DialogDescription className="font-sans text-foreground text-justify">
                    Por favor, verifique que seus dados estão corretos para que seja possível lhe dar as devidas permissões após a compra.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center w-full">
                  <PaymentForm link={`${variables.api}/bronze-plan`}></PaymentForm>
                </div>
              </DialogContent>
            </Dialog>

          </CardFooter>
        </Card>
      </Tilt>
    </>
  )
}

export function GoldPlanCard({ price, period, options }: PlanProps) {
  return (
    <>
      <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>

        <Card className="border-primary bg-[url(/Vector.svg)]  bg-no-repeat bg-center shadow-lg shadow-primary">
          <CardHeader className="flex flex-col text-center justify-center">
            <CardTitle className="font-title text-4xl text-primary py-2">Trimestral</CardTitle>

            <Separator orientation="horizontal" className="bg-muted-foreground w-full h-0.5 rounded" />

            <CardTitle className="font-title text-3xl text-foreground py-2">{`R$ ${price}`}</CardTitle>

            <CardDescription>{`Acesso por ${period}`}</CardDescription>
            <Separator orientation="horizontal" className="bg-muted-foreground w-full h-0.5 rounded" />

          </CardHeader>
          <CardContent className="h-60">
            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={listAnimation}
              className="space-y-4 ">
              {
                options && (options.map((option, index) => (
                  <motion.li variants={itemAnimation} key={index} className="flex items-left text-left gap-2">
                    <CircleCheckBig className="text-primary" />
                    <p className="text-foreground">{option}</p>
                  </motion.li>
                ))
                )
              }
            </motion.ul>


          </CardContent>
          <CardFooter className="flex justify-center">
            <Dialog>
              <DialogTrigger className="w-full"><Button variant={"secondary"} className="w-full">Comece a ganhar</Button></DialogTrigger>

              <DialogContent className="bg-[url(/public/Vector.svg)]  bg-center shadow-md shadow-secondary">
                <DialogHeader className="font-title text-2xl text-primary">
                  <DialogTitle>Suas informações</DialogTitle>
                  <DialogDescription className="font-sans text-foreground text-justify">
                    Por favor, verifique que seus dados estão corretos para que seja possível lhe dar as devidas permissões após a compra.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center w-full">
                  <PaymentForm link={`${variables.api}/gold-plan`}></PaymentForm>
                </div>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </Tilt>
    </>
  )
}
