import {useEffect, useState} from "react"
import {bind} from "cuelume"
import {RouterProvider} from "@tanstack/react-router"
import {ReserveForm} from "@/components/reserve-form"
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
    open: boolean
    subdomain: string
  }>({open: false, subdomain: ""})

  useEffect(() => {
    bind()
  }, [])

  const onReserve = (subdomain: string) => setReserve({open: true, subdomain})

  return (
    <>
      <RouterProvider router={router} context={{onReserve}} />
      <Dialog
        open={reserve.open}
        onOpenChange={(open) => setReserve((current) => ({...current, open}))}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request to reserve an address</DialogTitle>
            <DialogDescription>
              We review every request by hand and will get back to you by email.
            </DialogDescription>
          </DialogHeader>
          <ReserveForm
            initialSubdomain={reserve.subdomain}
            onReserved={() => setReserve({open: false, subdomain: ""})}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
