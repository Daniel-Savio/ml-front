import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface NavLinkProps {
  value: string;
  link: string;
  forceHover?: boolean;
}

export function NavLink({ value, link, forceHover }: NavLinkProps) {
  const [hoverd, setHoverd] = useState(false);
  useEffect(() => {
    if (forceHover) {
      setHoverd(true)
    }
  }, [forceHover])
  return (

    <div>
      <motion.div className=" block space-y-2" onHoverStart={() => setHoverd(true)} onHoverEnd={() => setHoverd(false)} onTouchStart={() => setHoverd(true)} onTouchEnd={() => setHoverd(false)}>
        <a href={link} className="text-foreground font-sans">{value}</a>
        <div className={`border-t-4  border-primary transition-all ${hoverd ? 'w-full' : 'w-0'} `}></div>
      </motion.div>
    </div>
  )
}

