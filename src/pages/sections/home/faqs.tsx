
import { DropDown } from "@/components/ui/drop-down"

const description = "O Discord é uma plataforma de comunicação popular que combina chat por texto, chamadas de voz e vídeo, ideal para comunidades, gamers e equipes. Ele permite a criação de servidores com canais temáticos, onde os usuários podem interajar em tempo real, compartilhar arquivos e integrar bots para automatizar tarefas. É uma ferramenta versátil para conectar pessoas com interesses em comum."

export function FAQS() {
  return (
    <div className="w-full flex justify-center">
      <DropDown title="O que é o Discord" desc={description}></DropDown>

    </div>
  )
}