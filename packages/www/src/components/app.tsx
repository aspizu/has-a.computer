import {useEffect, useState} from "react"
import {bind} from "cuelume"
import {RouterProvider} from "@tanstack/react-router"
import {ReserveForm, useReserveForm} from "@/components/reserve-form"
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
  const [reserveStep, setReserveStep] = useState<"closed" | "form" | "success">("closed")
  const {form, reservation} = useReserveForm(() => setReserveStep("success"))

  useEffect(() => {
    bind()
  }, [])

  useEffect(() => {
    if (!import.meta.env.DEV) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.shiftKey && event.code === "KeyS") {
        event.preventDefault()
        setReserveStep("success")
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const onReserve = (subdomain: string) => {
    if (subdomain && !reservation.isPending) form.setFieldValue("subdomain", subdomain)
    setReserveStep("form")
  }

  return (
    <>
      <RouterProvider router={router} context={{onReserve}} />
      <Dialog
        open={reserveStep !== "closed"}
        onOpenChange={(open) => {
          if (!open) setReserveStep("closed")
        }}
      >
        {reserveStep === "success" ? (
          <ReserveSuccess />
        ) : (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Request to reserve an address</DialogTitle>
              <DialogDescription>
                We review every request by hand and will get back to you by email.
              </DialogDescription>
            </DialogHeader>
            <ReserveForm form={form} reservation={reservation} />
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
