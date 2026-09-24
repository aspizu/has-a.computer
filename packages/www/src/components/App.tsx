import {useEffect} from "react"
import {bind} from "cuelume"
import {Hero} from "@/components/hero"
import {Nav} from "@/components/nav"
import {useAnimatedTitle} from "@/hooks/use-animated-title"

export default function App() {
  useAnimatedTitle()

  useEffect(() => {
    bind()
  }, [])

  return (
    <div className="h-dvh overflow-clip bg-[#f8fdff] text-(--site-ink) antialiased">
      <a
        className="fixed top-2.5 left-2.5 z-100 rounded-[8px] bg-white px-[18px] py-2.5 text-[#075f8e] [transform:translateY(-160%)] focus:[transform:translateY(0)]"
        href="#main"
      >
        Skip to content
      </a>
      <div className="relative isolate size-full overflow-hidden">
        <img
          className="pointer-events-none absolute inset-0 -z-1 size-full animate-[fade-in_900ms_ease-out] object-fill select-none [mask-image:linear-gradient(#000_85%,transparent)] mobile:object-cover"
          src="/images/sky-background.png"
          alt=""
          aria-hidden="true"
          width="1586"
          height="992"
          fetchPriority="high"
        />
        <Nav />
        <main id="main">
          <Hero />
        </main>
        <footer className="absolute right-4 bottom-[max(12px,env(safe-area-inset-bottom))] left-4 animate-[blur-fade-in_600ms_var(--ease-reveal)_840ms_backwards] text-center text-[11px] leading-[18px] text-(--site-muted)">
          made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="https://aspiz.uk"
            data-cuelume-press="tick"
            className="relative inline-block font-semibold text-inherit no-underline after:absolute after:right-0 after:bottom-0.5 after:left-0 after:h-px after:bg-current after:opacity-0 after:content-[''] hocus:after:opacity-50"
          >
            aspizu
          </a>
        </footer>
      </div>
    </div>
  )
}
