export function SectionLabel({id, title}: {id: string; title?: string}) {
  return (
    <div className="section-label">
      <span aria-hidden="true">{id}</span>
      {title}
    </div>
  )
}
