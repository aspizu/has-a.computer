import {RiCloseLine, RiDiscordFill} from "@remixicon/react"
import {Button} from "@/components/ui/button"
import {DialogClose, DialogContent, DialogDescription, DialogTitle} from "@/components/ui/dialog"

export function ReserveSuccess() {
  return (
    <DialogContent
      showCloseButton={false}
      className="inset-0 flex h-dvh max-w-none translate-0 flex-col overflow-y-auto rounded-none bg-[#f8fdff] p-6 text-(--site-ink) ring-0 sm:max-w-none data-open:zoom-in-100 data-closed:zoom-out-100"
    >
      <img
        src="/images/sky-background.png"
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-35 select-none"
      />
      <DialogClose asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className="absolute top-5 right-5 z-10 rounded-full text-(--site-muted) hover:bg-white/60"
          aria-label="Close confirmation"
          data-cuelume-press="tick"
        >
          <RiCloseLine />
        </Button>
      </DialogClose>
      <div className="relative mx-auto my-auto flex w-full max-w-md shrink-0 flex-col items-center py-10 text-center">
        <img
          src="/images/reservation-mailbox.png"
          alt=""
          width="1254"
          height="1254"
          className="mb-6 size-36 animate-[reveal-in_700ms_var(--ease-reveal)_80ms_backwards] select-none sm:size-44 short-landscape:hidden"
        />
        <DialogTitle className="animate-[reveal-in_650ms_var(--ease-reveal)_160ms_backwards] font-brand text-4xl leading-tight font-[850] tracking-normal sm:text-5xl">
          Congrats!
        </DialogTitle>
        <DialogDescription className="mt-4 max-w-xs animate-[reveal-in_650ms_var(--ease-reveal)_240ms_backwards] text-[13px]/relaxed text-(--site-ink)">
          Your request is in. We&apos;ll get back to you by email.
        </DialogDescription>
        <div className="mt-8 flex animate-[reveal-in_650ms_var(--ease-reveal)_320ms_backwards] flex-col items-center gap-4">
          <p className="text-[11px]/relaxed text-(--site-link)">
            In the meantime, join our Discord server.
          </p>
          <Button
            asChild
            className="h-11 gap-2 rounded-full border-[#ffffff33] px-6 text-sm [background-image:radial-gradient(ellipse_70%_75%_at_50%_0%,#ffffff20,transparent_75%),radial-gradient(ellipse_65%_65%_at_50%_100%,#ffffff18,transparent_75%)] [box-shadow:0_4px_12px_#0089c325,inset_0_2px_4px_#ffffff28,inset_0_-2px_4px_#ffffff1e] transition-[scale,background-color,box-shadow] duration-150 hover:bg-[#0079b6] active:scale-96 active:not-aria-[haspopup]:translate-y-0"
          >
            <a
              href="https://discord.gg/mKQqsJ6UtK"
              target="_blank"
              rel="noopener noreferrer"
              data-cuelume-press
            >
              <RiDiscordFill aria-hidden="true" />
              Join our Discord
            </a>
          </Button>
        </div>
      </div>
    </DialogContent>
  )
}
