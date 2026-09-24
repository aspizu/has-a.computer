import type {ReactNode} from "react"

export function Terminal({
  title,
  tabs,
  lines,
}: {
  title: string
  tabs?: string[]
  lines: ReactNode[]
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1017] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-zinc-500">{title}</span>
        {tabs ? (
          <div className="ml-auto flex gap-1">
            {tabs.map((tab) => (
              <span
                key={tab}
                className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
              >
                {tab}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </pre>
    </div>
  )
}

export function Cmd({children}: {children: string}) {
  return (
    <span>
      <span className="select-none text-orange-400">$ </span>
      {children}
    </span>
  )
}
