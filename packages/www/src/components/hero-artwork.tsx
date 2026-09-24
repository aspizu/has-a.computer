import {RiGlobalLine, RiSearchLine} from "@remixicon/react"
import {DomainPeriod} from "@/components/domain-period"

const domains = [
  {
    name: "everyone",
    className:
      "[--domain-x:24%] [--domain-y:28%] [--domain-tilt:-10deg] [--float-delay:-1s] [--reveal-delay:440ms] mobile:[--domain-x:28%] mobile:[--domain-y:36%] short-landscape:[--domain-x:75%] short-landscape:[--domain-y:23%]",
  },
  {
    name: "priyanshu",
    className:
      "[--domain-x:17%] [--domain-y:48%] [--domain-tilt:8deg] [--float-delay:-3s] [--reveal-delay:560ms] mobile:[--domain-x:73%] mobile:[--domain-y:70%] narrow:[--domain-y:60%] short-landscape:[--domain-x:78%] short-landscape:[--domain-y:80%]",
  },
  {
    name: "sagnik",
    className:
      "[--domain-x:25%] [--domain-y:67%] [--domain-tilt:-7deg] [--float-delay:-2s] [--reveal-delay:680ms] mobile:hidden short-landscape:hidden",
  },
  {
    name: "tushar",
    className:
      "[--domain-x:77%] [--domain-y:28%] [--domain-tilt:9deg] [--float-delay:-4s] [--reveal-delay:500ms] mobile:[--domain-x:74%] mobile:[--domain-y:40%] short-landscape:hidden",
  },
  {
    name: "vishnu",
    className:
      "[--domain-x:83%] [--domain-y:48%] [--domain-tilt:-8deg] [--float-delay:-1.5s] [--reveal-delay:620ms] mobile:[--domain-x:25%] mobile:[--domain-y:66%] narrow:[--domain-y:56%] short-landscape:hidden",
  },
  {
    name: "agent",
    className:
      "[--domain-x:76%] [--domain-y:67%] [--domain-tilt:7deg] [--float-delay:-3.5s] [--reveal-delay:740ms] mobile:hidden short-landscape:hidden",
  },
]

export function HeroArtwork() {
  return (
    <>
      <div className="pointer-events-none absolute top-[34%] left-1/2 z-3 w-[min(27vw,40dvh)] animate-[reveal-in_800ms_var(--ease-reveal)_380ms_backwards] [transform:translateX(-50%)] mobile:top-[31%] mobile:w-[min(290px,76vw,35dvh)] short-landscape:top-[24%] short-landscape:left-[75%] short-landscape:w-[min(32vw,52dvh)]">
        <img
          className="block h-auto w-full animate-[computer-float_7s_ease-in-out_infinite] select-none [filter:drop-shadow(0_16px_16px_#2877971c)]"
          src="/images/retro-computer.png"
          alt="A floating retro computer with a smiling blue screen"
          width="1254"
          height="1254"
          fetchPriority="high"
          draggable={false}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-3"
        role="group"
        aria-label="Example subdomains"
      >
        {domains.map(({name, className}) => (
          <div
            className={`group/domain pointer-events-auto absolute top-(--domain-y) left-(--domain-x) flex w-max px-2.5 py-7 [translate:-50%_-50%] ${className}`}
            key={name}
          >
            <div className="pointer-events-none inline-flex rotate-(--domain-tilt) animate-[domain-float_6s_ease-in-out_var(--float-delay)_infinite,blur-fade-in_650ms_var(--ease-reveal)_var(--reveal-delay)_backwards] items-center gap-1.5 rounded-[999px] border border-transparent bg-[#ffffffe0] px-2 py-[3px] font-sans text-[clamp(11px,1vw,17px)] font-normal whitespace-nowrap text-[#3c7799] [backdrop-filter:blur(8px)] [box-shadow:0_5px_18px_#237dad12] [transition:scale_240ms_var(--ease-reveal),rotate_240ms_var(--ease-reveal),background-color_180ms,box-shadow_180ms] mobile:gap-1 mobile:px-1.5 mobile:py-0.5 mobile:text-[10px] short-landscape:gap-1 short-landscape:px-1.5 short-landscape:py-0.5 short-landscape:text-[10px] fine-hover:group-hover/domain:rotate-0 fine-hover:group-hover/domain:scale-[1.025] fine-hover:group-hover/domain:bg-white fine-hover:group-hover/domain:[animation-play-state:paused,running] fine-hover:group-hover/domain:[box-shadow:0_8px_24px_#237dad24]">
              <RiGlobalLine
                className="size-[1.1em] shrink-0 opacity-70"
                size={16}
                aria-hidden="true"
              />
              <div className="inline-flex items-baseline">
                <b className="font-semibold text-[#23516f]">{name}</b>
                <DomainPeriod />
                <span>has-a</span>
                <DomainPeriod />
                <span>computer</span>
                <span
                  className="ml-px h-[1em] w-px shrink-0 animate-[caret-blink_1.2s_ease-in-out_infinite] self-center bg-current"
                  aria-hidden="true"
                />
              </div>
              <RiSearchLine
                className="size-[1.1em] shrink-0 opacity-65"
                size={16}
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
