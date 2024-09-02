import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type Props = {
  className?: string,
  children: ReactNode
}

const MaxWidthWrapper = (props: Props) => {
  const { className, children } = props

  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
