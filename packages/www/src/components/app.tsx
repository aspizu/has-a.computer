import {useEffect, useState} from "react"
import {bind} from "cuelume"
import {RouterProvider} from "@tanstack/react-router"
import {ReserveForm} from "@/components/reserve-form"
import {ReserveSuccess} from "@/components/reserve-success"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {router} from "@/router"

export default function App() {
  const [reserve, setReserve] = useState<{
    step: "closed" | "form" | "success"
    subdomain: string
  }>({step: "closed", subdomain: ""})

  useEffect(() => {
    bind()
  }, [])

  useEffect(() => {
    if (!import.meta.env.DEV) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.shiftKey && event.code === "KeyS") {
        event.preventDefault()
        setReserve({step: "success", subdomain: ""})
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const onReserve = (subdomain: string) => setReserve({step: "form", subdomain})

  return (
    <>
      <RouterProvider router={router} context={{onReserve}} />
      <Dialog
        open={reserve.step !== "closed"}
        onOpenChange={(open) => {
          if (!open) setReserve({step: "closed", subdomain: ""})
        }}
      >
        {reserve.step === "success" ? (
          <ReserveSuccess />
        ) : (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Request to reserve an address</DialogTitle>
              <DialogDescription>
                We review every request by hand and will get back to you by email.
              </DialogDescription>
            </DialogHeader>
            <ReserveForm
              initialSubdomain={reserve.subdomain}
              onReserved={() => setReserve({step: "success", subdomain: ""})}
            />
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
