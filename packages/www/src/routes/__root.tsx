import {createRootRouteWithContext, Outlet} from "@tanstack/react-router"

export interface RouterContext {
  onReserve: (subdomain: string) => void
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
})
