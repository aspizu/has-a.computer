import * as React from "react"
import {cn} from "@/lib/utils"
import {Dialog as DialogPrimitive} from "radix-ui"

import {Button} from "@/components/ui/button"
import {RiCloseLine} from "@remixicon/react"

function Dialog({...props}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({...props}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({...props}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({...props}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-60 animate-[fade-in_220ms_ease-out] bg-[#15394d45] [backdrop-filter:blur(10px)] data-[state=closed]:animate-[overlay-out_180ms_ease-in]",
        className,
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-61 max-h-[calc(100svh-48px)] w-[min(460px,calc(100%-32px))] animate-[dialog-in_280ms_var(--ease-reveal)] overflow-y-auto rounded-[22px] border border-white bg-white px-8 pt-9 pb-7 text-(--site-ink) [box-shadow:0_24px_100px_#14476830] [outline:none] [transform:translate(-50%,-50%)] data-[state=closed]:pointer-events-none data-[state=closed]:animate-[dialog-out_180ms_ease-in] mobile:px-6 mobile:pb-[26px] tiny:px-[19px]",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close data-slot="dialog-close" asChild>
            <Button
              variant="ghost"
              className="group/close absolute top-3 right-3 size-[30px] rounded-[50%] p-0 text-[#657b87] [&:hover]:text-[#657b87] [&:hover]:bg-[#edf7fb] [&:hover]:bg-clip-border"
              size="icon-sm"
            >
              <RiCloseLine
                className="size-5 [transition:rotate_180ms_var(--ease-reveal)] group-hocus/close:rotate-90"
                aria-hidden="true"
              />
              <span className="sr-only">Close dialog</span>
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div data-slot="dialog-header" className={cn("flex flex-col gap-2", className)} {...props} />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({className, ...props}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("pr-[22px] font-brand text-[26px] font-extrabold tracking-[-0.7px]", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-[13px] leading-[1.7] text-(--site-muted) *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className,
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
