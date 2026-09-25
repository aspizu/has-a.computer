import {Link} from "@tanstack/react-router"
import {Brand} from "@/components/brand"
import {Button} from "@/components/ui/button"
import {cn} from "@/lib/utils"

const links: {label: string; href: string}[] = [
  {label: "Terms of Service", href: "/terms"},
  {label: "Contact Us", href: "mailto:admin@has-a.computer"},
  {label: "GitHub", href: "https://github.com/aspizu/has-a.computer"},
  {label: "Discord", href: "https://discord.gg/mKQqsJ6UtK"},
]

export function Nav({
  variant = "sky",
  onReserve,
}: {
  variant?: "sky" | "plain"
  onReserve: (subdomain: string) => void
}) {
  const plain = variant === "plain"

  return (
    <header
      className={cn(
        "flex items-center justify-between gap-6",
        plain
          ? "relative z-10 w-full pt-[4.4vh] pr-[17.5%] pb-6 pl-[17.5%] tablet:pr-[10%] tablet:pl-[10%] mobile:pt-[clamp(16px,3dvh,24px)] mobile:pr-[22px] mobile:pl-[22px] mobile:flex-col mobile:items-stretch mobile:gap-3 tiny:pr-4 tiny:pl-4"
          : "absolute top-[4.4%] right-[17.5%] left-[17.5%] text-white tablet:right-[10%] tablet:left-[10%] mobile:top-[clamp(16px,3dvh,24px)] mobile:right-[22px] mobile:left-[22px] mobile:flex-col mobile:items-stretch mobile:gap-2 tiny:right-4 tiny:left-4 short-landscape:top-4 short-landscape:right-[clamp(16px,4vw,40px)] short-landscape:left-[clamp(16px,4vw,40px)]",
      )}
    >
      <Brand />
      <nav
        aria-label="Main navigation"
        className={cn(
          "flex items-center gap-[clamp(14px,1.5vw,24px)] text-[clamp(10px,0.8vw,14px)] font-medium mobile:justify-center mobile:gap-[14px] mobile:text-[11px] tiny:gap-2.5",
          plain && "text-(--site-ink)",
        )}
      >
        <div className="flex items-center gap-[inherit]">
          {links.map(({label, href}) => {
            const className = cn(
              "relative animate-[blur-fade-in_600ms_var(--ease-reveal)_40ms_backwards] whitespace-nowrap [transition:color_150ms,opacity_150ms] after:absolute after:right-0 after:bottom-0.5 after:left-0 after:h-px after:bg-current after:opacity-0 after:content-[''] nth-1:[animation-delay:120ms] nth-2:[animation-delay:200ms] nth-3:[animation-delay:280ms] nth-4:[animation-delay:360ms] active:opacity-80 hocus:after:opacity-50",
              plain
                ? "text-(--site-muted) hocus:text-(--site-link)"
                : "text-white hocus:text-[#cfe9f5]",
            )

            return href.startsWith("/") ? (
              <Link className={className} data-cuelume-press="tick" key={label} to={href}>
                {label}
              </Link>
            ) : (
              <a className={className} data-cuelume-press="tick" key={label} href={href}>
                {label}
              </a>
            )
          })}
        </div>
        <Button
          type="button"
          data-cuelume-press
          onClick={() => onReserve("")}
          className={cn(
            "h-auto animate-[blur-fade-in_600ms_var(--ease-reveal)_440ms_backwards] px-5 py-2.5 text-[length:inherit] leading-[inherit]",
            plain
              ? "rounded-full bg-[#008aca] text-white hover:bg-[#0079b6] mobile:absolute mobile:top-[clamp(16px,3dvh,24px)] mobile:right-[22px] mobile:px-[13px] mobile:py-[9px] tiny:right-4"
              : "rounded-full border-0 border-current bg-white bg-clip-border [border-style:none] text-[#59656d] [box-shadow:0_1px_4px_#54a4c510] [&:hover]:bg-[#eaf2f5] tablet:px-[15px] tablet:py-2 mobile:absolute mobile:top-0 mobile:right-0 mobile:px-[13px] mobile:py-[9px] tiny:px-[11px] tiny:text-[10px]",
          )}
        >
          Reserve
        </Button>
      </nav>
    </header>
  )
}
