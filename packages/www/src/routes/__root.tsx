import {useEffect} from "react"
import {createRootRouteWithContext, Link, Outlet} from "@tanstack/react-router"
import {RiArrowRightLine} from "@remixicon/react"
import {Brand} from "@/components/brand"
import {Button} from "@/components/ui/button"

export interface RouterContext {
  onReserve: (subdomain: string) => void
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
  notFoundComponent: NotFoundPage,
})

function NotFoundPage() {
  useEffect(() => {
    document.title = "404 | has-a.computer"
  }, [])

  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-[#fbfdff] text-(--site-ink) antialiased [background-image:radial-gradient(ellipse_at_85%_40%,#e4f4fb,transparent_60%)]">
      <a
        className="fixed top-2.5 left-2.5 z-100 rounded-[8px] bg-white px-[18px] py-2.5 text-[#075f8e] [transform:translateY(-160%)] focus:[transform:translateY(0)]"
        href="#main"
      >
        Skip to content
      </a>
      <header className="mx-auto w-full max-w-[1120px] px-6 py-7 sm:px-10 sm:py-9">
        <Brand />
      </header>
      <main
        id="main"
        className="mx-auto grid w-full max-w-[1120px] flex-1 items-center gap-6 px-6 pt-8 pb-12 sm:px-10 md:grid-cols-2 md:gap-12 md:pt-8 md:pb-24"
      >
        <div className="relative z-10 text-center md:text-left">
          <p className="font-mono text-[clamp(120px,15vw,184px)] leading-[0.85] font-light tracking-[-0.07em] text-[#536d7b]">
            404
          </p>
          <h1 className="mx-auto mt-7 max-w-[17ch] text-[clamp(28px,3.2vw,40px)] leading-[1.15] font-semibold tracking-[-0.035em] text-balance md:mx-0">
            Looks like you took a wrong turn.
          </h1>
          <p className="mx-auto mt-5 max-w-[38ch] text-[15px]/[1.75] text-[#536d7b] md:mx-0">
            The page you&apos;re looking for may have moved, been deleted, or never existed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <Button
              asChild
              className="h-10 gap-1.5 rounded-full bg-[#0877a7] px-4 text-sm text-white shadow-[0_0_20px_#0877a733,inset_0_1px_0_#ffffff33] transition-[background-color,box-shadow] hover:bg-[#06648e] hover:shadow-[0_0_26px_#0877a74d,inset_0_1px_0_#ffffff33]"
            >
              <Link to="/" data-cuelume-press>
                Back to Home
                <RiArrowRightLine
                  aria-hidden="true"
                  className="transition-transform group-hover/button:translate-x-0.5"
                />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-10 rounded-full px-3 text-sm text-[#536d7b] transition-[background-color,box-shadow,color] hover:bg-[#eaf3f8] hover:text-(--site-ink) hover:shadow-[0_0_16px_#0877a71a]"
            >
              <a href="mailto:admin@has-a.computer" data-cuelume-press="tick">
                Contact Support
              </a>
            </Button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none relative mx-auto aspect-square w-full max-w-[280px] select-none md:max-w-[440px]"
        >
          <div className="absolute inset-[5%] rounded-full bg-[radial-gradient(circle,#d4eefb_0%,#eaf6fc_50%,transparent_72%)]" />
          <div className="absolute right-[25%] bottom-[10%] left-[25%] h-[7%] rounded-full bg-[#27627c]/15 blur-xl" />
          <img
            className="absolute top-[17%] left-[9%] w-[78%] animate-[domain-float_7s_ease-in-out_infinite] drop-shadow-[0_14px_14px_#285f741a]"
            src="/images/retro-computer.webp"
            alt=""
            width="1254"
            height="1254"
            draggable={false}
          />
        </div>
      </main>
    </div>
  )
}
