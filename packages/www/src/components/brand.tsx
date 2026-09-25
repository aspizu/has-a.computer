import {Link} from "@tanstack/react-router"
import {RiMacbookLine} from "@remixicon/react"

export function Brand() {
  return (
    <Link
      to="/"
      className="group/brand inline-flex animate-[blur-fade-in_600ms_var(--ease-reveal)_40ms_backwards] items-center gap-[7px] font-brand text-[clamp(14px,1.35vw,23px)] font-[850] tracking-[-0.5px] whitespace-nowrap mobile:min-h-[34px] mobile:gap-[5px] mobile:self-start mobile:text-[15px] tiny:text-[13px]"
      aria-label="has-a.computer home"
    >
      <RiMacbookLine
        className="size-[clamp(24px,2.05vw,34px)] shrink-0 [transition:rotate_220ms_var(--ease-reveal),scale_220ms_var(--ease-reveal)] mobile:size-[25px] fine-hover:group-hover/brand:-rotate-6 fine-hover:group-hover/brand:scale-[1.06]"
        aria-hidden="true"
      />
      <span>has-a.computer</span>
    </Link>
  )
}
