import {useLayoutEffect, useRef, useState} from "react"
import {RiArrowRightUpLine} from "@remixicon/react"
import type {OpenClaim} from "@/components/App"
import {DomainPeriod} from "@/components/domain-period"
import {HeroArtwork} from "@/components/hero-artwork"
import {Button} from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export function Hero({onOpen}: {onOpen: OpenClaim}) {
  const [name, setName] = useState("")
  const [nameWidth, setNameWidth] = useState<number>()
  const nameSizer = useRef<HTMLSpanElement>(null)
  const submitButton = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const sizer = nameSizer.current
    if (!sizer) return

    const measure = () => setNameWidth(Math.ceil(sizer.getBoundingClientRect().width) + 1)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(sizer)
    return () => observer.disconnect()
  }, [])

  return (
    <section aria-labelledby="hero-heading">
      <h1
        id="hero-heading"
        className="absolute top-[18.4%] left-1/2 z-2 w-max max-w-[60%] text-center font-brand text-[clamp(32px,min(4.85vw,7dvh),92px)] leading-[0.9] font-[850] tracking-[-0.035em] text-white [transform:translateX(-50%)] mobile:top-[max(14%,92px)] mobile:max-w-[calc(100%-32px)] mobile:text-[clamp(30px,min(10.8vw,6.7dvh),52px)] short-landscape:top-[24%] short-landscape:left-[34%] short-landscape:text-[clamp(24px,7dvh,35px)]"
      >
        <span className="block text-[0.5em] font-black tracking-[-0.025em] [--line-delay:120ms]">
          <span className="inline-block animate-[reveal-in_700ms_var(--ease-reveal)_var(--line-delay)_backwards]">
            give
          </span>{" "}
          <span className="inline-block animate-[reveal-in_700ms_var(--ease-reveal)_calc(var(--line-delay)+90ms)_backwards]">
            your
          </span>
        </span>
        <span className="block text-[0.95em] font-extrabold [--line-delay:300ms]">
          <span className="inline-block animate-[reveal-in_700ms_var(--ease-reveal)_var(--line-delay)_backwards]">
            computer
          </span>{" "}
          <span className="inline-block animate-[reveal-in_700ms_var(--ease-reveal)_calc(var(--line-delay)+90ms)_backwards]">
            a
          </span>
        </span>
        <span className="block text-[1.12em] font-black [--line-delay:480ms]">
          <span className="inline-block animate-[reveal-in_700ms_var(--ease-reveal)_var(--line-delay)_backwards]">
            place
          </span>{" "}
          <span className="inline-block animate-[reveal-in_700ms_var(--ease-reveal)_calc(var(--line-delay)+90ms)_backwards]">
            online
          </span>
        </span>
      </h1>
      <HeroArtwork />
      <div className="absolute bottom-[max(12%,calc(56px+env(safe-area-inset-bottom)))] left-1/2 z-4 w-[60%] text-center [transform:translateX(-50%)] mobile:bottom-[max(10%,calc(56px+env(safe-area-inset-bottom)))] mobile:w-[calc(100%-32px)] short-landscape:bottom-[max(11%,calc(56px+env(safe-area-inset-bottom)))] short-landscape:left-[34%] short-landscape:w-[60%]">
        <p className="animate-[reveal-in_650ms_var(--ease-reveal)_600ms_backwards] text-[clamp(12px,min(1.14vw,1.82dvh),20px)] leading-[1.45] font-[450] tracking-[-0.025em] mobile:text-[clamp(12px,1.8dvh,14px)] mobile:leading-normal tiny:text-[12px] short-landscape:text-[12px] short-landscape:leading-[1.4]">
          A free address for your computer.
          <br />
          Bring your own hosting. We&apos;ll bring the name.
        </p>
        <form
          className="mt-[clamp(13px,1.25vw,22px)] flex animate-[reveal-in_650ms_var(--ease-reveal)_720ms_backwards] flex-wrap items-center justify-center gap-2.5 mobile:mt-[clamp(12px,2.5dvh,20px)] mobile:gap-2 short-landscape:mt-3"
          onSubmit={(event) => {
            event.preventDefault()
            if (submitButton.current) onOpen(submitButton.current, name)
          }}
        >
          <InputGroup className="h-auto min-h-[clamp(32px,2.5vw,44px)] w-fit max-w-full rounded-[999px] border border-[#007cbb26] bg-[#ffffffb3] px-[clamp(12px,1.1vw,18px)] font-sans text-[clamp(11px,1vw,17px)] font-normal text-(--site-ink) [transition:border-color_150ms,background-color_150ms,box-shadow_150ms] focus-within:border-[#d1d5db]! focus-within:bg-white focus-within:[box-shadow:0_0_0_3px_#9ca3af13]! mobile:min-h-10 mobile:text-[10px] short-landscape:min-h-8 short-landscape:text-[10px]">
            <span
              ref={nameSizer}
              className="pointer-events-none invisible absolute font-semibold whitespace-pre"
              aria-hidden="true"
            >
              {name || "yourname"}
            </span>
            <InputGroupInput
              className="h-auto w-auto min-w-[1ch] flex-[0_1_auto] self-stretch bg-transparent p-0! text-[length:inherit] leading-[inherit] font-semibold [outline:none] [transition:width_220ms_var(--ease-reveal)] placeholder:text-[#94a3ab] md:text-[length:inherit] md:leading-[inherit]"
              style={{width: nameWidth}}
              type="text"
              name="subdomain"
              aria-label="Your subdomain"
              aria-describedby="hero-domain-suffix"
              placeholder="yourname"
              value={name}
              size={name.length || "yourname".length}
              onChange={(event) => setName(event.target.value.toLowerCase())}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              maxLength={63}
            />
            <InputGroupAddon
              align="inline-end"
              className="shrink-0 p-0 text-[length:inherit] leading-[inherit] font-[inherit]"
            >
              <InputGroupText
                className="inline-flex shrink-0 items-baseline gap-0 text-[length:inherit] leading-[inherit] whitespace-nowrap text-(--site-muted)"
                id="hero-domain-suffix"
              >
                <DomainPeriod />
                has-a
                <DomainPeriod />
                computer
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <Button
            ref={submitButton}
            type="submit"
            className="group/reserve h-auto min-h-[clamp(32px,2.5vw,44px)] gap-1.5 border border-[#ffffff33] bg-[#008aca] px-[clamp(15px,1.3vw,25px)] py-0 text-[clamp(10px,0.82vw,14px)] leading-normal text-white [background-image:radial-gradient(ellipse_70%_75%_at_50%_0%,#ffffff20,transparent_75%),radial-gradient(ellipse_65%_65%_at_50%_100%,#ffffff18,transparent_75%)] [box-shadow:0_4px_12px_#0089c325,inset_0_2px_4px_#ffffff28,inset_0_-2px_4px_#ffffff1e] [&:hover]:bg-[#0079b6] mobile:min-h-10 mobile:px-[17px] mobile:text-[11px] tiny:px-[14px] tiny:text-[10px] short-landscape:min-h-8 short-landscape:text-[10px]"
          >
            Reserve subdomain{" "}
            <RiArrowRightUpLine
              className="size-[15px] [transition:translate_180ms_var(--ease-reveal)] group-focus-visible/reserve:[translate:2px_0] fine-hover:group-hover/reserve:[translate:2px_0]"
              aria-hidden="true"
            />
          </Button>
        </form>
      </div>
    </section>
  )
}
