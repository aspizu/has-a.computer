import type {OpenClaim} from "@/components/App"
import {Brand} from "@/components/brand"
import {Button} from "@/components/ui/button"

const links: {label: string; href: string}[] = [
  {label: "Terms of Service", href: "#"},
  {label: "Contact Us", href: "#"},
  {label: "GitHub", href: "#"},
  {label: "Discord", href: "#"},
]

export function Nav({onOpen}: {onOpen: OpenClaim}) {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Main navigation">
        <div className="nav-links">
          {links.map(({label, href}) => (
            <a className="nav-link" key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
        <Button
          type="button"
          className="nav-register"
          onClick={(event) => onOpen(event.currentTarget)}
        >
          Get a name
        </Button>
      </nav>
    </header>
  )
}
